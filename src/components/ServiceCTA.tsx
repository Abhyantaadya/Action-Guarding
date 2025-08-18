import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCTAProps {
  serviceName: string;
}

const ServiceCTA = ({ serviceName }: ServiceCTAProps) => {
  return (
    <section className="py-20 bg-agspl-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-agspl-red rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-agspl-red rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-6">
          Ready to Secure Your Future?
        </h2>
        
        <p className="font-open-sans text-xl text-white mb-10 leading-relaxed max-w-3xl mx-auto">
          Get a personalized quote for our {serviceName.toLowerCase()} services and discover how we can protect what matters most to you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact#contact-form-section"
            className="bg-agspl-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
          >
            Request a {serviceName} Quote
          </Link>
          <Link 
            to="/#security-solutions-overview"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-agspl-blue transition-all duration-300 inline-block"
          >
            View All Our Security Solutions
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="font-montserrat font-semibold text-2xl text-agspl-red mb-2">24/7</div>
            <div className="font-open-sans">Emergency Response</div>
          </div>
          <div>
            <div className="font-montserrat font-semibold text-2xl text-agspl-red mb-2">5000+</div>
            <div className="font-open-sans">Trained Professionals</div>
          </div>
          <div>
            <div className="font-montserrat font-semibold text-2xl text-agspl-red mb-2">15+</div>
            <div className="font-open-sans">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;