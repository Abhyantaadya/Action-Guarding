import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  
  // Timeout refs for managing hover delays
  const aboutTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsScrolled(scrollY > 50);
      
      // Calculate scroll progress for home page
      if (location.pathname === '/') {
        const progress = Math.min(scrollY / (windowHeight * 0.8), 1);
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    };
  }, []);

  // Handle mouse enter for desktop dropdowns
  const handleMouseEnter = (menu: string) => {
    if (menu === 'about' && aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = null;
    }
    if (menu === 'services' && servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setOpenMenu(menu);
  };

  // Handle mouse leave for desktop dropdowns with delay
  const handleMouseLeave = (menu: string) => {
    const timeoutId = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
    
    if (menu === 'about') {
      aboutTimeoutRef.current = timeoutId;
    } else if (menu === 'services') {
      servicesTimeoutRef.current = timeoutId;
    }
  };

  // Handle mobile dropdown toggle
  const handleMobileToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Dynamic styles based on scroll progress (only for home page)
  const isHomePage = location.pathname === '/';
  const dynamicStyles = isHomePage ? {
    backgroundColor: `rgba(10, 14, 42, ${0.85 + (scrollProgress * 0.15)})`,
    backdropFilter: `blur(${8 + (scrollProgress * 4)}px)`,
    borderBottom: scrollProgress > 0.3 ? '1px solid rgba(228, 0, 43, 0.2)' : 'none',
    boxShadow: scrollProgress > 0.5 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
  } : {};

  const services = [
    'Physical Guarding',
    'Escort and EPO Security',
    'Electronic Security',
    'Dog Squad',
    'Fire Training and Threat Analysis',
    'NSDC/MEPSC Certified Training'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled && !isHomePage ? 'bg-agspl-blue shadow-lg' : ''
    }`}>
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500"
        style={isHomePage ? dynamicStyles : { backgroundColor: '#0A0E2A' }}
      >
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className={`flex-shrink-0 transition-all duration-500 ${
            isHomePage && scrollProgress > 0.3 ? 'transform scale-95' : ''
          }`}>
            <Link to="/" className="block">
              <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                <img 
                  src="/Adobe Express - file (1).png" 
                  alt="Action Guarding" 
                  className={`w-auto transition-all duration-500 ${
                    isHomePage && scrollProgress > 0.3 ? 'h-10 lg:h-14' : 'h-12 lg:h-15'
                  }`}
                />
                <span className={`font-montserrat font-bold text-white hover:text-agspl-red transition-all duration-500 ${
                  isHomePage && scrollProgress > 0.3 ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'
                }`}>
                  Action Guarding
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex transition-all duration-500 ${
            isHomePage && scrollProgress > 0.3 ? 'space-x-6' : 'space-x-8'
          }`}>
            <Link to="/" className={`transition-colors duration-200 font-open-sans ${location.pathname === '/' ? 'text-agspl-red' : 'text-white hover:text-agspl-red'}`}>
              Home
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={() => handleMouseLeave('about')}
            >
              <button className={`text-white hover:text-agspl-red transition-all duration-200 font-open-sans flex items-center ${
                isHomePage && scrollProgress > 0.5 ? 'transform hover:scale-105' : ''
              }`}>
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-opacity duration-300 ${
                isHomePage && scrollProgress > 0.5 ? 'shadow-2xl border border-agspl-red/10' : ''
              } ${openMenu === 'about' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                >
                  About Us
                </Link>
                <Link
                  to="/about/leadership"
                  className="block px-4 py-2 text-agspl-blue hover:bg-agspl-light-gray hover:text-agspl-red transition-colors duration-200 font-open-sans text-sm"
                >
                  Leadership
                </Link>
              </div>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <button className={`text-white hover:text-agspl-red transition-all duration-200 font-open-sans flex items-center ${
                isHomePage && scrollProgress > 0.5 ? 'transform hover:scale-105' : ''
              }`}>
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 transition-opacity duration-300 ${
                isHomePage && scrollProgress > 0.5 ? 'shadow-2xl border border-agspl-red/10' : ''
              } ${openMenu === 'services' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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
            <div 
              className="px-2 pt-2 pb-3 space-y-1 border-t border-agspl-muted-gray transition-all duration-300"
              style={isHomePage ? {
                backgroundColor: `rgba(10, 14, 42, ${0.95 + (scrollProgress * 0.05)})`,
                backdropFilter: `blur(${12 + (scrollProgress * 4)}px)`
              } : { backgroundColor: '#0A0E2A' }}
            >
              <Link to="/" className={`block px-3 py-2 font-open-sans ${location.pathname === '/' ? 'text-agspl-red' : 'text-white hover:text-agspl-red'}`}>
                Home
              </Link>
              <div>
                <button 
                  onClick={() => handleMobileToggle('about')}
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-agspl-red font-open-sans"
                >
                  About Us <ChevronDown className="h-4 w-4" />
                </button>
                {openMenu === 'about' && (
                  <div className="pl-6 space-y-1">
                    <Link
                      to="/about"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/about/leadership"
                      className="block px-3 py-2 text-agspl-muted-gray hover:text-agspl-red font-open-sans text-sm"
                    >
                      Leadership
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button 
                  onClick={() => handleMobileToggle('services')}
                  className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-agspl-red font-open-sans"
                >
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                {openMenu === 'services' && (
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