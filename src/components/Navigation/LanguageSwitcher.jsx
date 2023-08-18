import { FiGlobe } from 'react-icons/fi';
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
    <div className="flex items-center absolute end-36 md:top-7 md:end-4">
      <button
        onClick={handleLanguageChange}
        className="flex items-center justify-center bg-primaryOrange text-white py-1.5 px-3 rounded-lg">
        <FiGlobe className="mx-2" />
        {i18n.language === 'en' ? 'عربي' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
