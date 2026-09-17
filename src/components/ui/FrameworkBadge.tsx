import React from 'react';
import { cn } from '../../lib/utils';

interface FrameworkBadgeProps {
  text: string;
  className?: string;
}

export const FrameworkBadge: React.FC<FrameworkBadgeProps> = ({ text, className }) => {
  return (
    <div className={cn(
      "inline-flex items-center px-4 py-1.5 rounded-full border border-editorial-accent/30 text-[10px] uppercase tracking-widest text-editorial-muted whitespace-nowrap",
      className
    )}>
      {text}
    </div>
  );
};
