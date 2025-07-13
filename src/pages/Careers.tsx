import React from 'react';
import Header from '../components/Header';
import CareersHero from '../components/CareersHero';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import TrainingDevelopment from '../components/TrainingDevelopment';
import JobOpportunities from '../components/JobOpportunities';
import ApplicationForm from '../components/ApplicationForm';
import Footer from '../components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CareersHero />
      <WhyWorkWithUs />
      <TrainingDevelopment />
      <JobOpportunities />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Careers;