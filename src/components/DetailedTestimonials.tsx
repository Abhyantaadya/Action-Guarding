import React from 'react';
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

const DetailedTestimonials = () => {
  const testimonials = [
    {
      author: {
        name: "Rajesh Kumar",
        handle: "Tech Innovation Hub",
        avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "Action Guarding Services has been our trusted security partner for over 3 years. Their professional approach, highly trained personnel, and proactive security measures have given us complete peace of mind."
    },
    {
      author: {
        name: "Priya Sharma",
        handle: "Global Manufacturing Ltd.",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "The integrated security solutions provided by AGSPL exceeded our expectations. Their ex-Navy leadership brings a level of expertise that's unmatched in the industry."
    },
    {
      author: {
        name: "Dr. Mohammed Ali",
        handle: "City General Hospital",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "Outstanding service quality and professionalism. Their 24/7 monitoring and rapid response team has been instrumental in maintaining our facility's security standards."
    },
    {
      author: {
        name: "Anita Reddy",
        handle: "Metro Residential Complex",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "We've been working with Action Guarding Services for our residential complex for 2 years now. Their guards are courteous, professional, and create a safe environment for all our residents."
    },
    {
      author: {
        name: "Vikram Singh",
        handle: "Central Shopping Mall",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "The canine detection services provided by AGSPL have been invaluable for our events and facility security. Their dog squad is highly trained and effective in detecting potential threats."
    },
    {
      author: {
        name: "Sunita Patel",
        handle: "Premier Educational Institute",
        avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "AGSPL's training programs have significantly improved our internal security capabilities. Their NSDC certified courses are comprehensive and practical."
    },
    {
      author: {
        name: "Arjun Mehta",
        handle: "Industrial Solutions Corp",
        avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "The electronic security systems installed by AGSPL have transformed our facility's safety protocols. Their technical expertise and ongoing support are exceptional."
    },
    {
      author: {
        name: "Kavya Nair",
        handle: "Coastal Enterprises",
        avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      },
      text: "AGSPL's executive protection services provided seamless security for our high-profile events. Their professionalism and attention to detail are unmatched."
    }
  ];

  return (
    <section className="py-20 bg-agspl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsSection
          title="Hear Directly from Our Partners"
          description="Real experiences from real clients who trust AGSPL with their security needs."
          testimonials={testimonials}
        />
      </div>
    </section>
  );
};

export default DetailedTestimonials;