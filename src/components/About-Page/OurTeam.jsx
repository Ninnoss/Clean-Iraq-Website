import { useTranslation } from 'react-i18next';
import images from '../../data/images';
import { ourTeam } from '../../data/outTeam';

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#FAFBFA]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-Heading-3 text-center max-w-lg">{t('about-page.our-team-section.header')}</h2>
      </div>

      {/* TODO: Placeholder Imgs. CHANGE THEM */}
      <div className="py-20 px-10 flex justify-center flex-wrap gap-10">
        {ourTeam.map((image, index) => (
          <figure key={index}>
            <img
            className='rounded-lg'
              src={image.img}
              loading="lazy"
              alt={`picture of ${image.alt}`}
              alt={image.alt}

            />
            <figcaption className="sr-only">{`picture of ${images.murtadha2}`}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
