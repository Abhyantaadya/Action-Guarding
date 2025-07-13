import React, { useEffect, useRef, useState } from 'react';
import { Shield, Users, Award, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            reasons.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
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

  const reasons = [
    {
      icon: <Users className="h-12 w-12 text-agspl-red mb-4" />,
      title: "5000+ Trained Professionals",
      description: "Highly skilled and certified security personnel ready to protect your assets with unwavering dedication."
    },
    {
      icon: <Shield className="h-12 w-12 text-agspl-red mb-4" />,
      title: "Ex-Indian Navy Leadership",
      description: "Led by Mr. Subhani Abdul with extensive military experience ensuring strategic security solutions."
    },
    {
      icon: <Award className="h-12 w-12 text-agspl-red mb-4" />,
      title: "Certified Excellence",
      description: "NSDC/MEPSC certified training programs ensuring industry-standard security protocols and practices."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-agspl-red mb-4" />,
      title: "Integrated Solutions",
      description: "Comprehensive security ecosystem combining physical guarding, technology, and expert consulting."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agspl-blue/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6 hover:scale-105 transition-transform duration-300">
            Why Choose Action Guarding Services?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agspl-red to-red-400 mx-auto mb-6 rounded-full"></div>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in providing world-class security solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-agspl-light-gray group relative overflow-hidden ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-agspl-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="relative font-montserrat font-semibold text-xl text-agspl-blue mb-4 group-hover:text-agspl-red transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="relative font-open-sans text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {reason.description}
              </p>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-agspl-red rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;