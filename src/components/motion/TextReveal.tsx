import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  as: Component = 'div'
}) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion(Component as any);

  const variants = {
    hidden: { 
      y: prefersReducedMotion ? 0 : '100%', 
      opacity: prefersReducedMotion ? 0 : 1 
    },
    visible: { 
      y: 0, 
      opacity: 1 
    }
  };

  return (
    <div className={cn("overflow-hidden", className)}>
      <MotionComponent
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </MotionComponent>
    </div>
  );
};
