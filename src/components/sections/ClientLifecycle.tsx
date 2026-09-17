import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lifecycle } from '../../data/lifecycle';
import { Reveal } from '../motion/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

export const ClientLifecycle: React.FC = () => {
  const [activeStage, setActiveStage] = useState(lifecycle[0]);
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-32 bg-editorial-bg text-editorial-text overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <Reveal className="mb-12 md:mb-24 max-w-3xl">
          <SectionLabel text={t('approach.lifecycle.label')} />
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-editorial-text leading-tight mb-4 uppercase">
            {t('approach.lifecycle.title')}
          </h2>
        </Reveal>

        {/* Desktop Timeline */}
        <div className="hidden md:block mb-16">
          <div className="flex justify-between items-center relative border-b border-editorial-border pb-6">
            {/* Active Indicator Line */}
            <motion.div 
              className="absolute bottom-0 h-[1px] bg-editorial-accent transition-all duration-500 ease-out"
              initial={false}
              animate={{ 
                left: `${(lifecycle.findIndex(s => s.id === activeStage.id) / (lifecycle.length - 1)) * 100}%`,
                width: '10%' // Roughly the width of an item, could be calculated more precisely
              }}
              style={{ transform: 'translateX(-50%)', left: `calc(${(lifecycle.findIndex(s => s.id === activeStage.id) / (lifecycle.length - 1)) * 100}%)` }}
            />

            {lifecycle.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                className={cn(
                  "relative text-sm font-medium tracking-wider uppercase transition-colors duration-300",
                  activeStage.id === stage.id ? "text-editorial-text" : "text-editorial-muted hover:text-editorial-text"
                )}
              >
                {t(stage.titleKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col space-y-4">
          {lifecycle.map((stage) => {
            const isActive = activeStage.id === stage.id;
            return (
              <div key={stage.id} className="border-b border-editorial-border pb-4">
                <button
                  onClick={() => setActiveStage(stage)}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className={cn(
                    "text-sm font-medium tracking-wider uppercase transition-colors duration-300",
                    isActive ? "text-editorial-accent" : "text-editorial-text"
                  )}>
                    {t(stage.titleKey)}
                  </span>
                  <span className={cn(
                    "text-xl transition-transform duration-300 text-editorial-muted",
                    isActive ? "rotate-45" : ""
                  )}>+</span>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 space-y-8">
                        {/* Juridique */}
                        <div className="flex flex-col">
                          <h4 className="font-serif uppercase tracking-widest text-sm text-editorial-text mb-4 border-b border-editorial-border pb-2">{t('expertises.categories.legalTax.title').split('&')[0].trim()}</h4>
                          <ul className="space-y-3">
                            {stage.content.juridiqueKeys.map((key, i) => (
                              <li key={i} className="text-sm text-editorial-text/80 flex items-start">
                                <span className="text-editorial-accent mr-2 mt-1 text-[10px]">■</span>
                                {t(key)}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Fiscal */}
                        <div className="flex flex-col">
                          <h4 className="font-serif uppercase tracking-widest text-sm text-editorial-text mb-4 border-b border-editorial-border pb-2">{t('expertises.categories.legalTax.services.tax')}</h4>
                          <ul className="space-y-3">
                            {stage.content.fiscalKeys.map((key, i) => (
                              <li key={i} className="text-sm text-editorial-text/80 flex items-start">
                                <span className="text-editorial-accent mr-2 mt-1 text-[10px]">■</span>
                                {t(key)}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Finance */}
                        <div className="flex flex-col">
                          <h4 className="font-serif uppercase tracking-widest text-sm text-editorial-text mb-4 border-b border-editorial-border pb-2">{t('expertises.categories.corporateFinance.title').split(' ')[1]}</h4>
                          <ul className="space-y-3">
                            {stage.content.financeKeys.map((key, i) => (
                              <li key={i} className="text-sm text-editorial-text/80 flex items-start">
                                <span className="text-editorial-accent mr-2 mt-1 text-[10px]">■</span>
                                {t(key)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Content Display (Desktop) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Juridique */}
            <div className="flex flex-col">
              <h4 className="font-serif uppercase tracking-widest text-lg text-editorial-text mb-6 border-b border-editorial-border pb-4">{t('expertises.categories.legalTax.title').split('&')[0].trim()}</h4>
              <ul className="space-y-4">
                {activeStage.content.juridiqueKeys.map((key, i) => (
                  <li key={i} className="text-base text-editorial-text/80 flex items-start">
                    <span className="text-editorial-accent mr-3 mt-1.5 text-xs">■</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fiscal */}
            <div className="flex flex-col">
              <h4 className="font-serif uppercase tracking-widest text-lg text-editorial-text mb-6 border-b border-editorial-border pb-4">{t('expertises.categories.legalTax.services.tax')}</h4>
              <ul className="space-y-4">
                {activeStage.content.fiscalKeys.map((key, i) => (
                  <li key={i} className="text-base text-editorial-text/80 flex items-start">
                    <span className="text-editorial-accent mr-3 mt-1.5 text-xs">■</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Finance */}
            <div className="flex flex-col">
              <h4 className="font-serif uppercase tracking-widest text-lg text-editorial-text mb-6 border-b border-editorial-border pb-4">{t('expertises.categories.corporateFinance.title').split(' ')[1]}</h4>
              <ul className="space-y-4">
                {activeStage.content.financeKeys.map((key, i) => (
                  <li key={i} className="text-base text-editorial-text/80 flex items-start">
                    <span className="text-editorial-accent mr-3 mt-1.5 text-xs">■</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
