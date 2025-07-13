import React from 'react';

interface ServiceOverviewProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const ServiceOverview = ({ title, description, benefits, image }: ServiceOverviewProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-agspl-red mb-8"></div>
            
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-8">
              {description}
            </p>
            
            <div className="space-y-4">
              <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4">
                Key Benefits:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-agspl-red rounded-full mt-3 flex-shrink-0"></div>
                    <span className="font-open-sans text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src={image}
              alt={title}
              className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;