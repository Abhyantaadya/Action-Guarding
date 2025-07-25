import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesOverview from './components/ServicesOverview';
import IndustriesServed from './components/IndustriesServed';
import TestimonialsAndAwards from './components/TestimonialsAndAwards';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import About from './pages/About';
import PhysicalGuarding from './pages/PhysicalGuarding';
import EscortSecurity from './pages/EscortSecurity';
import ElectronicSecurity from './pages/ElectronicSecurity';
import DogSquad from './pages/DogSquad';
import FireTraining from './pages/FireTraining';
import CertifiedTraining from './pages/CertifiedTraining';
import Careers from './pages/Careers';
import ClientsTestimonials from './pages/ClientsTestimonials';
import Contact from './pages/Contact';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <WhyChooseUs />
    <ServicesOverview />
    <IndustriesServed />
    <TestimonialsAndAwards />
    <FinalCTA />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/physical-guarding" element={<PhysicalGuarding />} />
          <Route path="/services/escort-security" element={<EscortSecurity />} />
          <Route path="/services/electronic-security" element={<ElectronicSecurity />} />
          <Route path="/services/dog-squad" element={<DogSquad />} />
          <Route path="/services/fire-training" element={<FireTraining />} />
          <Route path="/services/certified-training" element={<CertifiedTraining />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/clients-testimonials" element={<ClientsTestimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;