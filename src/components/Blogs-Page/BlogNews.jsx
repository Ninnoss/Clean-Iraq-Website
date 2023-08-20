import { useTranslation } from 'react-i18next';
import Article from './Article';
import { blogImages } from '../../data/blogImages';

const BlogNews = () => {
  const { t } = useTranslation();

  const translatedBlogs = blogImages.map((blog, index) => {
    return {
      ...blog,
      title: t(`blogs-page.blogs-section.articles.${index}.title`),
      paragraph: t(`blogs-page.blogs-section.articles.${index}.paragraph`),
      dateShared: t(`blogs-page.blogs-section.articles.${index}.dateShared`),
      shares: t(`blogs-page.blogs-section.articles.${index}.shares`),
    };
  });

  return (
    <section
      id="news"
      className="pt-16 pb-16 md:pb-28 md:px-24 lg:px-40  relative">
      <div className="flex flex-col items-center xl:items-start px-10 md:px-14 py-6">
        <h2 className="text-Heading-2 mb-4 text-center lg:text-start">{t(`blogs-page.blogs-section.header`)}</h2>
        <p className="text-Body-L md:w-3/4 lg:w-1/2 text-center md:text-start">{t(`blogs-page.blogs-section.paragraph`)}</p>
      </div>
      <span className="text-Heading-5 text-[#777E90] absolute end-[8%] top-28 hidden lg:block"> {t('blogs-page.blogs-section.our-blogs')}</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 sm:gap-20 lg:gap-12 my-10">
        {translatedBlogs.map((article, index) => (
          <Article
            key={index}
            img={article.img}
            title={article.title}
            paragraph={article.paragraph}
            shares={article.shares}
            date={article.dateShared}
          />
        ))}
      </div>
      {/* Square designs */}
      <div className="w-12 md:w-16 xl:w-20 h-16 md:h-24 absolute bottom-[1rem] start-[2rem] rounded-lg bg-[#bbd1c2]"></div>
      <div className="w-12 md:w-16 h-12 md:h-16 absolute bottom-0 start-0 rounded-lg bg-[#F4DDBC]"></div>
    </section>
  );
};

export default BlogNews;
