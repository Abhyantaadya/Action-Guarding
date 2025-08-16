import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import MissionVisionValues from '../components/MissionVisionValues';
import Certifications from '../components/Certifications';
import AboutCTA from '../components/AboutCTA';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <MissionVisionValues />
      <Certifications />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;