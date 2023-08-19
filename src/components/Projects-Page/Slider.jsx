import { useTranslation } from 'react-i18next';

const Slider = () => {
  const { t } = useTranslation();
  // const words = t('projects-page.previous-events-section.slider.words');

  return (
    <div className="flex items-center justify-center text-Heading-3 mb-3 ">
      <div className="flex items-center justify-center relative start-20 h-[50px] overflow-hidden gap-2">
        <h1 className="flex items-center h-[50px] leading-10">{t('projects-page.previous-events-section.slider.text')}</h1>
        <div className="slide-header">
          {[1, 2, 3, 4, 5].map((word, index) => (
            <h1
              key={word}
              className="name leading-[100%] flex items-center h-[50px] font-bold ml-[10px] text-primaryOrange">
              {t(`projects-page.previous-events-section.slider.words.${index}`)}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
