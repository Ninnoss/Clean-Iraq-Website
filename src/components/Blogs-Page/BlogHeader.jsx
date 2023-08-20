import { useState, useEffect } from 'react';
import images from '../../data/images';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

const BlogHeader = () => {
  const { t } = useTranslation();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const backgroundImgs = [images.banner, images.teamGroupPhoto, images.cleaningRiverSide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % backgroundImgs.length);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundImgs.length]);

  const backgroundImage = {
    backgroundImage: `url(${backgroundImgs[currentImgIndex]})`,
  };
  return (
    <header
      className="relative h-[50vh] lg:h-[75vh] w-full p-0 bg-cover bg-no-repeat transition-all duration-300 hover:opacity-95"
      style={backgroundImage}>
      <div className="absolute inset-0 bg-black opacity-40 transition-opacity"></div>

      <div className="absolute top-52 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4 md:px-16 ">
        <h1 className="text-Heading-4 md:text-Heading-3 my-5 leading-10">{t('blogs-page.banner.header')}</h1>
        <p className="text-Body-M md:text-Body-L mb-5">{t('blogs-page.banner.paragraph')}</p>

        <a href="#news">
          <Button
            type="button"
            role="link"
            aria-label={t('blogs-page.banner.read-more-button')}
            className="mt-10 px-3 py-1 tracking-wider lg:py-2 text-Button-M font-medium w-40">
            {t('blogs-page.banner.read-more-button')}
          </Button>
        </a>
      </div>
    </header>
  );
};

export default BlogHeader;
