import { useTranslation } from 'react-i18next';
import Button from '../Button';
import images from '../../data/images';

const JoinTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="p-8 mb-10 md:p-20 flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
      <div className="pt-6 pb-8  md:text-start md:max-w-[50%]">
        <h2 className="text-Heading-2">{t('about-page.join-team-section.header')}</h2>
        <p className="text-Body-L pt-6 md:pt-12 pb-6">{t('about-page.join-team-section.paragraph')}</p>
        <Button
          type="button"
          role="link"
          aria-label="Join us"
          className="my-5 lg:px-6 lg:py-1.5  tracking-wider text-Button-M block self-start font-medium">
          {t('about-page.join-team-section.join-us-button')}
        </Button>
      </div>

      <figure className="relative">
        <img
          className="w-full md:w-[575px] md:h-[345px] rounded-lg"
          src={images.teamSectionMember}
          loading="lazy"
          alt={'Team member photo'}
        />
        <div className="w-36 h-36 lg:w-40 lg:h-40 absolute -top-6 -start-6 lg:-start-8 rounded-lg bg-[#F4DDBC] -z-10"></div>
        <div className="w-36 h-36 lg:w-40 lg:h-40 absolute top-24 md:top-56 -end-6  rounded-lg bg-[#bbd1c2] -z-10"></div>

        <figcaption className="sr-only">{'Team member photo'}</figcaption>
      </figure>
    </section>
  );
};

export default JoinTeam;
