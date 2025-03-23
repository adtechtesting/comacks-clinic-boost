
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-comacks-red/15 text-comacks-red",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
