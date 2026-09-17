import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, children, className, active }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "relative text-sm tracking-wide transition-colors duration-300",
        active ? "text-editorial-text" : "text-editorial-muted hover:text-editorial-text",
        className
      )}
    >
      {children}
      <span className={cn(
        "absolute left-0 -bottom-1 h-[1px] bg-editorial-accent transition-all duration-300 ease-out",
        active ? "w-full" : "w-0"
      )} />
    </Link>
  );
};
