import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Users } from 'lucide-react';

const JobOpportunities = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobRoles = [
    {
      title: "Security Guard",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "0-2 years",
      description: "Responsible for maintaining security and safety of assigned premises, conducting regular patrols, monitoring access points, and responding to security incidents.",
      requirements: [
        "High school diploma or equivalent",
        "Physical fitness and alertness",
        "Good communication skills",
        "Willingness to work in shifts",
        "Clean background check"
      ]
    },
    {
      title: "Security Supervisor",
      location: "Bangalore, Hyderabad, Chennai",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead and supervise security teams, ensure compliance with security protocols, conduct training sessions, and coordinate with management on security matters.",
      requirements: [
        "Bachelor's degree preferred",
        "3+ years security experience",
        "Leadership and team management skills",
        "NSDC/MEPSC certification preferred",
        "Strong problem-solving abilities"
      ]
    },
    {
      title: "Executive Protection Officer",
      location: "Major Cities",
      type: "Full-time",
      experience: "5+ years",
      description: "Provide personal security for high-profile clients, conduct threat assessments, plan secure transportation routes, and maintain discretion at all times.",
      requirements: [
        "Military or law enforcement background preferred",
        "Advanced security training",
        "Excellent physical condition",
        "Discretion and professionalism",
        "Valid driving license"
      ]
    },
    {
      title: "Canine Handler",
      location: "Specialized Assignments",
      type: "Full-time",
      experience: "2-4 years",
      description: "Work with trained detection dogs for explosive and narcotics detection, maintain canine health and training, and conduct security sweeps.",
      requirements: [
        "Experience with animals",
        "Physical fitness",
        "Attention to detail",
        "Ability to work in various environments",
        "Specialized canine training certification"
      ]
    },
    {
      title: "Training Instructor",
      location: "Training Centers",
      type: "Full-time",
      experience: "5+ years",
      description: "Develop and deliver training programs for security personnel, assess trainee progress, and maintain training standards and certifications.",
      requirements: [
        "Bachelor's degree in relevant field",
        "Extensive security experience",
        "Teaching or training experience",
        "NSDC/MEPSC certification",
        "Strong presentation skills"
      ]
    },
    {
      title: "Electronic Security Technician",
      location: "Technical Teams",
      type: "Full-time",
      experience: "2-4 years",
      description: "Install, maintain, and troubleshoot electronic security systems including CCTV, access control, and alarm systems.",
      requirements: [
        "Technical diploma or degree",
        "Electronics/IT background",
        "Problem-solving skills",
        "Customer service orientation",
        "Willingness to travel"
      ]
    }
  ];

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-agspl-blue mb-6">
            Current Opportunities
          </h2>
          <div className="w-24 h-1 bg-agspl-red mx-auto mb-8"></div>
          <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are always looking for dedicated and passionate individuals to join our team across various roles.
          </p>
        </div>
        
        <div className="space-y-4">
          {jobRoles.map((job, index) => (
            <div 
              key={index}
              className="bg-agspl-light-gray rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleJob(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-xl text-agspl-blue mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-agspl-red mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-agspl-red mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-agspl-red mr-1" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedJob === index ? (
                      <ChevronUp className="h-6 w-6 text-agspl-blue" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-agspl-blue" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedJob === index && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-6">
                    <h4 className="font-montserrat font-semibold text-lg text-agspl-blue mb-3">
                      Job Description
                    </h4>
                    <p className="font-open-sans text-gray-700 mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <h4 className="font-montserrat font-semibold text-lg text-agspl-blue mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-agspl-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="font-open-sans text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <button className="bg-agspl-red text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-colors duration-300">
                        Apply for This Position
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;