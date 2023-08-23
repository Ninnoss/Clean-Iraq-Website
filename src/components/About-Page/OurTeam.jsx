import { useTranslation } from 'react-i18next';
import { ourTeam } from '../../data/ourTeam';

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center px-6">
        <h2 className="text-Heading-3 text-center max-w-lg">{t('about-page.our-team-section.header')}</h2>
      </div>

      <div className="py-20 px-10 flex justify-center flex-wrap gap-16 md:gap-24">
        {ourTeam.map((image, index) => (
          <div key={index}>
            <figure className="group overflow-hidden">
              <img
                className="rounded-lg aspect-square object-cover max-w-[15rem] group-hover:scale-110 transition-all duration-500   "
                src={image.img}
                loading="lazy"
                alt={`picture of ${image.alt}`}
              />
              <figcaption className="sr-only">{`picture of ${image.name}`}</figcaption>
            </figure>
            <div className="pt-4">
              <h4 className="text-Heading-4 text-center">{image.name}</h4>
              <span className="text-center block">{t('about-page.our-team-section.founder')}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
