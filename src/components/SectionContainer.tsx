
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section id={id} className={cn(
      "py-16 md:py-24",
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
