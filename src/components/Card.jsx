// eslint-disable-next-line react/prop-types
const Card = ({ name, img, description }) => {
  return (
    <article className="w-72 sm:w-80 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:bg-[whitesmoke]">
      <figure>
        <img
          className="rounded-t-lg max-h-[200px] w-full"
          src={img}
          loading="lazy"
          alt={`Image of ${name}`}
        />
        <figcaption className="sr-only">{name}</figcaption>
      </figure>

      <div className="p-3">
        <header className="">
          <h3 className="mb-3 text-Heading-4 text-center  tracking-tight">{name}</h3>
        </header>
        <p className="mb-3 text-Body-S text-center text-[#777E90]">{description}</p>
      </div>
    </article>
  );
};

export default Card;
