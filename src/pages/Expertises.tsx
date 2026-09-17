import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { ExpertiseHub } from '../components/sections/ExpertiseHub';
import { Reveal } from '../components/motion/Reveal';
import { editorialAssets } from '../data/assets';
import { useTranslation } from 'react-i18next';

export const Expertises: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageShell>
      <div className="bg-editorial-dark">
        <div className="relative pt-28 pb-20 md:pt-48 md:pb-32 min-h-[40vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={editorialAssets.legal.justiceBuilding} 
              alt="Bâtiment de justice" 
              className="w-full h-full object-cover grayscale-[15%] opacity-30"
            />
            <div className="absolute inset-0 bg-editorial-dark/60 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <Reveal>
              <p className="font-medium text-editorial-accent tracking-widest uppercase text-xs mb-4">
                {t('expertises.index.label')}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl uppercase text-editorial-light mb-6 tracking-widest">
                {t('expertises.index.title')}
              </h1>
              <p className="text-xl text-editorial-light/80 font-serif italic max-w-2xl mx-auto">
                {t('expertises.index.text')}
              </p>
            </Reveal>
          </div>
        </div>
        <div className="relative z-20">
          <ExpertiseHub hideTitle />
        </div>
      </div>
    </PageShell>
  );
};
