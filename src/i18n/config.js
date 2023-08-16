import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en/translations.json';
import arTranslations from './locales/ar/translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
