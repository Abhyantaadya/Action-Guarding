import React from 'react';
import Header from '../components/Header';
import ClientsHero from '../components/ClientsHero';
import ClientLogos from '../components/ClientLogos';
import DetailedTestimonials from '../components/DetailedTestimonials';
import SuccessStories from '../components/SuccessStories';
import Footer from '../components/Footer';

const ClientsTestimonials = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ClientsHero />
      <ClientLogos />
      <DetailedTestimonials />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default ClientsTestimonials;