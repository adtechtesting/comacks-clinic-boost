
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  clinic: string;
  rating: number;
  imageUrl?: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, position, clinic, rating, imageUrl, className }: TestimonialCardProps) => {
  return (
    <div className={cn("glass rounded-2xl p-6 md:p-8 border border-comacks-white/10", className)}>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-comacks-red fill-comacks-red' : 'text-gray-400'}`} 
          />
        ))}
      </div>
      
      <blockquote className="text-comacks-white/90 mb-6 text-lg">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-comacks-red"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-comacks-red/20 flex items-center justify-center mr-4 text-comacks-red font-bold">
            {author.charAt(0)}
          </div>
        )}
        
        <div>
          <p className="font-semibold text-comacks-white">{author}</p>
          <p className="text-comacks-white/70 text-sm">
            {position}, {clinic}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
