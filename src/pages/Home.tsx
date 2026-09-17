import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { Hero } from '../components/sections/Hero';
import { Philosophy } from '../components/sections/Philosophy';
import { ExpertiseTeaser } from '../components/sections/ExpertiseTeaser';
import { LifecycleTeaser } from '../components/sections/LifecycleTeaser';
import { Governance } from '../components/sections/Governance';
import { PublicationsPreview } from '../components/sections/PublicationsPreview';
import { ContactCTA } from '../components/sections/ContactCTA';

export const Home: React.FC = () => {
  return (
    <PageShell>
      <Hero />
      <Philosophy />
      <ExpertiseTeaser />
      <LifecycleTeaser />
      <Governance />
      <PublicationsPreview />
      <ContactCTA />
    </PageShell>
  );
};
