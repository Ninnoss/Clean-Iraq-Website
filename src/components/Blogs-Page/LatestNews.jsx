import { useTranslation } from 'react-i18next';
import images from '../../data/images';
import LatestArticle from './LatestArticle';

const LatestNews = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-highlightGrey relative py-16">
      <h2 className="bg-primaryGreen/40 peach text-Heading-4 absolute top-[3%] md:top-[8%] start-[10%] md:start-[5%]">
        {t('blogs-page.latest-blogs-section.header')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 my-10 px-10 ">
        {t('blogs-page.latest-blogs-section.articles', { returnObjects: true }).map((article, index) => (
          <LatestArticle
            key={index}
            img={images.latest1}
            header={article.header}
            paragraph={article.paragraph}
          />
        ))}
      </div>
    </section>
  );
};
export default LatestNews;