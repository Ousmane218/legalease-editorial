import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { useParams, Navigate } from 'react-router-dom';
import { Reveal } from '../components/motion/Reveal';
import { ImageReveal } from '../components/motion/ImageReveal';
import { editorialAssets } from '../data/assets';
import { team } from '../data/team';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const PartnerDetail: React.FC = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const partner = team.find(p => p.slug === slug);

  if (!partner) {
    return <Navigate to="/equipe" replace />;
  }

  const portraitSrc = partner.id === 'ibrahima' ? editorialAssets.partners.ibrahima : editorialAssets.partners.serigne;

  return (
    <PageShell>
      <div className="pt-20 md:pt-24 pb-20 md:pb-32">
        {/* Intro Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center mb-16 md:mb-32">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageReveal className="w-full shadow-2xl shadow-editorial-dark/10">
              <img 
                src={portraitSrc}
                alt={`Portrait de ${partner.name}`}
                className="w-full h-auto aspect-[4/5] md:aspect-[3/4] max-h-[500px] md:max-h-none object-cover object-top grayscale-[20%]"
              />
            </ImageReveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <SectionLabel text={t(partner.departmentKey)} />
              <h1 className="font-serif text-4xl md:text-6xl text-editorial-text uppercase mb-2 md:mb-4 tracking-tight">
                {partner.name}
              </h1>
              <p className="text-xl font-medium tracking-widest uppercase text-editorial-muted mb-6 md:mb-10">
                {partner.role}
              </p>
              <p className="text-lg md:text-xl text-editorial-text/80 leading-relaxed font-serif">
                {t(partner.mainDescriptionKey)}
              </p>
            </Reveal>
          </div>

        </div>

        {/* Info Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-editorial-border/20 pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          
          <Reveal delay={0.1}>
            <h3 className="font-serif text-2xl uppercase tracking-widest text-editorial-text mb-8">
              {t('team.profiles.areasOfPractice')}
            </h3>
            <ul className="space-y-4">
              {partner.domainesKeys?.map((domaineKey, idx) => (
                <li key={idx} className="flex items-start text-editorial-muted">
                  <span className="text-editorial-accent mr-3 mt-1.5 text-xs">■</span>
                  <span className="text-base">{t(domaineKey)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-serif text-2xl uppercase tracking-widest text-editorial-text mb-8">
              {t('team.profiles.capabilities')}
            </h3>
            <ul className="space-y-4">
              {partner.missionsKeys?.map((missionKey, idx) => (
                <li key={idx} className="flex items-start text-editorial-muted">
                  <span className="text-editorial-accent mr-3 mt-1.5 text-xs">■</span>
                  <span className="text-base">{t(missionKey)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <Button asLink="/contact" withArrow>
              {t('team.profiles.ctaContact')}
            </Button>
          </Reveal>
        </div>

      </div>
    </PageShell>
  );
};
