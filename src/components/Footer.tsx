import React from 'react';
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
              Your trusted partner in comprehensive security solutions. Vigilance, Integrity, Excellence - our commitment to your safety.
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
              <a href="#" className="text-gray-300 hover:text-agspl-red transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Services</a></li>
              <li><a href="#industries" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Industries</a></li>
              <li><a href="#clients" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Clients</a></li>
              <li><a href="#careers" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Careers</a></li>
              <li><a href="#contact" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200">Contact</a></li>
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
                <div className="font-open-sans text-gray-300">
                  Corporate Office:<br />
                  123 Security Plaza, Business District<br />
                  Mumbai, Maharashtra 400001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-agspl-red flex-shrink-0" />
                <div className="font-open-sans text-gray-300">+91 98765 43210</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-agspl-red flex-shrink-0" />
                <div className="font-open-sans text-gray-300">info@actionguarding.com</div>
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
              <a href="#" className="font-open-sans text-gray-300 hover:text-agspl-red transition-colors duration-200 text-sm">
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