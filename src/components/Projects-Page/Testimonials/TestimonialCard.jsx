/* eslint-disable react/prop-types */
const TestimonialCard = ({ img, review, name, title }) => {
  return (
    <article className="p-6 md:h-[25rem] w-8/12 md:max-w-screen-xl bg-white rounded-xl">
      <figure className="flex justify-center mb-6">
        <img
          className="w-20  h-20 rounded-full object-cover"
          src={img}
          alt={`${name}'s review of the campaign`}
          loading="lazy"
        />
        <figcaption className="sr-only">{`${name}'s review of the campaign`}</figcaption>
      </figure>

      <blockquote
        className="mt-2 text-Body-L flex flex-col text-highlightBlack"
        aria-label="Review">
        <p className="">&quot;{review}&quot;</p>
      </blockquote>

      <div className="mt-6 text-center">
        <h5 className="text-Heading-5">{name}</h5>
        <span className="text-Body-M block">{title}</span>
      </div>
    </article>
  );
};

export default TestimonialCard;
