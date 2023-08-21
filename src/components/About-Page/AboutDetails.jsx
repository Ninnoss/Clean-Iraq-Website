import { useTranslation } from 'react-i18next';
import { aboutUs } from '../../data/aboutPage';
import Row from './Row';

const AboutDetails = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-5 pb-20 md:space-y-6 relative">
      {/* Square designs */}
      <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 xl:h-32 absolute top-0 end-0 xl:top-12 rounded-lg  bg-[#bbd1c2] -z-10"></div>
      <div className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 absolute top-8 end-4 md:end-7  xl:top-24 xl:end-10 rounded-lg bg-[#F4DDBC] -z-10"></div>
      {aboutUs.map((row, index) => {
        const { imageSrc, imageAlt } = row;
        const isLTR = index % 2 === 0;

        return (
          <Row
            key={index}
            title={t(`about-page.paragraphs.${index}.title`)}
            description={t(`about-page.paragraphs.${index}.description`)}
            description2={t(`about-page.paragraphs.${index}.description2`)}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            isLTR={isLTR}
          />
        );
      })}
    </section>
  );
};

export default AboutDetails;
