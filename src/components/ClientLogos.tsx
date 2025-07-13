import React from 'react';
import { Building, Factory, Home, Heart, GraduationCap, ShoppingBag } from 'lucide-react';

const ClientLogos = () => {
  const clientCategories = [
    {
      icon: <Building className="h-16 w-16 text-agspl-blue opacity-60" />,
      name: "Tech Innovation Hub",
      category: "IT Parks & Corporate"
    },
    {
      icon: <Factory className="h-16 w-16 text-agspl-blue opacity-60" />,
      name: "Global Manufacturing Ltd.",
      category: "Industrial Facilities"
    },
    {
      icon: <Home className="h-16 w-16 text-agspl-blue opacity-60" />,
      name: "Metro Residential Complex",
      category: "Residential Communities"
    },
    {
      icon: <Heart className="h-16 w-16 text-agspl-blue opacity-60" />,
      name: "City General Hospital",
      category: "Healthcare Facilities"
    },
    {
      icon: <GraduationCap className="h-16 w-16 text-agspl-blue opacity-60" />,
      name: "Premier Educational Institute",
      category: "Educational Institutions"
    },
    {
      icon: <ShoppingBag className="h-16 w-16 text-agspl-blue opacity-60" />,
      name: "Central Shopping Mall",
      category: "Retail & Commercial"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Who We Protect
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We proudly serve a wide array of clients, from major IT Parks and healthcare facilities to sprawling residential communities and large-scale public events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((client, index) => (
            <div 
              key={index}
              className="bg-agspl-light-gray rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                {client.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-2">
                {client.name}
              </h3>
              <p className="font-open-sans text-gray-600 text-sm">
                {client.category}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-agspl-blue to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">500+</div>
                <div className="font-open-sans">Active Clients</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">15+</div>
                <div className="font-open-sans">Years of Service</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">99.8%</div>
                <div className="font-open-sans">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;