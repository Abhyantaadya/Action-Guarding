import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import ServiceOfferings from '../components/ServiceOfferings';
import ServiceAdvantage from '../components/ServiceAdvantage';
import ServiceCTA from '../components/ServiceCTA';
import Footer from '../components/Footer';
import { Monitor, Camera, Lock, Wifi, Smartphone, AlertTriangle } from 'lucide-react';

const ElectronicSecurity = () => {
  const benefits = [
    "Advanced surveillance systems with AI-powered threat detection",
    "Real-time monitoring and instant alert notifications",
    "Integrated access control systems with biometric authentication",
    "Remote monitoring capabilities via mobile and web applications",
    "Scalable solutions adaptable to facilities of any size",
    "24/7 technical support and maintenance services"
  ];

  const offerings = [
    {
      icon: <Camera className="h-12 w-12 text-agspl-red" />,
      title: "CCTV Surveillance",
      description: "High-definition camera systems with night vision, motion detection, and intelligent analytics for comprehensive monitoring."
    },
    {
      icon: <Lock className="h-12 w-12 text-agspl-red" />,
      title: "Access Control Systems",
      description: "Biometric and card-based access control with real-time monitoring and detailed access logs."
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-agspl-red" />,
      title: "Intrusion Detection",
      description: "Advanced alarm systems with motion sensors, door/window contacts, and perimeter protection."
    },
    {
      icon: <Monitor className="h-12 w-12 text-agspl-red" />,
      title: "Command Centers",
      description: "Centralized monitoring stations with multiple display systems and integrated security management."
    },
    {
      icon: <Wifi className="h-12 w-12 text-agspl-red" />,
      title: "Network Security",
      description: "Cybersecurity solutions protecting digital infrastructure and preventing unauthorized access."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-agspl-red" />,
      title: "Mobile Integration",
      description: "Smartphone and tablet applications for remote monitoring and system control from anywhere."
    }
  ];

  const advantages = [
    "Cutting-edge technology integration with AI and machine learning capabilities",
    "Customized system design tailored to specific facility requirements and layouts",
    "Professional installation by certified technicians with ongoing maintenance support",
    "Integration with existing security infrastructure and third-party systems",
    "Cloud-based storage solutions with secure data encryption and backup",
    "Comprehensive training programs for client personnel on system operation",
    "24/7 technical support with rapid response for system issues and emergencies"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero 
        title="Electronic Security Systems"
        subtitle="Advanced technology solutions integrating surveillance, access control, and intelligent monitoring for comprehensive digital security."
        backgroundImage="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />
      <ServiceOverview 
        title="Advanced Electronic Security Solutions"
        description="Our electronic security systems combine cutting-edge technology with intelligent monitoring to provide comprehensive protection. From AI-powered surveillance cameras to biometric access control, we deliver integrated solutions that enhance security while providing real-time insights and remote management capabilities."
        benefits={benefits}
        image="/image copy copy copy copy copy copy.png"
      />
      <ServiceOfferings 
        title="Our Technology Solutions"
        offerings={offerings}
      />
      <ServiceAdvantage 
        title="The AGSPL Advantage in Electronic Security"
        advantages={advantages}
        image="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceCTA serviceName="Electronic Security" />
      <Footer />
    </div>
  );
};

export default ElectronicSecurity;