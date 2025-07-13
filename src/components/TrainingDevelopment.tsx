import React from 'react';
import { Shield, Users, Award, MapPin } from 'lucide-react';

const TrainingDevelopment = () => {
  const trainingAreas = [
    {
      icon: <Shield className="h-8 w-8 text-agspl-red" />,
      title: "Security Protocols & Procedures",
      description: "Comprehensive training in access control, surveillance, and emergency response protocols."
    },
    {
      icon: <Users className="h-8 w-8 text-agspl-red" />,
      title: "Communication & Customer Service",
      description: "Professional interaction skills, conflict resolution, and client relationship management."
    },
    {
      icon: <Award className="h-8 w-8 text-agspl-red" />,
      title: "Physical Fitness & Self-Defense",
      description: "Maintaining peak physical condition and defensive tactics for various security scenarios."
    },
    {
      icon: <MapPin className="h-8 w-8 text-agspl-red" />,
      title: "Technology & Equipment",
      description: "Training on modern security equipment, surveillance systems, and digital monitoring tools."
    }
  ];

  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Invested in Your Excellence: Our Training Programs
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At AGSPL, we believe in equipping our professionals with the best skills. Our comprehensive training regimen ensures you are prepared for any challenge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    {area.icon}
                    <h3 className="font-montserrat font-semibold text-lg text-agspl-blue ml-3">
                      {area.title}
                    </h3>
                  </div>
                  <p className="font-open-sans text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-4">
                Training Locations
              </h3>
              <p className="font-open-sans text-gray-700">
                Training available in <strong className="text-agspl-red">Telangana, Karnataka, and Tamil Nadu</strong> with state-of-the-art facilities and experienced instructors.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Professional security training session"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingDevelopment;