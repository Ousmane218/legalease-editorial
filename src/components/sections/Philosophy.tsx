import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../motion/Reveal';

export const Philosophy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const { t } = useTranslation();

  return (
    <section className="relative py-16 md:py-48 overflow-hidden bg-editorial-bg flex items-center justify-center">
      
      {/* Background massive text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ x }}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.02] select-none"
        >
          <span className="font-serif text-[15vw] leading-none uppercase outline-text" style={{ WebkitTextStroke: '1px var(--editorial-text)', color: 'transparent' }}>
            {t('home.philosophy.title')}
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal delay={0.1}>
          <p className="font-serif text-3xl md:text-5xl leading-tight text-editorial-text mb-8">
            {t('home.philosophy.text1')}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-lg md:text-xl text-editorial-muted max-w-2xl mx-auto">
            {t('home.philosophy.text2')}
          </p>
        </Reveal>
      </div>

    </section>
  );
};
