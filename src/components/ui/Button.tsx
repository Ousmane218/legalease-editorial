import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: string;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink,
  withArrow = false,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm min-h-[44px]";
  
  const variants = {
    primary: "bg-editorial-dark text-editorial-light hover:bg-editorial-dark/90",
    outline: "border border-editorial-dark text-editorial-dark hover:bg-editorial-dark hover:text-editorial-light",
    ghost: "text-editorial-dark hover:text-editorial-accent"
  };
  
  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4"
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);
  
  const content = (
    <>
      {children}
      {withArrow && <ArrowUpRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (asLink) {
    return (
      <Link to={asLink} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
