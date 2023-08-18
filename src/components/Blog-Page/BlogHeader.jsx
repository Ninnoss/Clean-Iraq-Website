import images from '../../data/images';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

export default function BlogHeader() {
  const { t } = useTranslation();

  return (
    <>
      <header className="banner">
        <figure className="banner-img relative overflow-hidden">
          <img
            src={images.banner}
            alt={t('blogs-page.banner.header')}
            className="max-w-full h-auto"
          />
          <figcaption className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[56.25rem]">
            <h1 className="text-Heading-3 my-5 mx-0">{t('blogs-page.banner.header')}</h1>
            <p className="text-[1.2rem] mb-5">{t('blogs-page.banner.paragraph')}</p>
            <Button
              type="button"
              role="link"
              aria-label={t('blogs-page.banner.see-more-button')}
              className="mt-10 px-3 py-1 tracking-wider lg:py-2 text-Button-M font-medium w-40">
              {t('blogs-page.banner.see-more-button')}
            </Button>
          </figcaption>
        </figure>
      </header>
      <aside className=" bg-white h-[6.125rem] relative">
        <ul className="flex gap-10 absolute top-[35%] right-[5%]">
          <li className="flex justify-between order-3">
            <div className=" flex gap-2 justify-center items-center">
              <img
                src={images.facebookLogo}
                alt="facebook logo"
                className=" order-1"
              />
              <span className=" text-xs">3.7 M</span>
            </div>
          </li>
          <li className="flex justify-between order-2">
            <div className=" flex gap-2 justify-center items-center">
              <img
                src={images.instagramLogo}
                alt="facebook logo"
                className=" order-1"
              />
              <span className=" text-xs">2.4 M</span>
            </div>
          </li>
          <li className="flex justify-between order-1">
            <div className=" flex gap-2 justify-center items-center">
              <img
                src={images.youtubeLogo}
                alt="facebook logo"
                className=" order-1"
              />
              <span className=" text-xs">2.4 M</span>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
}
