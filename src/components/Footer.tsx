
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-comacks-black border-t border-comacks-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-comacks-red">C</span>
                <span className="text-comacks-white">oma</span>
                <span className="text-comacks-red">c</span>
                <span className="text-comacks-white">ks</span>
              </span>
            </Link>
            <p className="text-comacks-white/70 mb-4">
              AI-Powered Automation Systems, Digital Solutions, and Social Media Marketing 
              for healthcare clinics across Australia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/Comacks/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-comacks-white/70 hover:text-comacks-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/comacks.growth/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-comacks-white/70 hover:text-comacks-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-comacks-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-automation" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  AI Automation Systems
                </Link>
              </li>
              <li>
                <Link to="/digital-solutions" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link to="/smma" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-comacks-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-comacks-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-comacks-red flex-shrink-0" />
                <a href="mailto:arpit@comacks.com" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  arpit@comacks.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-comacks-red flex-shrink-0" />
                <a href="tel:+91 7303908344" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                  +91 7303908344
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-comacks-red flex-shrink-0" />
                <span className="text-comacks-white/70">
                  New Delhi, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-comacks-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-comacks-white/60 text-sm mb-4 md:mb-0">
            © 2023 Comacks. All Rights Reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link to="/privacy-policy" className="text-comacks-white/60 text-sm hover:text-comacks-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-comacks-white/60 text-sm hover:text-comacks-red transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
