import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { Reveal } from '../components/motion/Reveal';
import { ImageReveal } from '../components/motion/ImageReveal';
import { editorialAssets } from '../data/assets';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageShell>
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-48 pb-16 md:pb-48 min-h-[70vh]">
        <Reveal className="mb-24 text-center md:text-left">
          <SectionLabel text={t('contact.index.label')} className="mb-6" align="left" />
          <h1 className="font-serif text-5xl md:text-7xl uppercase mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('contact.index.title') }} />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <Reveal delay={0.1}>
            <div className="bg-editorial-dark text-editorial-light p-12 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl uppercase tracking-widest mb-12 border-b border-editorial-light/20 pb-4">
                  {t('contact.index.addressLabel')}
                </h3>
                <address className="not-italic text-editorial-light/80 space-y-2 mb-16 text-lg">
                  <strong>LegalEase Partners</strong><br />
                  Villa N°112B<br />
                  Centenaire<br />
                  Dakar, Sénégal
                </address>
              </div>

              <div className="space-y-4 text-sm text-editorial-light/60 uppercase tracking-widest font-medium">
                <p>RCCM : SN DKR 2026 B 16076</p>
                <p>NINEA : 013018818 2A5</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-serif text-2xl uppercase tracking-widest mb-12 border-b border-editorial-border/20 pb-4">
              {t('contact.index.formLabel')}
            </h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs text-editorial-muted mb-3 uppercase tracking-widest font-medium">{t('contact.index.name')}</label>
                  <input type="text" className="w-full bg-editorial-bg-soft border border-editorial-border/20 p-4 focus:outline-none focus:border-editorial-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-editorial-muted mb-3 uppercase tracking-widest font-medium">{t('contact.index.email')}</label>
                  <input type="email" className="w-full bg-editorial-bg-soft border border-editorial-border/20 p-4 focus:outline-none focus:border-editorial-accent transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-editorial-muted mb-3 uppercase tracking-widest font-medium">{t('contact.index.message')}</label>
                <textarea rows={6} className="w-full bg-editorial-bg-soft border border-editorial-border/20 p-4 focus:outline-none focus:border-editorial-accent transition-colors resize-none"></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" withArrow>
                {t('contact.index.submit')}
              </Button>
            </form>
          </Reveal>

        </div>
        
        <ImageReveal delay={0.3} className="mt-32 w-full shadow-2xl shadow-editorial-dark/5">
          <img 
            src={editorialAssets.dakar.city} 
            alt="Vue urbaine de Dakar" 
            className="w-full h-auto max-h-[30vh] md:max-h-[40vh] object-cover grayscale-[10%]"
          />
        </ImageReveal>
      </div>
    </PageShell>
  );
};
