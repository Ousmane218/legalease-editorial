import React from 'react';
import { TextReveal } from '../motion/TextReveal';
import { Reveal } from '../motion/Reveal';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { editorialAssets } from '../../data/assets';
import { FrameworkBadge } from '../ui/FrameworkBadge';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-20 overflow-hidden">
      
      {/* Top Titles */}
      <div className="text-center z-10 w-full max-w-5xl mx-auto mb-12 md:mb-16">
        <TextReveal duration={0.8} delay={0.1}>
          <h1 className="font-serif text-[clamp(2.5rem,11vw,3.6rem)] md:text-7xl lg:text-[5.5rem] leading-[1.1] text-editorial-text tracking-tight uppercase mb-2">
            {t('home.hero.title')}
          </h1>
        </TextReveal>
        
        <TextReveal duration={0.8} delay={0.3}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] italic text-editorial-muted tracking-tight">
            {t('home.hero.subtitle')}
          </h2>
        </TextReveal>

        <Reveal delay={0.5} className="mt-10">
          <Button asLink="/approche" withArrow>
            {t('home.hero.cta')}
          </Button>
        </Reveal>
      </div>

      {/* Central Visual Slot */}
      <div className="w-full max-w-4xl mx-auto z-0 -mt-8 md:-mt-16 mb-16 md:mb-24 px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 45, scale: prefersReducedMotion ? 1 : 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          <img 
            src={editorialAssets.hero.main}
            alt="Balance de justice dans une composition éditoriale"
            className="h-[190px] md:h-[480px] w-auto max-w-[800px] object-contain"
          />
        </motion.div>
      </div>

      {/* Bottom Metadata */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        <Reveal delay={0.3} direction="up" className="text-center md:text-left mb-8 md:mb-0">
          <p className="font-medium text-editorial-text tracking-widest uppercase text-xs mb-2">
            {t('home.hero.locationLabel')}
          </p>
          <p className="text-editorial-muted max-w-[280px]">
            {t('home.hero.locationText')}
          </p>
        </Reveal>

        <Reveal delay={0.4} direction="up" className="flex flex-wrap justify-center gap-3">
          <FrameworkBadge text="Sénégal" />
          <FrameworkBadge text="OHADA" />
          <FrameworkBadge text="UEMOA" />
        </Reveal>
        
      </div>

    </section>
  );
};
