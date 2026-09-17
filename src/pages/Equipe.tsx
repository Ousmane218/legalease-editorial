import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { Reveal } from '../components/motion/Reveal';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { team } from '../data/team';
import { editorialAssets } from '../data/assets';
import { useTranslation } from 'react-i18next';

export const Equipe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageShell>
      <div className="pt-8 md:pt-12 pb-16 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center md:text-left mb-12 md:mb-24 max-w-3xl">
            <Reveal>
              <SectionLabel text={t('team.index.label')} className="mb-6" align="left" />
              <h1 className="font-serif text-5xl md:text-7xl uppercase mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t('team.index.title') }} />
              <p className="text-xl md:text-2xl text-editorial-text/80 leading-relaxed">
                {t('team.index.text')}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {team.map((partner, idx) => (
              <Reveal key={partner.id} delay={idx * 0.2} className="flex flex-col h-full">
                <div className="aspect-[4/5] md:aspect-[3/4] max-h-[400px] md:max-h-none w-full max-w-md mx-auto md:mx-0 overflow-hidden bg-editorial-dark mb-8">
                  <img 
                    src={editorialAssets.partners[partner.id as keyof typeof editorialAssets.partners]} 
                    alt={partner.name}
                    className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-editorial-accent mb-4 block">
                    {t(partner.departmentKey)}
                  </span>
                  <h3 className="font-serif text-3xl mb-1 uppercase">{partner.name}</h3>
                  <p className="text-sm font-medium tracking-widest uppercase text-editorial-muted mb-4">
                    {partner.role}
                  </p>
                  <p className="text-editorial-text/70 leading-relaxed mb-6">
                    {t(partner.shortDescriptionKey)}
                  </p>
                  <div className="mt-auto">
                    <Button asLink={`/equipe/${partner.slug}`} variant="outline" withArrow>
                      {t('team.profiles.ctaProfile')}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </PageShell>
  );
};
