import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { PublicationsPreview } from '../components/sections/PublicationsPreview';
import { Reveal } from '../components/motion/Reveal';
import { editorialAssets } from '../data/assets';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../components/ui/SectionLabel';

export const Publications: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageShell>
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={editorialAssets.editorial.history} 
            alt="Photographie éditoriale historique" 
            className="w-full h-full object-cover grayscale-[40%]"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-editorial-dark/60" />
        </div>

        {/* Title Content */}
        <div className="relative z-10 text-center text-editorial-light px-6 w-full max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel text={t('nav.publications')} className="text-editorial-light/80 mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest text-editorial-light drop-shadow-md">
              {t('home.publicationsPreview.label')}
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="pb-12">
        <PublicationsPreview hideHeader={true} />
      </div>
    </PageShell>
  );
};
