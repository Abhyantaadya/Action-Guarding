import React from 'react';
import { MapPin, Building, Globe } from 'lucide-react';

const LocationsMap = () => {
  const locations = [
    { state: 'Telangana', city: 'Hyderabad (Headquarters)', status: 'Primary Office' },
    { state: 'Andhra Pradesh', city: 'Visakhapatnam', status: 'Regional Office' },
    { state: 'Karnataka', city: 'Bangalore', status: 'Regional Office' },
    { state: 'Tamil Nadu', city: 'Chennai', status: 'Regional Office' },
    { state: 'Odisha', city: 'Bhubaneswar', status: 'Regional Office' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Our Headquarters & Presence
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Visit us at our headquarters or connect with our regional offices across South India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Headquarters Information */}
          <div className="animate-slide-in-left">
            <div className="bg-agspl-light-gray rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-agspl-red bg-opacity-10 rounded-full p-3">
                  <Building className="h-8 w-8 text-agspl-red" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-agspl-blue mb-2">
                    Headquarters
                  </h3>
                  <p className="font-open-sans text-gray-700 leading-relaxed">
                    <strong>Action Guarding Services Pvt. Ltd.</strong><br />
                    4th Floor, High Mark Chambers<br />
                    #8-1-199/2, Khajaguda X Road<br />
                    Cyberabad, Hyderabad – 500008<br />
                    Telangana, India
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-montserrat font-semibold text-lg text-agspl-blue mb-4">
                  Regional Presence
                </h4>
                <div className="space-y-3">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-agspl-red flex-shrink-0" />
                      <div className="flex-1">
                        <span className="font-open-sans font-semibold text-agspl-blue">
                          {location.city}
                        </span>
                        <span className="font-open-sans text-gray-600 ml-2">
                          ({location.status})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Map */}
          <div className="animate-slide-in-right">
            <div className="bg-agspl-light-gray rounded-2xl p-4 shadow-lg">
              <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="AGSPL Headquarters Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="font-open-sans text-sm text-gray-600">
                  Click on the map to get directions to our headquarters
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Coverage Area */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-agspl-blue to-blue-900 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-agspl-red mr-3" />
              <h3 className="font-montserrat font-bold text-2xl">
                Our Service Coverage
              </h3>
            </div>
            <p className="font-open-sans text-lg mb-6 max-w-3xl mx-auto">
              We provide comprehensive security services across South India, with established operations in multiple states and the capability to deploy anywhere within our coverage area.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {locations.map((location, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="font-montserrat font-semibold text-agspl-red">
                    {location.state}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;