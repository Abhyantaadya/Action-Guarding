import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Physical Guarding',
    'Escort and EPO Security',
    'Electronic Security',
    'Dog Squad',
    'Fire Training and Threat Analysis',
    'NSDC/MEPSC Certified Training'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-agspl-blue shadow-lg' : 'bg-agspl-blue'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                <img 
                  src="/Adobe Express - file.png" 
                  alt="Action Guarding" 
                  className="h-8 lg:h-10 w-auto"
                />
                <span className="font-montserrat font-bold text-white text-lg lg:text-xl hover:text-agspl-red transition-colors duration-200">
                  Action Guarding
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className={`transition-colors duration-200 font-open-sans ${location.pathname === '/' ? 'text-agspl-red' : 'text-white hover:text-agspl-red'}`}>
              Home
            </Link>
            <Link to="/about" className={`transition-colors duration-200 font-open-sans ${location.pathname === '/about' ? 'text-agspl-red' : 'text-white hover:text-agspl-red'}`}>
              About Us
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-white hover:text-agspl-red transition-colors duration-200 font-open-sans flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/services/physical-guarding"
                    className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                  >
                    Physical Guarding
                  </Link>
                  <Link
                    to="/services/escort-security"
                    className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                  >
                    Escort and EPO Security
                  </Link>
                  <Link
                    to="/services/electronic-security"
                    className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                  >
                    Electronic Security
                  </Link>
                  <Link
                    to="/services/dog-squad"
                    className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                  >
                    Dog Squad
                  </Link>
                  <Link
                    to="/services/fire-training"
                    className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                  >
                    Fire Training and Threat Analysis
                  </Link>
                  <Link
                    to="/services/certified-training"
                    className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                  >
                    NSDC/MEPSC Certified Training
                  </Link>
                </div>
              )}
            </div>
            <a href="#industries" className="text-white hover:text-agspl-red transition-colors duration-200 font-open-sans">
              Industries Served
            </a>
            <Link to="/clients-testimonials" className="text-white hover:text-agspl-red transition-colors duration-200 font-open-sans">
              Clients & Testimonials
            </Link>
            <Link to="/careers" className="text-white hover:text-agspl-red transition-colors duration-200 font-open-sans">
              Careers
            </Link>
            <Link to="/contact" className="text-white hover:text-agspl-red transition-colors duration-200 font-open-sans">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-agspl-red transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-agspl-blue border-t border-agspl-muted-gray">
              <Link to="/" className={`block px-3 py-2 font-open-sans ${location.pathname === '/' ? 'text-agspl-red' : 'text-white hover:text-agspl-red'}`}>
                Home
              </Link>
              <Link to="/about" className={`block px-3 py-2 font-open-sans ${location.pathname === '/about' ? 'text-agspl-red' : 'text-white hover:text-agspl-red'}`}>
                About Us
              </Link>
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-agspl-red font-open-sans"
                >
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    <Link
                      to="/services/physical-guarding"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      Physical Guarding
                    </Link>
                    <Link
                      to="/services/escort-security"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      Escort and EPO Security
                    </Link>
                    <Link
                      to="/services/electronic-security"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      Electronic Security
                    </Link>
                    <Link
                      to="/services/dog-squad"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      Dog Squad
                    </Link>
                    <Link
                      to="/services/fire-training"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      Fire Training and Threat Analysis
                    </Link>
                    <Link
                      to="/services/certified-training"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      NSDC/MEPSC Certified Training
                    </Link>
                  </div>
                )}
              </div>
              <a href="#industries" className="block px-3 py-2 text-white hover:text-agspl-red font-open-sans">
                Industries Served
              </a>
              <Link to="/clients-testimonials" className="block px-3 py-2 text-white hover:text-agspl-red font-open-sans">
                Clients & Testimonials
              </Link>
              <Link to="/careers" className="block px-3 py-2 text-white hover:text-agspl-red font-open-sans">
                Careers
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:text-agspl-red font-open-sans">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;