import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import ServiceOfferings from '../components/ServiceOfferings';
import ServiceAdvantage from '../components/ServiceAdvantage';
import ServiceCTA from '../components/ServiceCTA';
import Footer from '../components/Footer';
import { GraduationCap, Award, Users, FileText, Shield, CheckCircle } from 'lucide-react';

const CertifiedTraining = () => {
  const benefits = [
    "Government-certified training programs meeting national standards",
    "Industry-recognized certifications enhancing career prospects",
    "Experienced instructors with real-world security expertise",
    "Comprehensive curriculum covering all aspects of security operations",
    "Practical training with hands-on experience and simulations",
    "Ongoing support and career guidance for certified professionals"
  ];

  const offerings = [
    {
      icon: <GraduationCap className="h-12 w-12 text-agspl-red" />,
      title: "NSDC Certification",
      description: "National Skill Development Corporation certified courses for security professionals and supervisors."
    },
    {
      icon: <Award className="h-12 w-12 text-agspl-red" />,
      title: "MEPSC Programs",
      description: "Maharashtra Employment and Productivity Skills Council approved training modules."
    },
    {
      icon: <Users className="h-12 w-12 text-agspl-red" />,
      title: "Security Guard Training",
      description: "Comprehensive training for security guards covering all essential skills and protocols."
    },
    {
      icon: <Shield className="h-12 w-12 text-agspl-red" />,
      title: "Supervisor Development",
      description: "Advanced training programs for security supervisors and team leaders."
    },
    {
      icon: <FileText className="h-12 w-12 text-agspl-red" />,
      title: "Specialized Courses",
      description: "Specialized training in areas like fire safety, first aid, and emergency response."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-agspl-red" />,
      title: "Certification Support",
      description: "Complete support for certification processes and documentation requirements."
    }
  ];

  const advantages = [
    "Government-approved training center with official certification authority",
    "Experienced faculty with military and law enforcement backgrounds",
    "Modern training facilities equipped with latest security technology",
    "Flexible training schedules accommodating working professionals",
    "Job placement assistance and career guidance for certified candidates",
    "Regular curriculum updates reflecting industry trends and regulations",
    "Comprehensive assessment and evaluation ensuring quality standards"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero 
        title="NSDC/MEPSC Certified Training"
        subtitle="Government-certified professional training programs developing skilled security professionals with nationally recognized qualifications and expertise."
        backgroundImage="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />
      <ServiceOverview 
        title="Professional Security Training & Certification"
        description="Our NSDC and MEPSC certified training programs provide comprehensive education for security professionals at all levels. With government-approved curriculum and experienced instructors, we develop skilled security personnel who meet national standards and industry requirements."
        benefits={benefits}
        image="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceOfferings 
        title="Our Training Programs"
        offerings={offerings}
      />
      <ServiceAdvantage 
        title="The AGSPL Advantage in Professional Training"
        advantages={advantages}
        image="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      />
      <ServiceCTA serviceName="Certified Training" />
      <Footer />
    </div>
  );
};

export default CertifiedTraining;