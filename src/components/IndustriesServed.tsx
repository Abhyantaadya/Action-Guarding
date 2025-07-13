import React from 'react';
import { Building, Factory, Home, Briefcase, Heart, GraduationCap } from 'lucide-react';

const IndustriesServed = () => {
  const industries = [
    {
      icon: <Building className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Corporate Offices",
      description: "Comprehensive security solutions for business premises and corporate headquarters."
    },
    {
      icon: <Factory className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Industrial Facilities",
      description: "Specialized security for manufacturing plants, warehouses, and industrial complexes."
    },
    {
      icon: <Home className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Residential Complexes",
      description: "Reliable security services for gated communities and residential developments."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Commercial Establishments",
      description: "Tailored protection for retail stores, malls, and commercial properties."
    },
    {
      icon: <Heart className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Healthcare Facilities",
      description: "Sensitive security solutions for hospitals, clinics, and medical centers."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-agspl-red mb-4" />,
      title: "Educational Institutions",
      description: "Safe environment security for schools, colleges, and educational campuses."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Industries We Secure
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Protecting diverse sectors with industry-specific security expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-agspl-light-gray rounded-xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-2 border-transparent hover:border-agspl-red"
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4">
                {industry.title}
              </h4>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;