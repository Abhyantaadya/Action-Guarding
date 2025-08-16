import React from 'react';
import { Award, Shield, Users, Star } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Mr. Subhani Abdul",
      title: "Founder & CMD",
      image: "/WhatsApp Image 2025-08-16 at 13.31.30_ebd17a68.jpg",
      bio: "Ex-Indian Navy Officer with over 30 years of distinguished service in security and defense operations. His military precision and strategic vision have been instrumental in establishing AGSPL as a leader in integrated security solutions.",
      achievements: [
        "30+ years of security experience",
        "Ex-Indian Navy Officer",
        "Visionary leader in security innovation",
        "Expert in strategic security planning"
      ]
    },
    {
      name: "Mr. Hassan Jahangir",
      title: "Director",
      image: "/WhatsApp Image 2025-08-16 at 13.32.30_8d5a3cef.jpg",
      bio: "Seasoned security professional with extensive experience in operations management and client relations. His leadership ensures seamless service delivery and maintains the highest standards of security excellence across all AGSPL operations.",
      achievements: [
        "Expert in operations management",
        "Specialist in client relations",
        "Leader in service excellence",
        "Strategic business development"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Meet Our Leadership
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team brings together decades of military precision, strategic thinking, and deep understanding of modern security challenges.
          </p>
        </div>
        
        <div className="space-y-16">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Leader Image */}
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-agspl-red to-agspl-blue rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Leader Info */}
              <div className="lg:w-2/3">
                <div className="bg-agspl-light-gray rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="font-montserrat font-bold text-3xl text-agspl-blue mb-2">
                    {leader.name}
                  </h3>
                  <div className="font-montserrat font-semibold text-xl text-agspl-red mb-6">
                    {leader.title}
                  </div>
                  
                  <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-8">
                    {leader.bio}
                  </p>
                  
                  {/* Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {leader.achievements.map((achievement, achievementIndex) => (
                      <div 
                        key={achievementIndex}
                        className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex-shrink-0">
                          {achievementIndex === 0 && <Award className="h-5 w-5 text-agspl-red" />}
                          {achievementIndex === 1 && <Shield className="h-5 w-5 text-agspl-red" />}
                          {achievementIndex === 2 && <Star className="h-5 w-5 text-agspl-red" />}
                          {achievementIndex === 3 && <Users className="h-5 w-5 text-agspl-red" />}
                        </div>
                        <span className="font-open-sans text-gray-700 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;