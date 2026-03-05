import { Link } from "react-router";
import { Heart, Users, Shield, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--cream)] via-white to-[var(--cream-dark)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm mb-6">
                Trusted by Our Community
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Find Your Perfect Match Within Our{" "}
                <span className="text-primary">Nepali Community</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We connect compatible individuals from Nepali families worldwide, 
                honoring our traditions while embracing modern values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/submit"
                  className="bg-primary hover:bg-[var(--maroon)] text-white px-8 py-4 rounded-lg text-center transition-colors shadow-md inline-block"
                >
                  Submit Your Profile
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg text-center transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1766763845346-0ceff1bdfc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbGklMjB3ZWRkaW5nJTIwY291cGxlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzcyMzA1NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nepali wedding couple"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="font-semibold">500+ Matches Made</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Nepali Matrimony?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a safe, respectful platform for finding your life partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[var(--cream)] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Community Focused
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with individuals who share your cultural values and understand the importance of family traditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[var(--cream)] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Safe & Trustworthy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every profile is carefully reviewed by our community team to ensure authenticity and safety.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[var(--cream)] rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white fill-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Personal Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team works closely with families to understand preferences and find truly compatible matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--cream-dark)] to-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, respectful process to find your life partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-secondary">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                Submit Profile
              </h3>
              <p className="text-sm text-muted-foreground">
                Fill out our detailed form with your information
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-secondary">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                Review Process
              </h3>
              <p className="text-sm text-muted-foreground">
                Our team reviews and verifies your profile
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-secondary">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                Find Matches
              </h3>
              <p className="text-sm text-muted-foreground">
                We connect you with compatible profiles
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-secondary">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                Connect
              </h3>
              <p className="text-sm text-muted-foreground">
                Meet potential matches with family involvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real families who found happiness through our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-[var(--cream)] rounded-xl p-8 border border-secondary/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "We are grateful to Nepali Matrimony for helping us find our son's perfect match. The process was respectful and aligned with our family values."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">RS</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">The Sharma Family</div>
                  <div className="text-sm text-muted-foreground">California, USA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[var(--cream)] rounded-xl p-8 border border-secondary/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "The team understood exactly what we were looking for. They connected us with families who shared our values and traditions. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">PT</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">The Thapa Family</div>
                  <div className="text-sm text-muted-foreground">London, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-[var(--maroon)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of families who have found their perfect match through our trusted platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit"
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg transition-colors shadow-lg inline-block font-medium"
            >
              Submit Your Profile Today
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-colors inline-block font-medium"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
