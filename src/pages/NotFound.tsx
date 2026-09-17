import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { Reveal } from '../components/motion/Reveal';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-6 py-32 text-center min-h-[70vh] flex flex-col justify-center items-center">
        <Reveal>
          <h1 className="font-serif text-8xl mb-4 text-editorial-accent">404</h1>
          <h2 className="text-xl uppercase tracking-widest text-editorial-muted mb-10">Page introuvable</h2>
          <Button asLink="/">Retour à l'accueil</Button>
        </Reveal>
      </div>
    </PageShell>
  );
};
