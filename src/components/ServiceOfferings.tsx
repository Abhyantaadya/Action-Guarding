import React from 'react';

interface ServiceOfferingProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceOfferingsProps {
  title: string;
  offerings: ServiceOfferingProps[];
}

const ServiceOfferings = ({ title, offerings }: ServiceOfferingsProps) => {
  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300 mb-6">
                {offering.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4 text-center">
                {offering.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed text-center">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;