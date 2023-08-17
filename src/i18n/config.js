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
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: {
        translations: enTranslations,
      },
      ar: {
        translations: arTranslations,
      },
    },
    ns: ['translations'],
    // defaultNS: 'translations',
    // Set language direction for Arabic
    // This will automatically set the dir attribute to "rtl" when using Arabic language
    // rtl: ['ar'],
    // ltr: ['en'],
  });

i18n.languages = ['en', 'ar'];

export default i18n;
