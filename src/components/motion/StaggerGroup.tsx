import React from 'react';
import { motion } from 'framer-motion';

interface StaggerGroupProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  delayChildren = 0,
  staggerChildren = 0.1,
  className = ''
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.div>
  );
};
