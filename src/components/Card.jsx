import images from '../data/images';

const Card = ({ name, img, description, date, place }) => {
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
  
        <div className="px-6">
          <header className="">
            <h3 className="mb-3 text-Heading-4 text-center  tracking-tight">{name}</h3>
          </header>
          <p className="mb-3 text-Body-S text-center text-[#777E90]">{description}</p>
        </div>

        <div className="flex justify-between p-8">
          <div className="text-Body-M text-highlightBlack">{date}</div>
          <div className="flex justify-end text-Body-M text-primaryGreen "><img src={images.pin}/>{place}</div>
        </div>
      </article>
    );
  };
  
  export default Card;