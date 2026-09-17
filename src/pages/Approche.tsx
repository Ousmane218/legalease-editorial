import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { Reveal } from '../components/motion/Reveal';
import { ClientLifecycle } from '../components/sections/ClientLifecycle';
import { editorialAssets } from '../data/assets';
import { Button } from '../components/ui/Button';
import { SectionLabel } from '../components/ui/SectionLabel';
import { useTranslation } from 'react-i18next';

export const Approche: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageShell>
      
      {/* SECTION 1 & 2: HERO APPROCHE */}
      <section className="bg-editorial-dark relative text-editorial-light">
        <div className="relative pt-28 pb-20 md:pt-48 md:pb-48 min-h-[60vh] md:min-h-[100vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={editorialAssets.dakar.coast} 
              alt="Vue urbaine de Dakar et de la corniche" 
              className="w-full h-full object-cover grayscale-[15%] opacity-30"
            />
            <div className="absolute inset-0 bg-editorial-dark/70 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <Reveal>
              <SectionLabel text={t('approach.hero.label')} className="text-editorial-accent mb-8" />
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tight mb-8">
                {t('approach.hero.title')}<br/>
                <span className="italic text-editorial-light/70 text-4xl md:text-6xl lg:text-7xl">{t('approach.hero.subtitle')}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-editorial-light/90 max-w-3xl mx-auto leading-relaxed mb-24">
                {t('approach.hero.text')}
              </p>

              <div className="border-t border-editorial-light/20 pt-16 max-w-3xl mx-auto">
                <p className="font-medium text-editorial-accent tracking-widest uppercase text-xs mb-6">
                  {t('approach.hero.locationLabel')}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-editorial-light uppercase mb-6 leading-tight">
                  {t('approach.hero.locationTitle')}
                </h2>
                <p className="text-lg md:text-xl text-editorial-light/70 max-w-2xl mx-auto leading-relaxed">
                  {t('approach.hero.locationText')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: MÉTHODOLOGIE */}
      <ClientLifecycle />

      {/* SECTION 4: NOTRE MODÈLE */}
      <section className="py-16 md:py-32 px-6 bg-editorial-dark text-editorial-light text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel text={t('approach.model.label')} className="text-editorial-accent mb-8" />
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-12">
              {t('approach.model.title')}
            </h2>
            <p className="text-lg md:text-xl text-editorial-light/70 max-w-3xl mx-auto leading-relaxed">
              {t('approach.model.text')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5: ORGANISATION */}
      <section className="py-16 md:py-32 px-6 text-center border-t border-editorial-border/10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel text={t('approach.organization.label')} className="mb-8" />
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8" dangerouslySetInnerHTML={{ __html: t('approach.organization.title') }} />
            <p className="text-lg md:text-xl text-editorial-text/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('approach.organization.text')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asLink="/equipe" variant="primary" withArrow>
                {t('approach.organization.ctaTeam')}
              </Button>
              <Button asLink="/expertises" variant="outline" withArrow>
                {t('approach.organization.ctaExpertises')}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

    </PageShell>
  );
};
