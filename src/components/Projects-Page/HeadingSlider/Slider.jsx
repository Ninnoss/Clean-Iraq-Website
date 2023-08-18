import { useTranslation } from 'react-i18next';
import './Slider.css';

export default function Slider() {
  const { t } = useTranslation();
  // const words = t('projects-page.previous-events-section.slider.words');

  return (
    <div className="frame css-challenge-day-73 text-center overflow-hidden flex items-center justify-center text-Heading-3 mb-2">
      <div className="center flex-row flex items-center justify-center relative h-[50px] overflow-hidden gap-2">
        <div className="label flex items-center h-[50px] leading-[100%]">{t('projects-page.previous-events-section.slider.text')}</div>
        <div className="title">
          {[1, 2, 3, 4, 5].map((word, index) => (
            <div
              key={index}
              className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">
              {t(`projects-page.previous-events-section.slider.words.${index}`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { useTranslation } from 'react-i18next';
// import './Slider.css';

// export default function Slider() {
//   const { t } = useTranslation();
//   return (
//     <div className="frame css-challenge-day-73 text-center overflow-hidden flex items-center justify-center text-Heading-3 mb-2">
//       <div className="center flex-row flex items-center justify-center relative h-[50px] overflow-hidden gap-2">
//         <div className="label flex items-center h-[50px] leading-[100%]">{t('projects-page.previous-events-section.slider.text')}</div>
//         <div className="title">
//           <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">
//             {t('projects-page.previous-events-section.slider.words.0')}
//           </div>
//           <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">
//             {t('projects-page.previous-events-section.slider.words.1')}
//           </div>
//           <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">
//             {t('projects-page.previous-events-section.slider.words.2')}
//           </div>
//           <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">
//             {t('projects-page.previous-events-section.slider.words.3')}
//           </div>
//           <div className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">
//             {t('projects-page.previous-events-section.slider.words.4')}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
