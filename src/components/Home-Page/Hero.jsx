import images from '../../data/images';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-12 md:pt-36 pb-24  px-8">
      <div className="flex flex-col-reverse md:flex-row gap-28 md:gap-14 justify-around items-center">
        <div>
          <figure className="relative">
            <img
              className="h-[350px] sm:h-[400px] md:h-[450px] w-[450px] rounded-lg z-10"
              src={images.girlWithTrashCan}
              alt="A girl picking up trash"
            />
            <div className="w-36 h-36 lg:w-44 lg:h-44 absolute -top-10 -start-4 lg:-top-20 lg:-start-8 rounded-lg bg-[#bbd1c2] -z-10"></div>
            <div className="w-36 h-36 absolute -top-5 start-10 lg:-top-10 lg:start-20  rounded-lg bg-[#F4DDBC] -z-10"></div>
            <figcaption className="sr-only">A girl picking up trash</figcaption>
          </figure>
        </div>

        <div>
          <span className="text-Heading-6 md:text-Heading-5 block ">{t('home-page.hero-section.small-header')}</span>
          <h1 className="text-Heading-3 md:text-Heading-1 mb-4">{t('home-page.hero-section.header')}</h1>
          <span className="text-Heading-5 md:text-Heading-4 font-normal">{t('home-page.hero-section.secondary-heading')}</span>
          <p className="text-Body-S md:text-Body-L max-w-lg mt-8 text-highlightBlack  ">{t('home-page.hero-section.paragraph')}</p>

          <Link to={`/campaigns`}>
            <Button
              onClick={scrollToTop}
              type="button"
              role="link"
              aria-label="Join us"
              className="mt-10 px-3 py-1 tracking-wider lg:py-2 text-Button-M font-medium">
              {t('home-page.hero-section.join-us-button')}{' '}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
