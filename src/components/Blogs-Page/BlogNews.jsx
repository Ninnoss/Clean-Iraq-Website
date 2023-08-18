import { useTranslation } from 'react-i18next';
import Article from './Article';
import { blogData } from '../../data/blogData';
import images from '../../data/images';

const BlogNews = () => {
  const { t } = useTranslation();
  console.log(t('blogs-page.blogs-section.articles', { returnObjects: true }));
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 my-10 px-10 ">
        {t('blogs-page.blogs-section.articles', { returnObjects: true }).map((article, index) => (
          <Article
            key={index}
            img={images.cardPlaceHolder}
            title={article.title}
            paragraph={article.paragraph}
            shares={article.shares}
            date={article.dateShared}
          />
        ))}
        {/* {blogData.map((blog, index) => (
          <MostImportent
            key={index}
            image={blog.image}
            title={blog.title}
            content={blog.content}
          />
        ))} */}
      </div>
    </section>
  );
};

export default BlogNews;
