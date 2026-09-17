import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { navigation } from '../../data/navigation';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-editorial-bg/80 backdrop-blur-md border-b border-editorial-border py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="relative z-10 flex-shrink-0">
            <span className="font-serif text-lg tracking-widest text-editorial-text uppercase">
              LegalEase
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navigation.map((item) => (
              <Link 
                key={item.nameKey} 
                to={item.path}
                className={cn(
                  "text-xs uppercase tracking-widest transition-colors duration-300",
                  pathname === item.path ? "text-editorial-accent font-medium" : "text-editorial-light/70 hover:text-editorial-light"
                )}
              >
                {t(item.nameKey)}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <LanguageSwitcher />
            <Link 
              to="/contact" 
              className="text-xs uppercase tracking-widest text-editorial-light hover:text-editorial-accent transition-colors duration-300 border border-editorial-light/20 hover:border-editorial-accent px-6 py-2"
            >
              {t('nav.contact')} ↗
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center space-x-6 relative z-10">
            <LanguageSwitcher />
            <button 
              className="p-2 -mr-2 text-editorial-text"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        currentPath={pathname}
      />
    </>
  );
};
