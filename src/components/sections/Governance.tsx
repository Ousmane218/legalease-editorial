import React from 'react';
import { Reveal } from '../motion/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { team } from '../../data/team';
import { editorialAssets } from '../../data/assets';
import { AnimatedLink } from '../ui/AnimatedLink';
import { useTranslation } from 'react-i18next';

export const Governance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="gouvernance" className="py-16 md:py-32 bg-editorial-light border-y border-editorial-border/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12 md:mb-20">
          <SectionLabel text={t('home.governance.label')} align="center" />
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-editorial-text mb-4 uppercase tracking-widest">
              {t('home.governance.title')}
            </h2>
            <p className="text-xl text-editorial-muted font-serif italic max-w-3xl mx-auto">
              {t('home.governance.text')}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((partner, index) => (
            <Reveal key={partner.id} delay={0.2 * index} className="group cursor-pointer">
              <div className="block">
                <div className="mb-6 md:mb-8 overflow-hidden rounded-sm">
                  <img 
                    src={partner.id === 'ibrahima' ? editorialAssets.partners.ibrahima : editorialAssets.partners.serigne} 
                    alt={`Portrait de ${partner.name}`}
                    className="w-full h-auto aspect-[4/5] md:aspect-[3/4] max-h-[400px] md:max-h-none object-cover object-top grayscale-[20%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-editorial-text mb-1 group-hover:text-editorial-accent transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm font-medium tracking-wider uppercase text-editorial-muted mb-0.5">
                    {partner.role}
                  </p>
                  <p className="text-xs text-editorial-muted/70 mb-3">
                    {t(partner.departmentKey)}
                  </p>
                  <p className="text-sm text-editorial-text/80 mb-4 px-4">
                    {t(partner.shortDescriptionKey)}
                  </p>
                  <AnimatedLink to={`/equipe/${partner.slug}`} className="inline-block text-xs uppercase font-medium">
                    {t('team.profiles.ctaProfile')} →
                  </AnimatedLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
