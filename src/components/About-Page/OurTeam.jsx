import { useTranslation } from 'react-i18next';
import { ourTeam } from '../../data/outTeam';

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-Heading-3 text-center max-w-lg">{t('about-page.our-team-section.header')}</h2>
      </div>

      <div className="py-20 px-10 flex justify-center flex-wrap gap-16 md:gap-24">
        {ourTeam.map((image, index) => (
          <div key={index}>
            <figure>
              <img
                className="rounded-lg"
                src={image.img}
                loading="lazy"
                alt={`picture of ${image.alt}`}
              />
              <figcaption className="sr-only">{`picture of ${image.name}`}</figcaption>
            </figure>
            <div>
              <h4 className="text-Heading-4 text-center pt-2 ">{image.name}</h4>
              <span className="text-center block">Founder</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
