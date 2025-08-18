import React, { useState } from 'react';
import { Send, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'General Inquiry',
    'Physical Guarding',
    'Escort and EPO Security',
    'Electronic Security',
    'Dog Squad',
    'Fire Training and Threat Analysis',
    'NSDC/MEPSC Certified Training',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Our team will respond within 24 business hours.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceInterest: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form-section" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Send Us a Message
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Fill out the form below and our security experts will get back to you with personalized solutions for your needs.
          </p>
        </div>
        
        <div className="bg-agspl-light-gray rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="fullName" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="phone" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="company" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="serviceInterest" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                Service of Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block font-montserrat font-semibold text-agspl-blue mb-2">
                Your Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agspl-red focus:border-transparent transition-all duration-300 font-open-sans resize-vertical"
                  placeholder="Tell us about your security requirements, questions, or how we can help you..."
                />
              </div>
            </div>
            
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-agspl-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;