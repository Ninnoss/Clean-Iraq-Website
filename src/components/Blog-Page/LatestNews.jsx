import { useTranslation } from 'react-i18next';
import images from '../../data/images';

export default function LatestNews() {
  const { t } = useTranslation();

  return (
    <article className="bg-highlightGrey relative flex">
      <h2 className="lightgreen text-Heading-5 absolute top-[8%] start-[3%]">{t('blogs-page.latest-blogs-section.header')}</h2>
      <section className="flex flex-col md:flex-row md:flex-wrap items-center w-full ms-[5%]">
        {t('blogs-page.latest-blogs-section.article', { returnObjects: true }).map((article, index) => (
          <figure
            key={index}
            className="flex justify-center items-center gap-3">
            <div className="parent overflow-hidden rounded-lg">
              <img
                src={images.latest1}
                alt={t('blogs-page.latest-blogs-section.article.header')}
                loading="lazy"
                className="child h-full w-full object-cover"
              />
            </div>
            <figcaption className="w-[300px]">
              <div className="flex flex-col gap-1 flex-wrap w-[65%] pt-2">
                <h4 className="effect relative font-bold text-[16px]">{article.header}</h4>
                <p className="text-sm text-[#020202] pt-1">{article.paragraph}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
    </article>
  );
}
