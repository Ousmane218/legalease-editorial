import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  children,
  delay = 0,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  const variants: any = {
    hidden: { 
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.95,
      y: prefersReducedMotion ? 0 : 24
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("overflow-hidden rounded-sm", className)}
    >
      {children}
    </motion.div>
  );
};
