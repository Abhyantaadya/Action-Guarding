import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agspl-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Action Guarding Services Pvt. Ltd.
            </h3>
            <p className="font-open-sans text-gray-300 mb-6 leading-relaxed">
              Established in 2012 by Mr.Subhani Abdul a Veteran from Indian Navy, a Certified Security Practitioner and renowned name in the Service Industry and presence across South India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-agspl-red transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-agspl-red transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-agspl-red transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/actionguarding?igsh=eXd3bG56cjQxMHFz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-agspl-red transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services/physical-guarding" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Services</Link></li>
              <li><Link to="/industries" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Industries</Link></li>
              <li><Link to="/clients-testimonials" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Clients</Link></li>
              <li><Link to="/careers" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Careers</Link></li>
              <li><Link to="/contact" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="font-montserrat font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Physical Guarding</a></li>
              <li><a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Escort & EPO Security</a></li>
              <li><a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Electronic Security</a></li>
              <li><a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Dog Squad</a></li>
              <li><a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Fire Training</a></li>
              <li><a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">NSDC/MEPSC Training</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-agspl-red mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/hJfZy6p2Nqop4TWP9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200"
                >
                  Head Quarters :<br />
                  H.Q:#8/199/2, 4th Floor, High Mark Chambers,<br />
                  Khajaguda X Road, Cyberabad, Hyderabad-500008
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-agspl-red flex-shrink-0" />
                <a 
                  href="tel:+919100694137" 
                  className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200"
                >
                  +91 91006 94137
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-agspl-red flex-shrink-0" />
                <a 
                  href="mailto:info@actionforce.in" 
                  className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200"
                >
                  info@actionforce.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-agspl-red mt-1 flex-shrink-0" />
                <div className="font-open-sans text-gray-300">
                  24/7 Emergency Response<br />
                  Office: Mon-Sat 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="font-open-sans text-gray-300 text-sm mb-4 lg:mb-0">
              © 2024 Action Guarding Services Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a 
                href="https://maps.app.goo.gl/hJfZy6p2Nqop4TWP9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200 text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;