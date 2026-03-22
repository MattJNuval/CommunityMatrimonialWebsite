import { Heart, Users, Shield, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--cream)] via-white to-[var(--cream-dark)] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              About Nepali Matrimony
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Preserving our cultural heritage while helping families find meaningful connections for the next generation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm mb-6">
                Our Mission
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Building Bridges Between Families
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nepali Matrimony was founded with a simple yet profound mission: to help Nepali families around the world find compatible matches for their loved ones while honoring our rich cultural traditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the importance of family involvement, shared values, and cultural compatibility in creating lasting relationships. Our platform bridges the gap between traditional matchmaking and modern convenience.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767796704735-f4bbd932c297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFzaWFuJTIwZmFtaWx5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyMzA1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="South Asian family celebration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--cream-dark)] to-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Respect
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We treat every family with dignity and honor their preferences
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Trust
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Confidentiality and integrity in every interaction
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Community
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strengthening bonds within our Nepali community
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dedicated to finding the best matches for families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A careful, respectful approach to matchmaking
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Process Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Profile Submission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Families submit detailed profiles including personal information, education, career, family background, and preferences for a life partner.
                </p>
              </div>
            </div>

            {/* Process Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Verification & Review
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our dedicated team reviews each profile for authenticity and completeness. We may contact families to verify information and understand their preferences better.
                </p>
              </div>
            </div>

            {/* Process Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Matching Algorithm
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Using our database and personal expertise, we identify potential matches based on compatibility factors including values, education, lifestyle, and family expectations.
                </p>
              </div>
            </div>

            {/* Process Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Family Connection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We facilitate initial contact between families, providing profiles and arranging meetings. Families take it forward at their own pace with our continued support.
                </p>
              </div>
            </div>

            {/* Process Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Ongoing Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We remain available to support families throughout their journey, offering guidance and assistance until they find the right match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-[var(--maroon)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Successful Matches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Registered Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our team consists of dedicated community members who understand the importance of finding the right match. We bring together traditional wisdom and modern understanding to serve Nepali families worldwide.
            </p>
          </div>

          <div className="bg-[var(--cream)] rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
              What Makes Us Different
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Personal attention to every profile and family
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Deep understanding of Nepali culture and values
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Strict verification and privacy protection
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Support throughout the matchmaking journey
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Global network connecting Nepali families worldwide
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  No hidden fees or surprise charges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--cream-dark)] to-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you find the perfect match for your family
          </p>
          <Link
            to="/submit"
            className="bg-primary hover:bg-[var(--maroon)] text-white px-8 py-4 rounded-lg transition-colors shadow-md inline-block font-medium"
          >
            Submit Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
}
