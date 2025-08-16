import React from 'react';
import { Target, Eye, Heart, Shield, Star, Users, CheckCircle } from 'lucide-react';

const MissionVisionValues = () => {
  const visionPoints = [
    "Provide safe and secure environment",
    "Assure trusted relationship",
    "Create extraordinary value",
    "Touch human lives",
    "Inspire organizational growth",
    "Offer elite solutions",
    "Nurture social responsibility"
  ];

  const missionPoints = [
    "Achieve Superior Levels of Performance",
    "Architecting good corporate governance",
    "Crafting a passionate work face",
    "Transforming knowledge into productivity",
    "Integrating products and services",
    "Optimising the available resources",
    "Neutralising challenges effectively"
  ];

  const qualityPolicyPoints = [
    "Enhance client experience",
    "Adherence to statutory compliances",
    "Consistent delivery of quality services",
    "Talent recognition and development",
    "Improving the infrastructure and process",
    "Offering value based solutions",
    "Nullifying the errors continuously"
  ];

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
            <ul className="space-y-3">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-agspl-red rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-open-sans text-lg text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-right">
            <div className="flex items-center mb-6">
              <Shield className="h-12 w-12 text-agspl-red mr-4" />
              <h3 className="font-montserrat font-bold text-2xl text-agspl-blue">Our Vision</h3>
            </div>
            <ul className="space-y-3">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-agspl-red rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-open-sans text-lg text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
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
        
        {/* Quality Policy Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
            <div className="flex items-center justify-center mb-8">
              <CheckCircle className="h-12 w-12 text-agspl-red mr-4" />
              <h3 className="font-montserrat font-bold text-3xl text-agspl-blue">Our Quality Policy</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualityPolicyPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3 bg-agspl-light-gray rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-2 h-2 bg-agspl-red rounded-full mt-3 flex-shrink-0"></div>
                    <span className="font-open-sans text-lg text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;