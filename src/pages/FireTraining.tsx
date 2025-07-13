import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import ServiceOfferings from '../components/ServiceOfferings';
import ServiceAdvantage from '../components/ServiceAdvantage';
import ServiceCTA from '../components/ServiceCTA';
import Footer from '../components/Footer';
import { Flame, AlertTriangle, Users, FileText, Shield, Clock } from 'lucide-react';

const FireTraining = () => {
  const benefits = [
    "Comprehensive fire safety training programs for all personnel levels",
    "Advanced threat analysis and risk assessment methodologies",
    "Hands-on emergency response training with real-world scenarios",
    "Certified instructors with extensive fire safety and security experience",
    "Customized training modules adapted to specific industry requirements",
    "Regular refresher courses and updated safety protocol training"
  ];

  const offerings = [
    {
      icon: <Flame className="h-12 w-12 text-agspl-red" />,
      title: "Fire Safety Training",
      description: "Comprehensive fire prevention, detection, and response training for employees and security personnel."
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-agspl-red" />,
      title: "Emergency Response",
      description: "Crisis management and emergency evacuation procedures training for various threat scenarios."
    },
    {
      icon: <FileText className="h-12 w-12 text-agspl-red" />,
      title: "Threat Analysis",
      description: "Professional security threat assessments and vulnerability analysis for facilities and operations."
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red" />,
      title: "Team Training",
      description: "Group training sessions for security teams and emergency response personnel."
    },
    {
      icon: <Shield className="h-12 w-12 text-agspl-red" />,
      title: "Safety Audits",
      description: "Comprehensive safety audits and compliance assessments for fire and security protocols."
    },
    {
      icon: <Clock className="h-12 w-12 text-agspl-red" />,
      title: "24/7 Consultation",
      description: "Round-the-clock expert consultation for emergency situations and safety concerns."
    }
  ];

  const advantages = [
    "Certified fire safety instructors with extensive emergency response experience",
    "Industry-specific training programs tailored to unique operational requirements",
    "State-of-the-art training facilities with realistic simulation environments",
    "Comprehensive documentation and certification upon training completion",
    "Regular updates incorporating latest fire safety regulations and best practices",
    "Integration with existing security protocols and emergency response plans",
    "Ongoing support and consultation for implementation of safety measures"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero 
        title="Fire Training & Threat Analysis"
        subtitle="Professional fire safety training and comprehensive threat analysis services ensuring preparedness for emergency situations and security challenges."
        backgroundImage="https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />
      <ServiceOverview 
        title="Comprehensive Safety & Security Training"
        description="Our fire training and threat analysis services provide essential knowledge and skills for emergency preparedness and security awareness. With certified instructors and proven methodologies, we ensure your team is equipped to handle fire emergencies, security threats, and crisis situations effectively."
        benefits={benefits}
        image="https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceOfferings 
        title="Our Training Programs"
        offerings={offerings}
      />
      <ServiceAdvantage 
        title="The AGSPL Advantage in Safety Training"
        advantages={advantages}
        image="https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceCTA serviceName="Fire Training & Threat Analysis" />
      <Footer />
    </div>
  );
};

export default FireTraining;