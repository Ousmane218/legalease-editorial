import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { PublicationsPreview } from '../components/sections/PublicationsPreview';
import { ImageReveal } from '../components/motion/ImageReveal';
import { editorialAssets } from '../data/assets';

export const Publications: React.FC = () => {
  return (
    <PageShell>
      <div className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <ImageReveal delay={0.2} className="w-full">
            <img 
              src={editorialAssets.editorial.history} 
              alt="Photographie éditoriale historique" 
              className="w-full h-auto max-h-[30vh] md:max-h-[40vh] object-cover grayscale-[20%]"
            />
          </ImageReveal>
        </div>
        <PublicationsPreview />
      </div>
    </PageShell>
  );
};
