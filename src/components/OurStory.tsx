import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { Building, Shield, Users, Target, TrendingUp, Globe } from 'lucide-react';

const OurStory = () => {
  const timelineData = [
    {
      title: "2001",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-agspl-red mr-3" />
            <h4 className="font-montserrat font-bold text-2xl text-agspl-blue">
              Action & Protection Security Force (Parent Company) Launched
            </h4>
          </div>
          <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
            The foundation of our parent organization marked the beginning of our security journey. 
            With a vision to provide comprehensive protection services, we established the groundwork 
            for what would become a leading security enterprise in South India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src="/physicalsecuritynew[1].jpg" 
              alt="Security foundation"
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow-lg"
            />
            <img 
              src="/family[1].jpg" 
              alt="Professional security team"
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2012",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <Target className="h-8 w-8 text-agspl-red mr-3" />
            <h4 className="font-montserrat font-bold text-2xl text-agspl-blue">
              Action Guarding Services Launched
            </h4>
          </div>
          <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
            Action Guarding Services Pvt. Ltd. was founded with a vision to revolutionize security services. 
            Under the leadership of Mr. Subhani Abdul, an Ex-Indian Navy Officer, we began our mission to 
            provide integrated security solutions with military precision and expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
              alt="Leadership team"
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow-lg"
            />
            <img 
              src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
              alt="Security operations"
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-agspl-red mr-3" />
            <h4 className="font-montserrat font-bold text-2xl text-agspl-blue">
              Action Guarding Services Expansion (Andhra Pradesh)
            </h4>
          </div>
          <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
            Our first major expansion into Andhra Pradesh marked a significant milestone in our growth journey. 
            This expansion allowed us to serve a broader client base and establish our presence as a regional 
            security leader with enhanced service capabilities.
          </p>
          <div className="bg-agspl-light-gray rounded-lg p-6 mb-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">2</div>
                <div className="font-open-sans text-gray-600">States Covered</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">500+</div>
                <div className="font-open-sans text-gray-600">Security Personnel</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-agspl-red mr-3" />
            <h4 className="font-montserrat font-bold text-2xl text-agspl-blue">
              Action Guarding Expansion (Karnataka & Tamil Nadu)
            </h4>
          </div>
          <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
            Strategic expansion into Karnataka and Tamil Nadu established our presence across major South Indian states. 
            This growth phase strengthened our regional network and enhanced our ability to serve diverse industries 
            with specialized security solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
              alt="Technology integration"
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow-lg"
            />
            <img 
              src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
              alt="Security monitoring"
              className="rounded-lg object-cover h-32 md:h-44 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-agspl-red mr-3" />
            <h4 className="font-montserrat font-bold text-2xl text-agspl-blue">
              Action Guarding Expansion (Odisha)
            </h4>
          </div>
          <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
            Our expansion into Odisha further solidified our position as a leading security services provider 
            across Eastern and Southern India. This milestone brought our total workforce to over 5000 trained 
            professionals serving diverse industries.
          </p>
          <div className="bg-agspl-light-gray rounded-lg p-6 mb-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">5</div>
                <div className="font-open-sans text-gray-600">States Covered</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">5000+</div>
                <div className="font-open-sans text-gray-600">Professionals</div>
              </div>
              <div>
                <div className="font-montserrat font-bold text-3xl text-agspl-red mb-2">500+</div>
                <div className="font-open-sans text-gray-600">Active Clients</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Timeline data={timelineData} />
    </section>
  );
};

export default OurStory;