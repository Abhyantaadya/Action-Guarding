import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header as ModernHeader, Button } from '@/components/ui/21st-navbar';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
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

  const isHomePage = location.pathname === '/';
  const isDarkTheme = isHomePage && scrollProgress < 0.5;

  // Menu items configuration
  const menuItems = [
    {
      text: "Home",
      to: "/"
    },
    {
      text: "About Us",
      to: "/about"
    },
    {
      text: "Services",
      items: [
        {
          text: "Physical Guarding",
          description: "Professional security personnel for your premises",
          to: "/services/physical-guarding"
        },
        {
          text: "Escort and EPO Security",
          description: "Executive protection and escort services",
          to: "/services/escort-security"
        },
        {
          text: "Electronic Security",
          description: "Advanced surveillance and monitoring systems",
          to: "/services/electronic-security"
        },
        {
          text: "Dog Squad",
          description: "Specialized canine detection services",
          to: "/services/dog-squad"
        },
        {
          text: "Fire Training",
          description: "Fire safety and threat analysis training",
          to: "/services/fire-training"
        },
        {
          text: "Certified Training",
          description: "NSDC/MEPSC certified security training",
          to: "/services/certified-training"
        }
      ]
    },
    {
      text: "Industries Served",
      to: "/#industries"
    },
    {
      text: "Clients & Testimonials",
      to: "/clients-testimonials"
    },
    {
      text: "Careers",
      to: "/careers"
    },
    {
      text: "Contact Us",
      to: "/contact"
    }
  ];

  // Logo component
  const logo = (
    <Link to="/" className="block">
      <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
        <img 
          src="/Adobe Express - file.png" 
          alt="Action Guarding" 
          className={`w-auto transition-all duration-500 ${
            isHomePage && scrollProgress > 0.3 ? 'h-7 lg:h-9' : 'h-8 lg:h-10'
          }`}
        />
        <span className={`font-montserrat font-bold transition-all duration-500 ${
          isDarkTheme ? 'text-white' : 'text-agspl-blue'
        } hover:text-agspl-red ${
          isHomePage && scrollProgress > 0.3 ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'
        }`}>
          Action Guarding
        </span>
      </div>
    </Link>
  );

  // Right content with contact buttons
  const rightContent = (
    <div className="flex items-center gap-4">
      <Button 
        variant="outline"
        className={`hidden md:flex ${
          isDarkTheme 
            ? 'text-white border-white hover:bg-white hover:text-agspl-blue' 
            : 'text-agspl-blue border-agspl-blue hover:bg-agspl-blue hover:text-white'
        }`}
        onClick={() => window.location.href = 'tel:+919876543210'}
      >
        <Phone className="mr-2 h-4 w-4" />
        Call Now
      </Button>
      <Button 
        variant="default"
        className="bg-agspl-red text-white hover:bg-red-700"
        onClick={() => window.location.href = '/contact'}
      >
        <Mail className="mr-2 h-4 w-4" />
        Get Quote
      </Button>
    </div>
  );

  return (
    <ModernHeader
      theme={isDarkTheme ? 'dark' : 'light'}
      isSticky={true}
      isStickyOverlay={isScrolled}
      withBorder={!isHomePage || scrollProgress > 0.3}
      logo={logo}
      menuItems={menuItems}
      rightContent={rightContent}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHomePage ? '' : 'bg-white shadow-lg'
      }`}
    />
  );
};

export default Header;