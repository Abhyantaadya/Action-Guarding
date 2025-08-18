import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-agspl-blue to-blue-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute top-32 right-20 w-16 h-16 border-2 border-agspl-red rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-agspl-red rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-6">
              Ready to Experience Excellence?
            </h2>
            
            <p className="font-open-sans text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover how our proven expertise, unwavering commitment, and innovative solutions can transform your security landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link 
                to="/services/physical-guarding"
                className="bg-agspl-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="mailto:info@actionforce.in"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-agspl-blue transition-all duration-300 flex items-center justify-center"
              >
                Contact Our Team
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Shield className="h-12 w-12 text-agspl-red mb-4" />
                <div className="font-montserrat font-bold text-2xl mb-2">Trusted</div>
                <div className="font-open-sans text-gray-300">Security Partner</div>
              </div>
              <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Users className="h-12 w-12 text-agspl-red mb-4" />
                <div className="font-montserrat font-bold text-2xl mb-2">5000+</div>
                <div className="font-open-sans text-gray-300">Trained Professionals</div>
              </div>
              <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Award className="h-12 w-12 text-agspl-red mb-4" />
                <div className="font-montserrat font-bold text-2xl mb-2">Certified</div>
                <div className="font-open-sans text-gray-300">Excellence Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;