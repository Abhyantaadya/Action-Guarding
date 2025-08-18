import React from 'react';
import { Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const DirectContact = () => {
  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Or Reach Us Directly
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Prefer to contact us directly? Use any of the methods below to get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-agspl-red bg-opacity-10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-agspl-red" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-2">
                    Phone Number
                  </h3>
                  <a 
                    href="tel:+919876543210" 
                    className="font-open-sans text-lg text-gray-700 hover:text-agspl-red transition-colors duration-300"
                  >
                    +91 98765 43210
                  </a>
                  <p className="font-open-sans text-sm text-gray-600 mt-1">
                    24/7 Emergency Response Available
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-agspl-red bg-opacity-10 rounded-full p-3">
                  <Mail className="h-6 w-6 text-agspl-red" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-2">
                    Email Address
                  </h3>
                  <a 
                    href="mailto:info@actionforce.in" 
                    className="font-open-sans text-lg text-gray-700 hover:text-agspl-red transition-colors duration-300"
                  >
                    info@actionforce.in
                  </a>
                  <p className="font-open-sans text-sm text-gray-600 mt-1">
                    We respond within 24 business hours
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-agspl-red bg-opacity-10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-agspl-red" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-2">
                    Business Hours
                  </h3>
                  <div className="font-open-sans text-gray-700">
                    <p className="mb-1">Office Hours: Monday - Friday</p>
                    <p className="text-lg font-semibold">9:00 AM - 6:00 PM IST</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media & Additional Info */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-xl p-8 shadow-lg h-full">
              <h3 className="font-montserrat font-semibold text-2xl text-agspl-blue mb-6">
                Connect With Us
              </h3>
              
              <div className="mb-8">
                <h4 className="font-montserrat font-semibold text-lg text-agspl-blue mb-4">
                  Follow Us on Social Media
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/share/1C6tAHPv9R/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-agspl-blue text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://x.com/action_guarding?t=STRwJe7Qt_PMKQbLyayQTg&s=09" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-agspl-blue text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/action-guarding-services/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-agspl-blue text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/actionguarding?igsh=eXd3bG56cjQxMHFz" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-agspl-blue text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-montserrat font-semibold text-lg text-agspl-blue mb-4">
                  Quick Response Guarantee
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-agspl-red rounded-full"></div>
                    <span className="font-open-sans text-gray-700">Email inquiries: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-agspl-red rounded-full"></div>
                    <span className="font-open-sans text-gray-700">Phone calls: Immediate response</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-agspl-red rounded-full"></div>
                    <span className="font-open-sans text-gray-700">Emergency situations: 24/7 availability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-agspl-red rounded-full"></div>
                    <span className="font-open-sans text-gray-700">Site visits: Within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectContact;