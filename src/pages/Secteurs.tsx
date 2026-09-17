import React, { useState } from 'react';
import { PageShell } from '../components/layout/PageShell';
import { Reveal } from '../components/motion/Reveal';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const categories = [
  {
    key: "companies",
    link: "/expertises/juridique-fiscal"
  },
  {
    key: "groups",
    link: "/expertises/juridique-fiscal"
  },
  {
    key: "entrepreneurs",
    link: "/expertises/transactions"
  },
  {
    key: "investors",
    link: "/expertises/corporate-finance"
  },
  {
    key: "institutions",
    needsKeys: ["sectors.categories.institutions.needs.0", "sectors.categories.institutions.needs.1", "sectors.categories.institutions.needs.2"],
    link: "/expertises/juridique-fiscal"
  }
];

export const Secteurs: React.FC = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<string>(categories[0].key);

  return (
    <PageShell>
      <div className="pt-28 md:pt-48 pb-16 md:pb-32 px-6 bg-editorial-bg text-editorial-text">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-12 md:mb-24 text-center">
            <Reveal>
              <SectionLabel text={t('sectors.index.label')} className="mb-6" />
              <h1 className="font-serif text-4xl md:text-7xl uppercase mb-8 leading-tight">
                {t('sectors.index.title')}
              </h1>
              <p className="text-xl text-editorial-muted max-w-2xl mx-auto leading-relaxed">
                {t('sectors.index.text')}
              </p>
            </Reveal>
          </div>

          <div className="space-y-4 md:space-y-16">
            {categories.map((cat, idx) => {
              const isActive = activeKey === cat.key;
              return (
                <Reveal key={idx} delay={idx * 0.1} className="border-t border-editorial-border/20 pt-6 md:pt-16">
                  
                  {/* Mobile Trigger */}
                  <button 
                    className="w-full md:hidden flex justify-between items-center text-left pb-2"
                    onClick={() => setActiveKey(isActive ? '' : cat.key)}
                  >
                    <h2 className={cn(
                      "font-serif text-2xl uppercase tracking-widest transition-colors duration-300",
                      isActive ? "text-editorial-accent" : "text-editorial-text"
                    )}>
                      {t(`sectors.categories.${cat.key}.title`)}
                    </h2>
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
                            <h3 className="text-xs uppercase tracking-widest text-editorial-muted mb-6">
                              {t('sectors.labels.needsLabel')}
                            </h3>
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
                      <h2 className="font-serif text-3xl uppercase tracking-widest mb-6">
                        {t(`sectors.categories.${cat.key}.title`)}
                      </h2>
                      <p className="text-editorial-text/80 leading-relaxed mb-8">
                        {t(`sectors.categories.${cat.key}.desc`)}
                      </p>
                      <Button asLink={cat.link} variant="outline" size="sm" withArrow>
                        {t(`sectors.categories.${cat.key}.cta`)}
                      </Button>
                    </div>

                    <div className="md:w-2/3 bg-editorial-bg-soft p-12 border border-editorial-border/10">
                      <h3 className="text-xs uppercase tracking-widest text-editorial-muted mb-8">
                        {t('sectors.labels.needsLabel')}
                      </h3>
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
      </div>
    </PageShell>
  );
};
