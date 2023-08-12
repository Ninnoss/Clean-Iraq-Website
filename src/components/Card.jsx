/* eslint-disable react/prop-types */
import { TfiLocationPin } from 'react-icons/tfi';
import Button from './Button';

const Card = ({ name, img, description, date, place }) => {
  return (
    <article className="relative w-72 sm:w-80 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:bg-[whitesmoke]">
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
          <h3 className="my-4 text-Heading-4 text-center tracking-tight">{name}</h3>
        </header>
        <p className="mb-3 text-Body-S text-center h-28 md:h-20 text-[#777E90]">{description}</p>
      </div>

      {date && place && (
        <>
          <div className="flex justify-between items-center mt-8 p-5 date-place">
            <span className="text-Body-M block text-highlightBlack">{date}</span>
            <div className="flex items-center gap-3">
              <TfiLocationPin color="#548C67" /> {place}
            </div>
          </div>
          <Button
            type="button"
            role="link"
            aria-label="Join us"
            className="my-5 tracking-wider text-Button-M block mx-auto font-medium">
            شارك بالحملة
          </Button>
        </>
      )}
    </article>
  );
};

export default Card;
