import { useState, useEffect } from 'react';
import { FiGlobe } from 'react-icons/fi';
import i18n from '../../i18n/config';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    document.body.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, []);

  return (
    <div className="flex items-center">
      <button
        onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'ar' : 'en')}
        className="flex items-center justify-center bg-primaryOrange text-white py-1.5 px-3 rounded-lg">
        <FiGlobe className="mx-2" />
        {/* Change the icon position based on your design */}
        {currentLanguage === 'en' ? 'عربي' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

// import { useState, useEffect } from 'react';
// import i18n from '../../i18n/config';

// const LanguageSwitcher = () => {
//   const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

//   const handleLanguageChange = (newLanguage) => {
//     i18n.changeLanguage(newLanguage);
//     document.body.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
//     setCurrentLanguage(newLanguage);
//     // console.log(i18n.language);
//   };

//   useEffect(() => {
//     setCurrentLanguage(i18n.language);
//   }, []);

//   return (
//     <div className=''>
//       <select
//         value={currentLanguage}
//         onChange={(e) => handleLanguageChange(e.target.value)}
//         className="bg-primaryOrange  text-white mx-4 p-2 rounded-lg">
//         <option value="en">English</option>
//         <option value="ar">Arabic</option>
//       </select>
//       {/* <p className="p-2 inline">Current Language: {i18n.language}</p> */}
//     </div>
//   );
// };

// export default LanguageSwitcher;
