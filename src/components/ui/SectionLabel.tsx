import React from 'react';
import { cn } from '../../lib/utils';
import { Reveal } from '../motion/Reveal';

interface SectionLabelProps {
  text: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ 
  text, 
  className,
  align = 'left' 
}) => {
  const alignments = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };

  return (
    <Reveal>
      <div className={cn("mb-6", alignments[align], className)}>
        <span className="text-[10px] tracking-[0.2em] font-medium text-editorial-accent uppercase">
          {text}
        </span>
      </div>
    </Reveal>
  );
};
