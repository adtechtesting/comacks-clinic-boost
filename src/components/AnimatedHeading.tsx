
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
  highlight?: boolean;
}

const AnimatedHeading = ({ 
  children, 
  className, 
  level = 2,
  highlight = false 
}: AnimatedHeadingProps) => {
  let baseClasses = "font-bold tracking-tight animate-fade-in";
  
  if (highlight) {
    baseClasses += " shimmer-text";
  }
  
  if (level === 1) {
    return (
      <h1 
        className={cn(
          baseClasses,
          "text-4xl sm:text-5xl md:text-6xl",
          className
        )}
      >
        {children}
      </h1>
    );
  }
  
  if (level === 3) {
    return (
      <h3 
        className={cn(
          baseClasses,
          "text-2xl sm:text-3xl",
          className
        )}
      >
        {children}
      </h3>
    );
  }
  
  return (
    <h2 
      className={cn(
        baseClasses,
        "text-3xl sm:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default AnimatedHeading;
