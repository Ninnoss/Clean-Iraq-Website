/* eslint-disable react/prop-types */
const LatestArticle = ({ img, header, paragraph }) => {
  return (
    <article className="flex flex-col md:flex-row items-start gap-6 max-w-sm">
      <figure className="group">
        <img
          src={img}
          alt={'blogs-page.latest-blogs-section.article.header'}
          loading="lazy"
          className="object-cover rounded-lg group-hover:scale-110 transition-all duration-300 h-36   "
        />
      </figure>
      <div className="max-w-[250px] h-28 cursor-pointer">
        <h4 className="underline-effect text-Heading-5 relative">{header}</h4>
        <p className="text-Body-S text-[#020202] pt-1">{paragraph}</p>
      </div>
    </article>
  );
};

export default LatestArticle;
