import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  const getVariant = () => {
    if (prefersReducedMotion || direction === 'none') return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    switch (direction) {
      case 'up': return { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
      case 'down': return { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } };
      case 'left': return { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } };
      case 'right': return { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariant()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};
