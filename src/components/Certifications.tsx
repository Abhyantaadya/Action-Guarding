import React from 'react';
import { Award, Shield, CheckCircle, Star, AlignCenterVertical as Certificate, Users } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Award className="h-12 w-12 text-agspl-red" />,
      title: "NSDC Certified",
      description: "National Skill Development Corporation certification ensuring industry-standard training protocols."
    },
    {
      icon: <Shield className="h-12 w-12 text-agspl-red" />,
      title: "MEPSC Partner",
      description: "Maharashtra Employment and Productivity Skills Council partnership for excellence in security services."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-agspl-red" />,
      title: "ISO Certified",
      description: "International Organization for Standardization certification for quality management systems."
    },
    {
      icon: <Star className="h-12 w-12 text-agspl-red" />,
      title: "PSARA Compliant",
      description: "Private Security Agencies Regulation Act compliance ensuring legal and regulatory adherence."
    },
    {
      icon: <Certificate className="h-12 w-12 text-agspl-red" />,
      title: "Government Approved",
      description: "Officially recognized and approved by relevant government authorities for security operations."
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red" />,
      title: "Industry Recognition",
      description: "Acknowledged by industry bodies for excellence in security service delivery and innovation."
    }
  ];

  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Our Commitment to Standards
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We adhere to the highest industry benchmarks, ensuring our services are always of uncompromising quality and fully compliant with national regulations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                {cert.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4">
                {cert.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Quality Commitment Statement */}
        <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-montserrat font-bold text-3xl text-agspl-blue mb-6">
              Quality is Our Foundation
            </h3>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-8">
              Our certifications represent more than compliance—they embody our unwavering commitment to excellence. Every certification we hold reflects our dedication to maintaining the highest standards in security services, continuous professional development, and regulatory adherence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">100%</div>
                <div className="font-open-sans text-gray-600">Compliance Rate</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">6+</div>
                <div className="font-open-sans text-gray-600">Major Certifications</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">15+</div>
                <div className="font-open-sans text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;