import React from 'react';
import { Reveal } from '../motion/Reveal';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

export const ContactCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32 bg-editorial-dark text-editorial-light text-center px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-editorial-accent text-sm tracking-widest uppercase mb-4">{t('home.contactCta.label')}</div>
          <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tight mb-12">
            {t('home.contactCta.title')}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asLink="/contact" variant="primary" size="lg" className="bg-editorial-light text-editorial-dark hover:bg-editorial-light/90" withArrow>
              {t('home.contactCta.cta')}
            </Button>
            <span className="text-sm font-medium tracking-widest uppercase text-editorial-muted">
              Dakar, Sénégal
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
