/* eslint-disable react/prop-types */
import { HiOutlineLocationMarker } from 'react-icons/hi';

const CampaignDetails = ({ img, name, description, place, date }) => {
  return (
    <section className="py-16 px-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-28">
      <figure className="relative">
        <img
          className="min-w-[200px] max-w-[300px] rounded-2xl border border-[#DDE1E6]"
          src={img}
        />
        <div className="w-36 h-36 lg:w-44 lg:h-44 absolute start-48 top-44 lg:start-40 lg:top-36 rounded-lg bg-[#bbd1c2] -z-10"></div>
        <div className="w-36 h-36 lg:w-40 lg:h-40 absolute -top-7 end-44 rounded-lg bg-[#F4DDBC] -z-10"></div>
        <figcaption className="sr-only">{name}</figcaption>
      </figure>

      <div className="text-start max-w-[600px] pt-6 sm:pt-8">
        <h2 className="text-Heading-4 pb-5">{name}</h2>
        <p className="text-Body-M text-highlightBlack">{description}</p>

        <div className="text-Heading-6 flex justify-between pt-10">
          <h6 className="text-primaryGreen flex items-center gap-3 text-Subtitile-M">
            <HiOutlineLocationMarker color="#548C67" />
            <strong> {place}</strong>
          </h6>
          <h6 className="text-highlightBlack text-Subtitile-M">
            <strong>{date}</strong>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default CampaignDetails;
