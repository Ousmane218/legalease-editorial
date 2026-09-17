import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fr } from './locales/fr';
import { en } from './locales/en';

const resources = {
  fr: { translation: fr },
  en: { translation: en }
};

const savedLanguage = localStorage.getItem('legalease-language') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// Listen for language changes to update localStorage and html lang attribute
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('legalease-language', lng);
  document.documentElement.lang = lng;
});

// Initial set
document.documentElement.lang = i18n.language;

export default i18n;
