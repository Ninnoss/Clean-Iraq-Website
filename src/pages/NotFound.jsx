import Button from '../components/Button';
import images from '../data/images';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col py-8 px-6 sm:py-36 sm:px-32 sm:flex-row gap-32 items-center relative overflow-hidden">
      <div className="absolute right-[-20px] bottom-[-310px] z-[-999]">
        <img
          src={images.lines}
          className="w-[1865px]"
        />
      </div>

      <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 xl:h-32 absolute top-0 end-0 xl:top-12 rounded-lg  bg-[#bbd1c2] -z-10"></div>
      <div className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 absolute top-8 end-4 md:end-7  xl:top-28 xl:end-10 rounded-lg bg-[#F4DDBC] -z-10"></div>

      <div>
        <h2 className="text-Heading-2 text-[#1A2E35]">{t('not-found-page.heading')}</h2>
        <p className="text-[#1A2E35] text-3xl font-medium">{t('not-found-page.subheading')}</p>
        <p className="text-Body-L text-[#1A2E35DE] mt-[23px] mb-[73px]">{t('not-found-page.message')}</p>

        <Link to={`/`}>
          <Button
            onClick={scrollToTop}
            type="button"
            role="link"
            aria-label={''}
            className="my-5 tracking-wider text-Button-M block mx-auto font-medium">
            {t('not-found-page.back-to-home-button')}
          </Button>
        </Link>
      </div>

      <div>
        <figure>
          <img
            src={images.error}
            loading="lazy"
            alt="image of Page not Found 404"
          />
          <figcaption className="sr-only">Page not Found 404</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default NotFound;
