import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-md',
    isScrolled ? 'bg-comacks-black/90 shadow-lg' : 'bg-transparent'
  );

  return (
    <nav className={navbarClasses}>
      <div className="container flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center z-50">
          <span className="text-2xl font-bold">
            <span className="text-comacks-white">Coma</span>
            <span className="text-comacks-red">c</span>
            <span className="text-comacks-white">ks</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          
          <div className="relative">
            <button 
              onClick={toggleServices}
              className="flex items-center text-comacks-white hover:text-comacks-red transition-colors"
            >
              Services
              {servicesOpen ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4" />
              )}
            </button>
            
            {servicesOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-comacks-black border border-comacks-red/30 rounded-md shadow-xl animate-fade-in z-50">
                <NavLink to="/ai-automation" label="AI Automation" className="block px-4 py-2 hover:bg-comacks-red/10" />
                <NavLink to="/digital-solutions" label="Digital Solutions" className="block px-4 py-2 hover:bg-comacks-red/10" />
                <NavLink to="/smma" label="SMMA" className="block px-4 py-2 hover:bg-comacks-red/10" />
              </div>
            )}
          </div>
          
          <NavLink to="/about" label="About Us" />
          <NavLink to="/case-studies" label="Case Studies" />
          <NavLink to="/contact" label="Contact" />
          
          <Link 
            to="/contact" 
            className="bg-comacks-red text-comacks-white px-4 py-2 rounded-full transition-all hover:bg-comacks-red/90 hover:shadow-lg hover:shadow-comacks-red/20"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden z-50 text-comacks-white hover:text-comacks-red transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-comacks-black/95 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in z-40">
            <NavLink to="/" label="Home" className="text-xl" onClick={() => setIsOpen(false)} />
            
            <div className="flex flex-col items-center">
              <button 
                onClick={toggleServices}
                className="flex items-center text-xl text-comacks-white hover:text-comacks-red transition-colors mb-2"
              >
                Services
                {servicesOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              
              {servicesOpen && (
                <div className="flex flex-col items-center space-y-2 mb-4 animate-fade-in">
                  <NavLink to="/ai-automation" label="AI Automation" className="hover:text-comacks-red transition-colors" />
                  <NavLink to="/digital-solutions" label="Digital Solutions" className="hover:text-comacks-red transition-colors" />
                  <NavLink to="/smma" label="SMMA" className="hover:text-comacks-red transition-colors" />
                </div>
              )}
            </div>
            
            <NavLink to="/about" label="About Us" className="text-xl" onClick={() => setIsOpen(false)} />
            <NavLink to="/case-studies" label="Case Studies" className="text-xl" onClick={() => setIsOpen(false)} />
            <NavLink to="/contact" label="Contact" className="text-xl" onClick={() => setIsOpen(false)} />
            
            <Link 
              to="/contact" 
              className="mt-4 bg-comacks-red text-comacks-white px-6 py-3 rounded-full text-lg transition-all hover:bg-comacks-red/90"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, label, className, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "transition-colors",
        isActive ? "text-comacks-red font-medium" : "text-comacks-white hover:text-comacks-red",
        className
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
