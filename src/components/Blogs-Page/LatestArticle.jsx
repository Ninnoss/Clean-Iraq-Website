/* eslint-disable react/prop-types */
const LatestArticle = ({ img, header, paragraph }) => {
  return (
    <article className="flex flex-col md:flex-row items-start gap-6 max-w-sm overflow-hidden">
      <figure className="group">
        <img
          src={img}
          alt={'blogs-page.latest-blogs-section.article.header'}
          loading="lazy"
          className="object-cover rounded-lg group-hover:scale-110 transition-all ease-in duration-[350ms] h-36 w-60"
        />
      </figure>
      <div className="max-w-[250px]  h-40  cursor-pointer">
        <h4 className="underline-effect text-Heading-5 relative">{header}</h4>
        <p className="text-Body-S text-[#020202] pt-1 line-clamp-2">{paragraph}</p>
      </div>
    </article>
  );
};

export default LatestArticle;
