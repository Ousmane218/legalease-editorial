import React from 'react';
import { Reveal } from '../motion/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

export const LifecycleTeaser: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-32 bg-editorial-bg text-editorial-text border-t border-editorial-border/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        <Reveal>
          <SectionLabel text={t('home.lifecycleTeaser.label')} className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-xs md:text-sm font-medium tracking-widest uppercase text-editorial-muted mb-12">
            <span>{t('home.lifecycleTeaser.stages.creation')}</span>
            <span className="text-editorial-accent rotate-90 md:rotate-0">→</span>
            <span>{t('home.lifecycleTeaser.stages.structuration')}</span>
            <span className="text-editorial-accent rotate-90 md:rotate-0">→</span>
            <span>{t('home.lifecycleTeaser.stages.financement')}</span>
            <span className="text-editorial-accent rotate-90 md:rotate-0">→</span>
            <span>{t('home.lifecycleTeaser.stages.croissance')}</span>
            <span className="text-editorial-accent rotate-90 md:rotate-0">→</span>
            <span>{t('home.lifecycleTeaser.stages.transformation')}</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-editorial-dark mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.lifecycleTeaser.text')}
          </h3>
          
          <Button asLink="/approche" variant="outline" withArrow>
            {t('home.lifecycleTeaser.cta')}
          </Button>
        </Reveal>

      </div>
    </section>
  );
};
