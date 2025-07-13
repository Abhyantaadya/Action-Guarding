import React from 'react';
import { Clock, UserCheck, FileText, Shield } from 'lucide-react';

const WhatHappensNext = () => {
  const steps = [
    {
      icon: <Clock className="h-8 w-8 text-agspl-red" />,
      title: "Quick Response",
      description: "Our team will respond within 24 business hours to acknowledge your inquiry and gather initial requirements."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-agspl-red" />,
      title: "Consultation Call",
      description: "We'll schedule a detailed consultation to understand your specific security needs and challenges."
    },
    {
      icon: <FileText className="h-8 w-8 text-agspl-red" />,
      title: "Custom Proposal",
      description: "Our experts will prepare a comprehensive security proposal tailored to your requirements and budget."
    },
    {
      icon: <Shield className="h-8 w-8 text-agspl-red" />,
      title: "Implementation",
      description: "Once approved, we'll deploy our security solutions with minimal disruption to your operations."
    }
  ];

  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            What Happens After You Contact Us?
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you get the security solutions you need quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="bg-agspl-red bg-opacity-10 rounded-full p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-agspl-red text-white rounded-full w-8 h-8 flex items-center justify-center font-montserrat font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4">
                {step.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl text-agspl-blue mb-4">
              Ready to Get Started?
            </h3>
            <p className="font-open-sans text-lg text-gray-700 mb-6">
              Don't wait for a security incident to happen. Contact us today and let our experts design a comprehensive security solution that protects what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210"
                className="bg-agspl-red text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-colors duration-300 inline-block"
              >
                Call Now: +91 98765 43210
              </a>
              <a 
                href="mailto:info@actionguarding.com"
                className="border-2 border-agspl-blue text-agspl-blue px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-agspl-blue hover:text-white transition-all duration-300 inline-block"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;