import React from 'react';
import { GraduationCap, TrendingUp, Users, Target } from 'lucide-react';

const WhyWorkWithUs = () => {
  const benefits = [
    {
      icon: <GraduationCap className="h-12 w-12 text-agspl-red mb-4" />,
      title: "Certified Training & Development",
      description: "Access to NSDC/MEPSC certified programs and continuous skill enhancement opportunities that advance your career."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-agspl-red mb-4" />,
      title: "Professional Growth",
      description: "Clear career progression paths with opportunities to advance from security guard to supervisor and management roles."
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red mb-4" />,
      title: "Supportive Culture",
      description: "Join a team that values integrity, excellence, and mutual respect, led by experienced military professionals."
    },
    {
      icon: <Target className="h-12 w-12 text-agspl-red mb-4" />,
      title: "Impactful Work",
      description: "Make a real difference by protecting communities, businesses, and assets while building a meaningful career."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Why Choose a Career at Action Guarding Services?
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-agspl-light-gray rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4">
                {benefit.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;