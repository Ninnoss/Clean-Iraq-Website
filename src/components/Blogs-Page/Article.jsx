/* eslint-disable react/prop-types */
import { AiOutlineShareAlt } from 'react-icons/ai';

const Article = ({ img, title, paragraph, shares, date }) => {
  return (
    //   TODO: fix the zoom effect
    <article className="w-80 h-fit group overflow-hidden">
      <figure>
        <img
          src={img}
          alt={'blogs-page.latest-blogs-section.article.header'}
          loading="lazy"
          className="object-cover rounded-lg transform group-hover:scale-110 transition duration-300 ease-in h-72"
        />
      </figure>

      <h4 className="underline-effect text-Heading-5 relative my-4">{title}</h4>
      <div className="flex justify-between ">
        <span>{date}</span>
        <div>
          <AiOutlineShareAlt className="inline mx-1" />
          {shares}
        </div>
      </div>
      <div>
        <p className="text-Body-S text-[#020202] pt-1">{paragraph}</p>
      </div>

      <button className="text-[#548C67] underline">اقرأ المزيد</button>
    </article>
  );
};

export default Article;
