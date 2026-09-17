import React from 'react';
import { publications } from '../../data/publications';
import { Reveal } from '../motion/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

export const PublicationsPreview: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-32 bg-editorial-bg text-editorial-text border-y border-editorial-border/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20">
          <Reveal>
            <SectionLabel text={t('home.publicationsPreview.label')} />
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-widest">
              {t('home.publicationsPreview.label')}
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 md:mt-0">
            <Button asLink="/publications" variant="outline" size="sm" withArrow>
              {t('home.publicationsPreview.cta')}
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
          {publications.map((pub, index) => (
            <Reveal key={pub.id} delay={index * 0.1} className="group cursor-pointer flex flex-col h-full">
              <div className="flex-grow p-6 bg-editorial-bg-soft border border-editorial-border/20 group-hover:border-editorial-accent/40 transition-colors duration-300">
                <span className="block text-[10px] uppercase tracking-widest text-editorial-accent mb-4">
                  {t(pub.categoryKey)}
                </span>
                <h3 className="font-serif text-lg leading-snug mb-6 group-hover:text-editorial-accent transition-colors">
                  {t(pub.titleKey)}
                </h3>
                {pub.isExample && (
                  <span className="inline-block px-2 py-1 bg-editorial-border/10 text-[9px] text-editorial-muted uppercase tracking-widest rounded-sm mt-auto">
                    {t('home.publicationsPreview.demo')}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
