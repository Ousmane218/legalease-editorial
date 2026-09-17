import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = i18n.language === 'en' 
      ? 'LegalEase Partners — Legal, tax & corporate finance'
      : 'LegalEase Partners — Droit, fiscalité & finance';
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col bg-editorial-bg selection:bg-editorial-accent/20">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
