import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import ServiceOfferings from '../components/ServiceOfferings';
import ServiceAdvantage from '../components/ServiceAdvantage';
import ServiceCTA from '../components/ServiceCTA';
import Footer from '../components/Footer';
import { Shield, Users, Clock, Eye, Building, Factory } from 'lucide-react';

const PhysicalGuarding = () => {
  const benefits = [
    "24/7 professional security presence ensuring continuous protection",
    "Highly trained personnel with military-grade discipline and expertise",
    "Customized security protocols tailored to your specific requirements",
    "Advanced threat detection and immediate response capabilities",
    "Comprehensive incident reporting and documentation",
    "Cost-effective security solution with measurable ROI"
  ];

  const offerings = [
    {
      icon: <Shield className="h-12 w-12 text-agspl-red" />,
      title: "Static Security Guards",
      description: "Professional guards stationed at key access points, providing vigilant monitoring and access control for your premises."
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red" />,
      title: "Mobile Patrol Services",
      description: "Dynamic security patrols covering large areas with regular rounds and comprehensive perimeter monitoring."
    },
    {
      icon: <Clock className="h-12 w-12 text-agspl-red" />,
      title: "24/7 Security Coverage",
      description: "Round-the-clock protection with seamless shift transitions and continuous security presence."
    },
    {
      icon: <Eye className="h-12 w-12 text-agspl-red" />,
      title: "Access Control Management",
      description: "Strict visitor management, employee verification, and controlled entry/exit monitoring systems."
    },
    {
      icon: <Building className="h-12 w-12 text-agspl-red" />,
      title: "Corporate Security",
      description: "Specialized security solutions for office buildings, business parks, and corporate facilities."
    },
    {
      icon: <Factory className="h-12 w-12 text-agspl-red" />,
      title: "Industrial Security",
      description: "Heavy-duty security for manufacturing plants, warehouses, and industrial complexes with specialized protocols."
    }
  ];

  const advantages = [
    "Ex-military leadership ensuring strategic security planning and execution",
    "NSDC/MEPSC certified training programs guaranteeing professional competency",
    "Advanced background verification and continuous training for all personnel",
    "Real-time communication systems and incident response protocols",
    "Customizable security solutions adapted to industry-specific requirements",
    "Proven track record with 5000+ deployed security professionals",
    "Comprehensive insurance coverage and legal compliance assurance"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero 
        title="Physical Guarding Services"
        subtitle="Professional security personnel providing unwavering protection with military precision and advanced training for complete peace of mind."
        backgroundImage="/image.png"
      />
      <ServiceOverview 
        title="Comprehensive Physical Security Solutions"
        description="Our physical guarding services provide the human element that technology cannot replace. With over 5000 trained professionals led by ex-military expertise, we deliver unmatched security presence that deters threats, manages access, and ensures rapid response to any security incident."
        benefits={benefits}
        image="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceOfferings 
        title="What We Offer"
        offerings={offerings}
      />
      <ServiceAdvantage 
        title="The AGSPL Advantage in Physical Guarding"
        advantages={advantages}
        image="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceCTA serviceName="Physical Guarding" />
      <Footer />
    </div>
  );
};

export default PhysicalGuarding;