import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { useParams, Navigate } from 'react-router-dom';
import { Reveal } from '../components/motion/Reveal';
import { ImageReveal } from '../components/motion/ImageReveal';
import { editorialAssets } from '../data/assets';
import { expertises } from '../data/expertises';
import { team } from '../data/team';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const ExpertiseDetail: React.FC = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const expertise = expertises.find(e => e.slug === slug);
  
  if (!expertise) {
    return <Navigate to="/expertises" replace />;
  }

  // Content Mapping based on requested rules
  let heroImage = null;
  let partner = null;
  let introKey = expertise.descriptionKey;

  if (slug === 'juridique-fiscal') {
    heroImage = editorialAssets.legal.books;
    partner = team.find(t => t.id === 'ibrahima');
    introKey = "expertises.categories.legalTax.desc";
  } else if (slug === 'corporate-finance') {
    heroImage = null; // As requested, no forced legal imagery
    partner = team.find(t => t.id === 'serigne');
  } else if (slug === 'transactions') {
    heroImage = editorialAssets.legal.justiceBuilding;
    partner = null; // Cross-disciplinary, no single partner
  }

  return (
    <PageShell>
      <article className="pt-24 pb-16 md:pt-48 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <SectionLabel text={t('expertises.index.label')} className="mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase mb-8 leading-tight">
              {t(expertise.titleKey)}
            </h1>
            <p className="text-xl md:text-2xl text-editorial-text/80 mb-8 md:mb-16 leading-relaxed max-w-3xl">
              {t(introKey)}
            </p>
          </Reveal>
        </div>

        {heroImage && (
          <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-24">
            <ImageReveal delay={0.2} className="w-full">
              <img 
                src={heroImage} 
                alt={t(expertise.titleKey)} 
                className="w-full h-[30vh] md:h-[50vh] object-cover grayscale-[15%]"
              />
            </ImageReveal>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-24">
            <Reveal delay={0.1}>
              <h3 className="font-serif text-2xl uppercase tracking-widest mb-8 border-b border-editorial-border/20 pb-4">
                {t('expertises.index.label')}
              </h3>
              <ul className="space-y-4">
                {expertise.servicesKeys.map((serviceKey, idx) => (
                  <li key={idx} className="flex items-start text-editorial-text/80">
                    <span className="text-editorial-accent mr-3 mt-1">■</span>
                    {t(serviceKey)}
                  </li>
                ))}
              </ul>
            </Reveal>

            {partner && (
              <Reveal delay={0.2}>
                <h3 className="font-serif text-2xl uppercase tracking-widest mb-8 border-b border-editorial-border/20 pb-4">
                  {t(partner.departmentKey)}
                </h3>
                <div className="bg-editorial-bg-soft p-8 border border-editorial-border/10">
                  <p className="text-sm uppercase tracking-widest text-editorial-muted mb-2">
                    {t('contact.form.labels.name').split(' ')[0]} {/* Simple fallback for Contact clé */}
                  </p>
                  <h4 className="font-serif text-xl mb-1">{partner.name}</h4>
                  <p className="text-sm text-editorial-text/60 mb-6">{partner.role}</p>
                  <Button asLink={`/equipe/${partner.slug}`} variant="outline" size="sm" withArrow>
                    {t('team.profiles.ctaProfile')}
                  </Button>
                </div>
              </Reveal>
            )}
          </div>
          
          <Reveal className="text-center pt-12 border-t border-editorial-border/10">
            <Button asLink="/contact" variant="primary" size="lg" withArrow>
              {t('nav.contact')}
            </Button>
          </Reveal>
        </div>
      </article>
    </PageShell>
  );
};
