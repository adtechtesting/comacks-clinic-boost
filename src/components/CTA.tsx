
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAProps {
  className?: string;
  sticky?: boolean;
}

const CTA = ({ className, sticky = false }: CTAProps) => {
  const baseClasses = "bg-comacks-red text-comacks-white rounded-full transition-all hover:bg-comacks-red/90 hover:shadow-lg hover:shadow-comacks-red/20 inline-flex items-center justify-center font-medium";
  
  if (sticky) {
    return (
      <div className="fixed bottom-6 left-0 right-0 mx-auto w-full max-w-xs px-4 z-40 animate-fade-in md:hidden">
        <Link
          to="/contact"
          className={`${baseClasses} py-3 px-6 w-full text-center shadow-lg shadow-comacks-red/20`}
        >
          Book a Free Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    );
  }
  
  return (
    <Link to="/contact" className={`${baseClasses} py-3 px-6 ${className}`}>
      Book a Free Consultation
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  );
};

export default CTA;
