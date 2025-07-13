import React from 'react';
import { Target, Eye, Heart, Shield, Star, Users } from 'lucide-react';

const MissionVisionValues = () => {
  const values = [
    {
      icon: <Heart className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our operations."
    },
    {
      icon: <Eye className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Vigilance",
      description: "Maintaining constant readiness and proactive threat detection."
    },
    {
      icon: <Star className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Excellence",
      description: "Committed to continuous improvement through certified training and cutting-edge technology."
    },
    {
      icon: <Users className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Client Focus",
      description: "Prioritizing client needs with customized solutions and responsive support."
    }
  ];

  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Our Guiding Principles
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
        </div>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-left">
            <div className="flex items-center mb-6">
              <Target className="h-12 w-12 text-agspl-red mr-4" />
              <h3 className="font-montserrat font-bold text-2xl text-agspl-blue">Our Mission</h3>
            </div>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
              To deliver unparalleled, integrated security solutions that empower businesses and communities with unwavering safety and peace of mind.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-right">
            <div className="flex items-center mb-6">
              <Shield className="h-12 w-12 text-agspl-red mr-4" />
              <h3 className="font-montserrat font-bold text-2xl text-agspl-blue">Our Vision</h3>
            </div>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
              To be the most trusted and advanced security partner in South India, continuously innovating to meet evolving security challenges.
            </p>
          </div>
        </div>
        
        {/* Core Values */}
        <div>
          <h3 className="font-montserrat font-bold text-3xl text-agspl-blue text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4">
                  {value.title}
                </h4>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;