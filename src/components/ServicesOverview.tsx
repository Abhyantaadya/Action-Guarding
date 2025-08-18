import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, UserCheck, Monitor, Dog, Flame, GraduationCap, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleServices(prev => [...prev, index]);
              }, index * 150);
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

  const services = [
    {
      icon: <Shield className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Physical Guarding",
      description: "Professional security personnel providing round-the-clock protection for your premises and assets."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Escort and EPO Security",
      description: "Executive protection and escort services ensuring safe transit and personal security for VIPs."
    },
    {
      icon: <Monitor className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Electronic Security",
      description: "Advanced surveillance systems, access control, and smart security technology solutions."
    },
    {
      icon: <Dog className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Dog Squad",
      description: "Specialized canine units for explosive detection, drug detection, and perimeter security."
    },
    {
      icon: <Flame className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Fire Training & Threat Analysis",
      description: "Comprehensive fire safety training and security threat assessment services."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-agspl-red mb-4" />,
      title: "NSDC/MEPSC Certified Training",
      description: "Government-certified training programs for security professionals and corporate teams."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-agspl-light-gray relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-agspl-blue/10 to-transparent rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-agspl-red/10 to-transparent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6 hover:scale-105 transition-transform duration-300">
            Our Comprehensive Security Solutions
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-agspl-red via-red-400 to-agspl-red mx-auto mb-6 rounded-full animate-shimmer bg-size-200"></div>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored security services designed to meet your unique protection requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer relative overflow-hidden ${
                visibleServices.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-agspl-blue/5 via-transparent to-agspl-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="relative font-montserrat font-semibold text-xl text-agspl-blue mb-4 group-hover:text-agspl-red transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative font-open-sans text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <Link 
                to={getServiceRoute(service.title)}
                className="relative flex items-center text-agspl-red group-hover:translate-x-2 group-hover:text-red-600 transition-all duration-300"
              >
                <span className="font-open-sans font-semibold mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
              </Link>
              
              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-agspl-red rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services/physical-guarding"
            className="inline-block border-2 border-agspl-blue text-agspl-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-agspl-blue hover:text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;