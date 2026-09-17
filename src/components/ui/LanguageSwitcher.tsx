import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isFr = i18n.language !== 'en'; // default to fr

  return (
    <div className="flex items-center text-xs tracking-widest font-serif">
      <button
        onClick={() => handleLanguageChange('fr')}
        aria-label="Passer en français"
        className={cn(
          "transition-opacity duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center",
          isFr ? "opacity-100 font-medium" : "opacity-60 hover:opacity-100"
        )}
      >
        FR
      </button>
      <span className="mx-2 opacity-30">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
        className={cn(
          "transition-opacity duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center",
          !isFr ? "opacity-100 font-medium" : "opacity-60 hover:opacity-100"
        )}
      >
        EN
      </button>
    </div>
  );
};
