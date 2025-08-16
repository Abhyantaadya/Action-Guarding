import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import ServiceOfferings from '../components/ServiceOfferings';
import ServiceAdvantage from '../components/ServiceAdvantage';
import ServiceCTA from '../components/ServiceCTA';
import Footer from '../components/Footer';
import { UserCheck, Car, Shield, Users, MapPin, Clock } from 'lucide-react';

const EscortSecurity = () => {
  const benefits = [
    "Highly trained executive protection officers with specialized skills",
    "Discreet and professional security presence maintaining client privacy",
    "Advanced threat assessment and risk mitigation strategies",
    "Secure transportation with armored vehicle options available",
    "24/7 emergency response and communication protocols",
    "Customized protection plans based on individual risk profiles"
  ];

  const offerings = [
    {
      icon: <UserCheck className="h-12 w-12 text-agspl-red" />,
      title: "Executive Protection",
      description: "Personal security for high-profile individuals, executives, and VIPs with discreet professional protection."
    },
    {
      icon: <Car className="h-12 w-12 text-agspl-red" />,
      title: "Secure Transportation",
      description: "Safe transit services with trained drivers and security escorts for high-risk journeys."
    },
    {
      icon: <Shield className="h-12 w-12 text-agspl-red" />,
      title: "Close Protection",
      description: "Personal bodyguard services providing immediate physical protection and threat deterrence."
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red" />,
      title: "Family Security",
      description: "Comprehensive protection services for family members and dependents of high-profile clients."
    },
    {
      icon: <MapPin className="h-12 w-12 text-agspl-red" />,
      title: "Event Security",
      description: "Specialized protection for public appearances, conferences, and high-profile events."
    },
    {
      icon: <Clock className="h-12 w-12 text-agspl-red" />,
      title: "24/7 Protection",
      description: "Round-the-clock security coverage with seamless shift transitions and continuous vigilance."
    }
  ];

  const advantages = [
    "Ex-military trained protection officers with combat and tactical experience",
    "Advanced threat assessment capabilities and intelligence gathering",
    "Discreet operations maintaining client confidentiality and normal lifestyle",
    "Coordinated security teams with real-time communication systems",
    "Extensive background checks and psychological evaluations for all personnel",
    "International protection experience and cross-border security coordination",
    "Emergency medical training and first aid certification for all officers"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero 
        title="Escort & EPO Security Services"
        subtitle="Elite executive protection and escort services providing discreet, professional security for high-profile individuals and VIPs."
        backgroundImage="/image copy copy copy.png"
      />
      <ServiceOverview 
        title="Elite Executive Protection Services"
        description="Our Executive Protection Officers (EPO) and escort services provide the highest level of personal security for VIPs, executives, and high-profile individuals. With military-trained professionals and advanced security protocols, we ensure complete safety while maintaining discretion and allowing normal business operations."
        benefits={benefits}
        image="/WhatsApp Image 2025-08-16 at 13.31.30_ebd17a68.jpg"
      />
      <ServiceOfferings 
        title="Our Protection Services"
        offerings={offerings}
      />
      <ServiceAdvantage 
        title="The AGSPL Advantage in Executive Protection"
        advantages={advantages}
        image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceCTA serviceName="Escort & EPO Security" />
      <Footer />
    </div>
  );
};

export default EscortSecurity;