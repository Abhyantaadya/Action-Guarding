import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75"
        style={{ 
          backgroundImage: 'url(/Gemini_Generated_Image_ieh54yieh54yieh5.png)',
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-agspl-blue/80 via-agspl-blue/70 to-blue-900/80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-agspl-red/30 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border border-agspl-red/30 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
        <h1 
          className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 animate-fade-in-up hover:scale-105 transition-all duration-700 transform"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0001})`,
            opacity: Math.max(0.3, 1 - scrollY * 0.001)
          }}
        >
          Your Trusted Partner in <br />
          <span className="text-agspl-red bg-gradient-to-r from-agspl-red to-red-400 bg-clip-text text-transparent">Integrated Security Solutions</span>
        </h1>
        
        <p className="font-open-sans text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Unwavering Vigilance. Advanced Expertise. Complete Peace of Mind.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="bg-agspl-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg group">
            Request a Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-agspl-blue hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            Explore Our Services
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer group">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-agspl-red transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-agspl-red transition-colors duration-300"></div>
        </div>
        <p className="text-xs mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
  )
}