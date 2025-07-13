import React from 'react';
import Header from '../components/Header';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import DirectContact from '../components/DirectContact';
import LocationsMap from '../components/LocationsMap';
import WhatHappensNext from '../components/WhatHappensNext';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactForm />
      <DirectContact />
      <LocationsMap />
      <WhatHappensNext />
      <Footer />
    </div>
  );
};

export default Contact;