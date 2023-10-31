/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { AiOutlineShareAlt } from 'react-icons/ai';

const Article = ({ img, title, paragraph, shares, date }) => {
  const { t } = useTranslation();

  return (
    <article className="max-w-[18rem] h-fit overflow-hidden ">
      <figure className="group">
        <img
          src={img}
          alt={'blogs-page.latest-blogs-section.article.header'}
          loading="lazy"
          className="object-cover rounded-lg group-hover:scale-110 transition-all duration-[350ms] ease-in h-72"
        />
      </figure>
      <h4 className="underline-effect text-Heading-5 relative my-4 cursor-pointer">{title}</h4>

      <div className="flex justify-between">
        <span>{date}</span>
        <div>
          <AiOutlineShareAlt className="inline mx-1" />
          {shares}
        </div>
      </div>

      <p className="text-Body-S text-[#020202] pt-1">{paragraph}</p>

      <button className="text-[#548C67] underline">{t('blogs-page.blog-stats.read-more-button')}</button>
    </article>
  );
};

export default Article;
