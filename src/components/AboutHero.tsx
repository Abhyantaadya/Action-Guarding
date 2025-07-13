import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-agspl-blue via-agspl-blue to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-agspl-red rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border-2 border-agspl-red rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-8 animate-fade-in-up">
          Our Story: Vigilance, Integrity, Excellence
        </h1>
        
        <p className="font-open-sans text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Building on decades of expertise, AGSPL is dedicated to setting new benchmarks in integrated security solutions across South India.
        </p>
        
        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-2 h-16 bg-agspl-red rounded-full"></div>
          <div className="w-2 h-12 bg-white rounded-full mt-2"></div>
          <div className="w-2 h-20 bg-agspl-red rounded-full"></div>
          <div className="w-2 h-8 bg-white rounded-full mt-4"></div>
          <div className="w-2 h-16 bg-agspl-red rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;