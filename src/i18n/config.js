import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import enTranslations from './locales/en/translations.json';
import arTranslations from './locales/ar/translations.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    // debug: true,
    fallbackLng: 'ar',
    lng: 'ar',
    resources: {
      en: {
        translations: enTranslations,
      },
      ar: {
        translations: arTranslations,
      },
    },
    ns: ['translations'],
  });

i18n.languages = ['en', 'ar'];

export default i18n;
