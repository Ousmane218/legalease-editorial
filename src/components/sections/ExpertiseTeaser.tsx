import React from 'react';
import { Reveal } from '../motion/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';
import { expertises } from '../../data/expertises';

export const ExpertiseTeaser: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-32 bg-editorial-dark text-editorial-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-12 md:mb-24 text-center md:text-left">
          <SectionLabel text={t('home.expertiseTeaser.label')} className="text-editorial-accent" align="left" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-editorial-light mb-4">{t('home.expertiseTeaser.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
          {expertises.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1} className="group relative border-l border-editorial-light/20 pl-6 hover:border-editorial-accent transition-colors duration-300">
              <span className="block text-editorial-accent font-serif italic mb-4">0{idx + 1}</span>
              <h3 className="font-serif text-2xl uppercase tracking-widest text-editorial-light mb-4 group-hover:text-editorial-accent transition-colors duration-300">
                {t(item.titleKey)}
              </h3>
              <p className="text-editorial-light/60 text-sm max-w-xs">
                {t(item.descriptionKey)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="text-center md:text-left">
          <Button asLink="/expertises" variant="outline" className="text-editorial-light border-editorial-light/30 hover:bg-editorial-light hover:text-editorial-dark" withArrow>
            {t('home.expertiseTeaser.cta')}
          </Button>
        </Reveal>

      </div>
    </section>
  );
};
