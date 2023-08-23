import { useTranslation } from 'react-i18next';
import LatestArticle from './LatestArticle';
import { latestArticles } from '../../data/blogImages';

const LatestNews = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-highlightGrey relative pt-16 pb-8">
      
      {/* Square designs */}
      <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 xl:h-32 absolute top-[1rem]  end-0 md:top-[36rem] lg:top-[20rem]  rounded-lg bg-[#bbd1c2]"></div>
      <div className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 absolute top-[3rem]  end-4 md:end-7  md:top-[39rem] lg:top-[24rem] xl:end-10 rounded-lg bg-[#F4DDBC]"></div>

      <h2 className="bg-primaryGreen/40 scratch-effect text-Heading-4 absolute top-[3%] md:top-[8%] start-[10%] md:start-[8%]">
        {t('blogs-page.latest-blogs-section.header')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-14 my-10 px-10 md:px-32 ">
        {t('blogs-page.latest-blogs-section.articles', { returnObjects: true }).map((article, index) => (
          <LatestArticle
            key={index}
            img={latestArticles[index]}
            header={article.header}
            paragraph={article.paragraph}
          />
        ))}
      </div>
    </section>
  );
};
export default LatestNews;
