import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Users, Clock } from 'lucide-react';

// Custom hook for counter animation
const useCounter = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startCounters, setStartCounters] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Counter hooks
  const professionalsCount = useCounter(5000, 2500, startCounters);
  const yearsCount = useCounter(15, 2000, startCounters);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start counters with a slight delay after visibility
            setTimeout(() => setStartCounters(true), 500);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-agspl-blue via-agspl-blue to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-agspl-red rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-agspl-red rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-pulse"></div>
      </div>
      
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-6 hover:scale-105 transition-transform duration-300">
          Ready for Unmatched Security & Peace of Mind?
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-agspl-red to-red-400 mx-auto mb-8 rounded-full"></div>
        
        <p className="font-open-sans text-xl text-white mb-10 leading-relaxed max-w-3xl mx-auto">
          Connect with our experts today for a personalized security assessment and a comprehensive quote tailored to your unique needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-agspl-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg group">
            <span className="group-hover:mr-2 transition-all duration-300">Request a Free Quote</span>
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-agspl-blue hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
            <Phone className="inline-block mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Contact Us Directly</span>
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white" style={{ animationDelay: '0.5s' }}>
          <div className="group hover:scale-110 transition-transform duration-300">
            <Clock className="h-8 w-8 text-agspl-red mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
            <div className="font-montserrat font-semibold text-2xl text-agspl-red mb-2 group-hover:text-red-400 transition-colors duration-300">
              24/7
            </div>
            <div className="font-open-sans group-hover:text-gray-200 transition-colors duration-300">Emergency Response</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300">
            <Users className="h-8 w-8 text-agspl-red mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
            <div className="font-montserrat font-semibold text-2xl text-agspl-red mb-2 group-hover:text-red-400 transition-colors duration-300">
              {startCounters ? `${professionalsCount.toLocaleString()}+` : '0+'}
            </div>
            <div className="font-open-sans group-hover:text-gray-200 transition-colors duration-300">Trained Professionals</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-agspl-red rounded-full mx-auto mb-2 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-sm">★</span>
            </div>
            <div className="font-montserrat font-semibold text-2xl text-agspl-red mb-2 group-hover:text-red-400 transition-colors duration-300">
              {startCounters ? `${yearsCount}+` : '0+'}
            </div>
            <div className="font-open-sans group-hover:text-gray-200 transition-colors duration-300">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;