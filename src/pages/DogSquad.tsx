import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import ServiceOfferings from '../components/ServiceOfferings';
import ServiceAdvantage from '../components/ServiceAdvantage';
import ServiceCTA from '../components/ServiceCTA';
import Footer from '../components/Footer';
import { Dog as DogIcon, Search, Shield, AlertTriangle, MapPin, Users } from 'lucide-react';

const DogSquad = () => {
  const benefits = [
    "Highly trained detection dogs with superior sensory capabilities",
    "Specialized handlers with extensive canine training experience",
    "Rapid detection of explosives, drugs, and contraband materials",
    "Mobile units capable of covering large areas efficiently",
    "Non-invasive detection methods ensuring minimal disruption",
    "24/7 availability for emergency response and routine operations"
  ];

  const offerings = [
    {
      icon: <Search className="h-12 w-12 text-agspl-red" />,
      title: "Explosive Detection",
      description: "Specialized canines trained to detect various explosive materials and devices with exceptional accuracy."
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-agspl-red" />,
      title: "Drug Detection",
      description: "Narcotics detection dogs capable of identifying various illegal substances and controlled materials."
    },
    {
      icon: <Shield className="h-12 w-12 text-agspl-red" />,
      title: "Perimeter Security",
      description: "Patrol dogs providing enhanced perimeter security and deterrent presence for large facilities."
    },
    {
      icon: <MapPin className="h-12 w-12 text-agspl-red" />,
      title: "Event Security",
      description: "Specialized detection services for concerts, conferences, and high-profile public events."
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red" />,
      title: "Handler Training",
      description: "Professional training programs for security personnel in canine handling and detection techniques."
    },
    {
      icon: <DogIcon className="h-12 w-12 text-agspl-red" />,
      title: "Custom Detection",
      description: "Specialized training for detection of specific materials or substances based on client requirements."
    }
  ];

  const advantages = [
    "Internationally certified detection dogs with proven track records",
    "Experienced handlers with military and law enforcement backgrounds",
    "Continuous training programs maintaining peak detection capabilities",
    "Rapid deployment capabilities for emergency situations and threats",
    "Comprehensive health and wellness programs for all canine units",
    "Advanced breeding and training facilities ensuring quality standards",
    "Integration with existing security protocols and emergency response plans"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero 
        title="Specialized Dog Squad Services"
        subtitle="Elite canine detection units providing superior threat detection capabilities with highly trained dogs and professional handlers."
        backgroundImage="/AdobeStock_752642976_Preview copy.jpeg"
      />
      <ServiceOverview 
        title="Elite Canine Detection Services"
        description="Our specialized dog squad combines the natural detection abilities of highly trained canines with professional handlers to provide unmatched security screening capabilities. From explosive detection to narcotics identification, our canine units offer rapid, accurate, and non-invasive security solutions."
        benefits={benefits}
        image="/AdobeStock_1138496101_Preview copy.jpeg"
      />
      <ServiceOfferings 
        title="Our Canine Capabilities"
        offerings={offerings}
      />
      <ServiceAdvantage 
        title="The AGSPL Advantage in Canine Security"
        advantages={advantages}
        image="/AdobeStock_170773504_Preview copy.jpeg"
      />
      <ServiceCTA serviceName="Dog Squad" />
      <Footer />
    </div>
  );
};

export default DogSquad;