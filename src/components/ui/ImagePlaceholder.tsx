import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ImagePlaceholderProps {
  slotId: string;
  className?: string;
  aspectRatio?: 'auto' | 'square' | 'portrait' | 'landscape';
  delay?: number;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  slotId,
  className,
  aspectRatio = 'auto',
  delay = 0
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  const aspectClasses = {
    'auto': '',
    'square': 'aspect-square',
    'portrait': 'aspect-[3/4]',
    'landscape': 'aspect-[4/3]'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative overflow-hidden rounded-sm bg-editorial-bg-soft border border-editorial-border/40",
        "flex items-center justify-center",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Decorative inner framing */}
      <div className="absolute inset-4 border border-editorial-border/20 rounded-sm pointer-events-none" />
      
      {/* Slot label */}
      <div className="text-center">
        <span className="block text-[10px] tracking-widest text-editorial-muted uppercase mb-1">
          Visual Slot
        </span>
        <span className="block text-xs font-serif italic text-editorial-accent">
          {slotId}
        </span>
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-editorial-light/20 to-transparent opacity-50" />
    </motion.div>
  );
};
