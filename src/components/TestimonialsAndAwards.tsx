import React, { useEffect, useRef, useState } from 'react';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

const TestimonialsAndAwards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const testimonials = [
    {
      author: {
        name: "Rajesh Kumar",
        handle: "Tech Innovation Hub",
        avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "Action Guarding Services has been our trusted security partner for over 3 years. Their professional approach and highly trained personnel have given us complete peace of mind."
    },
    {
      author: {
        name: "Priya Sharma",
        handle: "Global Manufacturing Ltd.",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "The integrated security solutions provided by AGSPL exceeded our expectations. Their ex-Navy leadership brings a level of expertise that's unmatched in the industry."
    },
    {
      author: {
        name: "Dr. Mohammed Ali",
        handle: "City General Hospital",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "Outstanding service quality and professionalism. Their 24/7 monitoring and rapid response team has been instrumental in maintaining our facility's security standards."
    },
    {
      author: {
        name: "Anita Reddy",
        handle: "Metro Residential Complex",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "We've been working with Action Guarding Services for our residential complex for 2 years now. Their guards are courteous, professional, and create a safe environment for all our residents."
    },
    {
      author: {
        name: "Vikram Singh",
        handle: "Central Shopping Mall",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "The canine detection services provided by AGSPL have been invaluable for our events and facility security. Their dog squad is highly trained and effective in detecting potential threats."
    }
  ];

  const awards = [
    { name: "NSDC Certified", icon: <Award className="h-8 w-8" /> },
    { name: "MEPSC Partner", icon: <Shield className="h-8 w-8" /> },
    { name: "ISO Certified", icon: <CheckCircle className="h-8 w-8" /> },
    { name: "PSARA Compliant", icon: <Star className="h-8 w-8" /> }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-agspl-light-gray relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agspl-blue/5 to-agspl-red/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <TestimonialsSection
          title="What Our Clients Say"
          description="Trusted by leading organizations across various industries"
          testimonials={testimonials}
          className="mb-20"
        />
        
        {/* Awards Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-agspl-blue mb-6 hover:scale-105 transition-transform duration-300">
              Awards & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-agspl-red to-red-400 mx-auto mb-6 rounded-full"></div>
            <p className="font-open-sans text-lg text-gray-600">
              Recognized for excellence in security services and training
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center text-agspl-red mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {award.icon}
                </div>
                <div className="font-montserrat font-semibold text-agspl-blue group-hover:text-agspl-red transition-colors duration-300">
                  {award.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndAwards;