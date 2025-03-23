
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  features?: string[];
}

const ServiceCard = ({ title, description, icon, link, className, features }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass rounded-2xl p-6 border border-comacks-white/10 card-hover",
        className
      )}
    >
      <div className="bg-comacks-red bg-opacity-20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-comacks-white">{title}</h3>
      <p className="text-comacks-white/70 mb-4">{description}</p>
      
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-comacks-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <Link 
        to={link} 
        className="inline-flex items-center text-comacks-red hover:text-comacks-red/80 font-medium transition-colors mt-2"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
