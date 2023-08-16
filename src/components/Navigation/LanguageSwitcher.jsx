import { useState, useEffect } from 'react';
import i18n from '../../i18n/config';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    document.body.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    setCurrentLanguage(newLanguage);
    console.log(i18n.language);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, []);

  return (
    <div className=''>
      <select
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-primaryOrange  text-white mx-4 p-2 rounded-lg">
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
      <p className="p-2 inline">Current Language: {i18n.language}</p>
    </div>
  );
};

export default LanguageSwitcher;

// import i18n from '../../i18n/config';
// const LanguageSwitcher = () => {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           i18n.changeLanguage('en');
//           document.body.dir = 'ltr';
//           console.log(i18n.language);
//         }}
//         className="bg-primaryGreen text-white mx-4 p-2 rounded-lg ">
//         English
//       </button>
//       <button
//         onClick={() => {
//           i18n.changeLanguage('ar');
//           i18n.dir('rtl');
//           document.body.dir = 'rtl';
//           console.log(i18n.language);
//         }}
//         className="bg-primaryGreen text-white mx-4 p-2 rounded-lg ">
//         Arabic
//       </button>
//       <p className="p-2">Current Language: {i18n.language}</p>
//     </div>
//   );
// };

// export default LanguageSwitcher;
