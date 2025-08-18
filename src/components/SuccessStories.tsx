import React from 'react';
import { ArrowRight, Shield, Building, Users, Award } from 'lucide-react';

const SuccessStories = () => {
  const caseStudies = [
    {
      icon: <Building className="h-12 w-12 text-agspl-red" />,
      title: "Corporate Campus Security Transformation",
      summary: "How we revolutionized security for a 50-acre IT campus with 10,000+ employees using integrated physical and electronic security solutions.",
      industry: "Information Technology",
      challenge: "Large-scale campus security",
      solution: "Integrated security ecosystem",
      image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: <Shield className="h-12 w-12 text-agspl-red" />,
      title: "High-Profile Event Security Excellence",
      summary: "Successfully secured a major international conference with 5,000+ attendees, including VIP protection and threat detection services.",
      industry: "Event Management",
      challenge: "Multi-layered event security",
      solution: "Comprehensive protection protocol",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red" />,
      title: "Residential Community Safety Enhancement",
      summary: "Transformed security for a 2,000-unit residential complex, reducing security incidents by 95% through strategic deployment.",
      industry: "Residential",
      challenge: "Community-wide safety",
      solution: "24/7 integrated monitoring",
      image: "/Manufacturing Facility Security Overhaul.png/Gemini_Generated_Image_8b7ml48b7ml48b7m (1)[1].png"
    },
    {
      icon: <Award className="h-12 w-12 text-agspl-red" />,
      title: "Manufacturing Facility Security Overhaul",
      summary: "Implemented comprehensive security measures for a critical manufacturing facility, ensuring zero security breaches for 3+ years.",
      industry: "Manufacturing",
      challenge: "Industrial asset protection",
      solution: "Multi-tier security framework",
      image: "/Manufacturing Facility Security Overhaul.png/Gemini_Generated_Image_8b7ml48b7ml48b7m (1)[1].png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            In-Depth Success Stories
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Explore how Action Guarding Services has provided tailored solutions to complex security challenges, delivering tangible results and peace of mind for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-agspl-light-gray rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                  {study.icon}
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block bg-agspl-red text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="font-montserrat font-bold text-xl text-agspl-blue mb-4">
                  {study.title}
                </h3>
                
                <p className="font-open-sans text-gray-700 leading-relaxed mb-6">
                  {study.summary}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="font-montserrat font-semibold text-agspl-blue text-sm mr-2">Challenge:</span>
                    <span className="font-open-sans text-gray-600 text-sm">{study.challenge}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-montserrat font-semibold text-agspl-blue text-sm mr-2">Solution:</span>
                    <span className="font-open-sans text-gray-600 text-sm">{study.solution}</span>
                  </div>
                </div>
                
                <button className="flex items-center text-agspl-red font-montserrat font-semibold hover:text-red-700 transition-colors duration-300 group-hover:translate-x-2">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-agspl-blue to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="font-open-sans text-lg mb-6 max-w-2xl mx-auto">
              Let us help you overcome your security challenges with customized solutions that deliver measurable results.
            </p>
            <button className="bg-agspl-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Discuss Your Security Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;