import React from 'react';
import Header from '../components/Header';
import ServiceHero from '../components/ServiceHero';
import IndustriesServed from '../components/IndustriesServed';
import Footer from '../components/Footer';

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero 
        title="Industries We Secure"
        subtitle="Protecting diverse sectors with industry-specific security expertise tailored to meet unique operational requirements and challenges."
        backgroundImage="/IndustriesServed.png/image.png"
      />
      <IndustriesServed />
      <Footer />
    </div>
  );
};

export default Industries;