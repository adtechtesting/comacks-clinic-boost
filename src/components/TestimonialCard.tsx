import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({ quote, rating, className }: TestimonialCardProps) => {
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
    </div>
  );
};

export default TestimonialCard;
