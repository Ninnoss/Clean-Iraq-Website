import { MdGTranslate } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  document.documentElement.lang = i18n.language;

  const handleLanguageChange = (newLanguage) => {
    newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex items-center absolute end-36 md:top-4 md:-me-32 lg:me-0 lg:top-7 lg:end-4">
      <button
        onClick={handleLanguageChange}
        className="flex items-center justify-center text-primaryOrange font-bold text-xl  py-1.5 px-3 md:px-0 lg:px-3 rounded-lg">
        {i18n.language === 'en' ? 'Ar' : 'En'} <MdGTranslate className="mx-2" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
