import React, { useState } from 'react';
import { Upload, Send } from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobRole: '',
    experience: '',
    message: '',
    resume: null as File | null
  });

  const jobRoles = [
    'Security Guard',
    'Security Supervisor',
    'Executive Protection Officer',
    'Canine Handler',
    'Training Instructor',
    'Electronic Security Technician',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Apply Now: Take the First Step
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to join our elite security team? Submit your application and start your journey with AGSPL.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="jobRole" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Preferred Job Role *
                </label>
                <select
                  id="jobRole"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                >
                  <option value="">Select a role</option>
                  {jobRoles.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="experience" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                Years of Security Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                placeholder="e.g., 2 years, Fresh Graduate, etc."
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                Message / Cover Letter
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans resize-vertical"
                placeholder="Tell us about yourself and why you want to join AGSPL..."
              />
            </div>
            
            <div>
              <label htmlFor="resume" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                Upload Resume *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-agspl-red transition-colors duration-300 bg-gray-50 hover:bg-gray-100"
                >
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <span className="font-open-sans text-gray-600">
                      {formData.resume ? formData.resume.name : 'Click to upload resume (PDF, DOC, DOCX - Max 5MB)'}
                    </span>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-agspl-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;