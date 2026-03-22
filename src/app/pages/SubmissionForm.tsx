import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function SubmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    height: "",
    maritalStatus: "",
    
    // Contact Information
    email: "",
    phone: "",
    country: "",
    city: "",
    
    // Education & Career
    education: "",
    occupation: "",
    income: "",
    
    // Family Information
    fatherName: "",
    motherName: "",
    siblings: "",
    familyValues: "",
    
    // Partner Preferences
    agePreference: "",
    educationPreference: "",
    locationPreference: "",
    
    // Additional Information
    aboutYou: "",
    hobbies: "",
    expectations: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[var(--cream)] to-[var(--cream-dark)] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Profile Submitted Successfully!
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Thank you for submitting your profile to Nepali Matrimony. Our team will review your information and contact you within 2-3 business days.
            </p>
            <div className="bg-[var(--cream)] rounded-xl p-6 mb-8">
              <h3 className="font-serif text-xl text-foreground mb-3">What Happens Next?</h3>
              <ul className="text-left text-muted-foreground space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  Our team will verify your information
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  We'll contact you to discuss your preferences
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  We'll start searching for compatible matches
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  You'll be notified when potential matches are found
                </li>
              </ul>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary hover:bg-[var(--maroon)] text-white px-8 py-3 rounded-lg transition-colors"
            >
              Submit Another Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[var(--cream)] to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Submit Your Profile
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please fill out this form completely and honestly. All information will be kept confidential and used only for matchmaking purposes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          {/* Personal Information Section */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b-2 border-secondary/30">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-foreground mb-2">
                  First Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-foreground mb-2">
                  Last Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-foreground mb-2">
                  Date of Birth <span className="text-destructive">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-foreground mb-2">
                  Gender <span className="text-destructive">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="height" className="block text-foreground mb-2">
                  Height
                </label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="e.g., 5'8&quot;"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="maritalStatus" className="block text-foreground mb-2">
                  Marital Status <span className="text-destructive">*</span>
                </label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                >
                  <option value="">Select Status</option>
                  <option value="never-married">Never Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b-2 border-secondary/30">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-foreground mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-foreground mb-2">
                  Country <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-foreground mb-2">
                  City <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
            </div>
          </div>

          {/* Education & Career Section */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b-2 border-secondary/30">
              Education & Career
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="education" className="block text-foreground mb-2">
                  Highest Education <span className="text-destructive">*</span>
                </label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                >
                  <option value="">Select Education</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD/Doctorate</option>
                </select>
              </div>
              <div>
                <label htmlFor="occupation" className="block text-foreground mb-2">
                  Occupation <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Software Engineer"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="income" className="block text-foreground mb-2">
                  Annual Income Range
                </label>
                <select
                  id="income"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                >
                  <option value="">Prefer not to say</option>
                  <option value="0-30k">$0 - $30,000</option>
                  <option value="30k-60k">$30,000 - $60,000</option>
                  <option value="60k-100k">$60,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Family Information Section */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b-2 border-secondary/30">
              Family Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fatherName" className="block text-foreground mb-2">
                  Father's Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="motherName" className="block text-foreground mb-2">
                  Mother's Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="siblings" className="block text-foreground mb-2">
                  Number of Siblings
                </label>
                <input
                  type="number"
                  id="siblings"
                  name="siblings"
                  value={formData.siblings}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="familyValues" className="block text-foreground mb-2">
                  Family Values <span className="text-destructive">*</span>
                </label>
                <select
                  id="familyValues"
                  name="familyValues"
                  value={formData.familyValues}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                >
                  <option value="">Select</option>
                  <option value="traditional">Traditional</option>
                  <option value="moderate">Moderate</option>
                  <option value="liberal">Liberal</option>
                </select>
              </div>
            </div>
          </div>

          {/* Partner Preferences Section */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b-2 border-secondary/30">
              Partner Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="agePreference" className="block text-foreground mb-2">
                  Preferred Age Range
                </label>
                <input
                  type="text"
                  id="agePreference"
                  name="agePreference"
                  value={formData.agePreference}
                  onChange={handleChange}
                  placeholder="e.g., 25-30"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
              <div>
                <label htmlFor="educationPreference" className="block text-foreground mb-2">
                  Preferred Education Level
                </label>
                <select
                  id="educationPreference"
                  name="educationPreference"
                  value={formData.educationPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                >
                  <option value="">No Preference</option>
                  <option value="high-school">High School or Higher</option>
                  <option value="bachelors">Bachelor's Degree or Higher</option>
                  <option value="masters">Master's Degree or Higher</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="locationPreference" className="block text-foreground mb-2">
                  Location Preference
                </label>
                <input
                  type="text"
                  id="locationPreference"
                  name="locationPreference"
                  value={formData.locationPreference}
                  onChange={handleChange}
                  placeholder="e.g., USA, UK, Canada, Nepal, etc."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background"
                />
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b-2 border-secondary/30">
              Additional Information
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="aboutYou" className="block text-foreground mb-2">
                  About You <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="aboutYou"
                  name="aboutYou"
                  value={formData.aboutYou}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about yourself, your personality, values, and what makes you unique..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background resize-none"
                />
              </div>
              <div>
                <label htmlFor="hobbies" className="block text-foreground mb-2">
                  Hobbies & Interests
                </label>
                <textarea
                  id="hobbies"
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleChange}
                  rows={3}
                  placeholder="What do you enjoy doing in your free time?"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background resize-none"
                />
              </div>
              <div>
                <label htmlFor="expectations" className="block text-foreground mb-2">
                  What Are You Looking For?
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your ideal partner and what you're looking for in a relationship..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input-background resize-none"
                />
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-[var(--cream)] rounded-xl p-6 mb-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Privacy Notice:</strong> All information submitted will be kept strictly confidential. 
              Your profile will only be shared with potential matches and their families with your explicit consent. 
              We are committed to protecting your privacy and personal information.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-[var(--maroon)] text-white px-12 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Submit Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
