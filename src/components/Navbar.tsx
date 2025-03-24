import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Logo component
const ComacksLogo = () => (
  <span className="text-2xl font-bold">
    <span className="text-comacks-red">C</span>
    <span className="text-comacks-white">oma</span>
    <span className="text-comacks-red">c</span>
    <span className="text-comacks-white">ks</span>
  </span>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling effect for Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset menu state on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-md',
    isScrolled ? 'bg-comacks-black/90 shadow-lg' : 'bg-comacks-black/80'
  );

  // Navigation items
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/contact', label: 'Contact' },
  ];

  // Service menu items
  const serviceItems = [
    { path: '/ai-automation', label: 'AI Automation' },
    { path: '/digital-solutions', label: 'Digital Solutions' },
    { path: '/smm', label: 'SMM' },
  ];

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <ComacksLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
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
                <div className="absolute mt-2 py-2 w-48 bg-comacks-black border border-comacks-red/30 rounded-md shadow-xl z-50">
                  {serviceItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      label={item.label}
                      className="block px-4 py-2 hover:bg-comacks-red/10"
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Action Button */}
            <Link
              to="/contact"
              className="bg-comacks-red text-comacks-white px-4 py-2 rounded-full transition-all hover:bg-comacks-red/90 hover:shadow-lg hover:shadow-comacks-red/20"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-comacks-white hover:text-comacks-red transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Placed outside the nav but in the component */}
      <div
        className={cn(
          'fixed inset-0 top-16 bg-comacks-black z-40 md:hidden transition-all duration-300 overflow-y-auto',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-6 gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              label={item.label}
              className="text-xl py-3 w-full border-b border-comacks-red/20"
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
          {/* Mobile Services Dropdown */}
          <div className="w-full border-b border-comacks-red/20 pb-3">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between text-xl text-comacks-white hover:text-comacks-red transition-colors py-3 w-full"
            >
              <span>Services</span>
              {servicesOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            {servicesOpen && (
              <div className="flex flex-col mt-3 space-y-4 pl-4">
                {serviceItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    label={item.label}
                    className="text-lg hover:text-comacks-red transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Mobile Action Button */}
         
        </div>
      </div>
    </>
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
        'transition-colors',
        isActive ? 'text-comacks-red font-semibold' : 'text-comacks-white hover:text-comacks-red',
        className
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;