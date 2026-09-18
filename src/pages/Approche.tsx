import React, { useState } from 'react';
import { PageShell } from '../components/layout/PageShell';
import { Reveal } from '../components/motion/Reveal';
import { ClientLifecycle } from '../components/sections/ClientLifecycle';
import { editorialAssets } from '../data/assets';
import { Button } from '../components/ui/Button';
import { SectionLabel } from '../components/ui/SectionLabel';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const sectorCategories = [
  { key: "companies", link: "/expertises/juridique-fiscal" },
  { key: "groups", link: "/expertises/juridique-fiscal" },
  { key: "entrepreneurs", link: "/expertises/transactions" },
  { key: "investors", link: "/expertises/corporate-finance" },
  { key: "institutions", needsKeys: ["sectors.categories.institutions.needs.0", "sectors.categories.institutions.needs.1", "sectors.categories.institutions.needs.2"], link: "/expertises/juridique-fiscal" }
];

export const Approche: React.FC = () => {
  const { t } = useTranslation();
  const [activeSectorKey, setActiveSectorKey] = useState<string>(sectorCategories[0].key);
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
      <section className="py-16 md:py-32 px-6 text-center bg-editorial-bg text-editorial-text border-t border-editorial-border/10">
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

      {/* SECTION 6: SECTEURS / CLIENTÈLE */}
      <section id="secteurs" className="py-16 md:py-32 px-6 bg-editorial-bg text-editorial-text border-t border-editorial-border/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-12 md:mb-24 text-center">
            <Reveal>
              <SectionLabel text={t('sectors.index.label')} className="mb-6" />
              <h2 className="font-serif text-4xl md:text-6xl uppercase mb-8 leading-tight">
                {t('sectors.index.title')}
              </h2>
              <p className="text-xl text-editorial-muted max-w-2xl mx-auto leading-relaxed">
                {t('sectors.index.text')}
              </p>
            </Reveal>
          </div>

          <div className="space-y-4 md:space-y-16">
            {sectorCategories.map((cat, idx) => {
              const isActive = activeSectorKey === cat.key;
              return (
                <Reveal key={idx} delay={idx * 0.1} className="border-t border-editorial-border/20 pt-6 md:pt-16">
                  
                  {/* Mobile Trigger */}
                  <button 
                    className="w-full md:hidden flex justify-between items-center text-left pb-2"
                    onClick={() => setActiveSectorKey(isActive ? '' : cat.key)}
                  >
                    <h3 className={cn(
                      "font-serif text-2xl uppercase tracking-widest transition-colors duration-300",
                      isActive ? "text-editorial-accent" : "text-editorial-text"
                    )}>
                      {t(`sectors.categories.${cat.key}.title`)}
                    </h3>
                    <span className={cn("text-xl transition-transform duration-300 text-editorial-muted", isActive ? "rotate-45 text-editorial-accent" : "")}>+</span>
                  </button>

                  {/* Mobile Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                      >
                        <div className="pt-4 pb-4 flex flex-col gap-8">
                          <div>
                            <p className="text-editorial-text/80 leading-relaxed mb-6 text-sm">
                              {t(`sectors.categories.${cat.key}.desc`)}
                            </p>
                            <Button asLink={cat.link} variant="outline" size="sm" withArrow>
                              {t(`sectors.categories.${cat.key}.cta`)}
                            </Button>
                          </div>
                          <div className="bg-editorial-bg-soft p-6 border border-editorial-border/10">
                            <h4 className="text-xs uppercase tracking-widest text-editorial-muted mb-6">
                              {t('sectors.labels.needsLabel')}
                            </h4>
                            <ul className="grid grid-cols-1 gap-y-4">
                              {[0, 1, 2, 3].map((nIdx) => {
                                const needKey = `sectors.categories.${cat.key}.needs.${nIdx}`;
                                const translated = t(needKey);
                                if (translated !== needKey && translated !== '') {
                                  return (
                                    <li key={nIdx} className="flex items-start text-sm text-editorial-text/80">
                                      <Check className="w-4 h-4 mr-3 text-editorial-accent flex-shrink-0 mt-0.5" />
                                      {translated}
                                    </li>
                                  );
                                }
                                return null;
                              })}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Desktop Content */}
                  <div className="hidden md:flex flex-row gap-24">
                    <div className="md:w-1/3">
                      <h3 className="font-serif text-3xl uppercase tracking-widest mb-6">
                        {t(`sectors.categories.${cat.key}.title`)}
                      </h3>
                      <p className="text-editorial-text/80 leading-relaxed mb-8">
                        {t(`sectors.categories.${cat.key}.desc`)}
                      </p>
                      <Button asLink={cat.link} variant="outline" size="sm" withArrow>
                        {t(`sectors.categories.${cat.key}.cta`)}
                      </Button>
                    </div>

                    <div className="md:w-2/3 bg-editorial-bg-soft p-12 border border-editorial-border/10">
                      <h4 className="text-xs uppercase tracking-widest text-editorial-muted mb-8">
                        {t('sectors.labels.needsLabel')}
                      </h4>
                      <ul className="grid grid-cols-2 gap-y-6 gap-x-8">
                        {[0, 1, 2, 3].map((nIdx) => {
                          const needKey = `sectors.categories.${cat.key}.needs.${nIdx}`;
                          const translated = t(needKey);
                          if (translated !== needKey && translated !== '') {
                            return (
                              <li key={nIdx} className="flex items-start text-sm text-editorial-text/80">
                                <Check className="w-4 h-4 mr-3 text-editorial-accent flex-shrink-0 mt-0.5" />
                                {translated}
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ul>
                    </div>
                  </div>

                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

    </PageShell>
  );
};
