import React from 'react';

interface ServiceAdvantageProps {
  title: string;
  advantages: string[];
  image: string;
}

const ServiceAdvantage = ({ title, advantages, image }: ServiceAdvantageProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-right">
            <img 
              src={image}
              alt={title}
              className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
          
          <div className="animate-slide-in-left">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-agspl-red mb-8"></div>
            
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-agspl-light-gray rounded-lg p-4 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-agspl-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-open-sans text-gray-700 leading-relaxed">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantage;