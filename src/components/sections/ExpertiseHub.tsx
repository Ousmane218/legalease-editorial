import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { expertises } from '../../data/expertises';
import { SectionLabel } from '../ui/SectionLabel';
import { cn } from '../../lib/utils';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

interface ExpertiseHubProps {
  hideTitle?: boolean;
}

export const ExpertiseHub: React.FC<ExpertiseHubProps> = ({ hideTitle = false }) => {
  const [activeExp, setActiveExp] = useState(expertises[0]);
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-32 bg-editorial-dark text-editorial-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {!hideTitle && (
          <div className="mb-12 md:mb-24 text-center md:text-left">
            <SectionLabel text={t('expertises.index.label')} className="text-editorial-accent" align="left" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-editorial-light mb-4">{t('expertises.index.title')}</h2>
            <p className="text-xl text-editorial-light/60 font-serif italic">{t('expertises.index.text')}</p>
          </div>
        )}

        {/* Desktop Layout: Interactive Radial/List Interface */}
        <div className="hidden md:grid grid-cols-12 gap-12 items-center">
          
          {/* Left / Nodes */}
          <div className="col-span-5 relative h-[400px] flex flex-col justify-center gap-12 border-l border-editorial-light/10 pl-8">
            {expertises.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp)}
                className={cn(
                  "group relative text-left transition-all duration-300 flex items-center",
                  activeExp.id === exp.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
              >
                {/* Active Indicator Line */}
                <div className={cn(
                  "absolute -left-[32px] w-[1px] bg-editorial-accent transition-all duration-300",
                  activeExp.id === exp.id ? "h-full top-0 opacity-100" : "h-0 top-1/2 opacity-0 group-hover:h-1/2 group-hover:top-1/4 group-hover:opacity-50"
                )} />
                
                <h3 className={cn(
                  "text-2xl font-serif tracking-wide uppercase transition-all duration-300",
                  activeExp.id === exp.id ? "text-editorial-accent" : "text-editorial-light"
                )}>
                  {t(exp.titleKey)}
                </h3>
                
                <ChevronRight className={cn(
                  "ml-4 w-5 h-5 text-editorial-accent transition-transform duration-200",
                  activeExp.id === exp.id ? "opacity-100 translate-x-1.5" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                )} />
              </button>
            ))}
          </div>

          {/* Right / Panel */}
          <div className="col-span-7 pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-lg text-editorial-light/70 mb-10 max-w-md">
                  {t(activeExp.descriptionKey)}
                </p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                  {activeExp.servicesKeys.map((serviceKey, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-center text-sm font-medium text-editorial-light/90 border-b border-editorial-light/10 pb-3"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 text-editorial-accent" />
                      {t(serviceKey)}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button asLink={`/expertises/${activeExp.slug}`} variant="outline" className="text-editorial-light border-editorial-light/30 hover:bg-editorial-light hover:text-editorial-dark" withArrow>
                    {t('team.profiles.ctaExpertise')}
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout: Accordion */}
        <div className="md:hidden space-y-4">
          {expertises.map((exp) => (
            <div 
              key={exp.id} 
              className="border border-editorial-light/10 bg-editorial-light/5 rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setActiveExp(exp.id === activeExp.id ? expertises[0] : exp)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <h3 className="font-serif text-lg tracking-wide uppercase text-editorial-light">
                  {t(exp.titleKey)}
                </h3>
                <div className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  activeExp.id === exp.id ? "bg-editorial-accent" : "bg-editorial-light/20"
                )} />
              </button>
              
              <AnimatePresence>
                {activeExp.id === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-editorial-light/60 mb-6">{t(exp.descriptionKey)}</p>
                    <ul className="space-y-3">
                      {exp.servicesKeys.map((serviceKey, idx) => (
                        <li key={idx} className="flex items-center text-xs text-editorial-light/80 border-b border-editorial-light/10 pb-2">
                          <ChevronRight className="w-3 h-3 mr-2 text-editorial-accent" />
                          {t(serviceKey)}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button asLink={`/expertises/${activeExp.slug}`} variant="outline" className="w-full text-editorial-light border-editorial-light/30 hover:bg-editorial-light hover:text-editorial-dark" withArrow>
                        {t('team.profiles.ctaExpertise')}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
