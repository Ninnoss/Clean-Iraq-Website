/* eslint-disable react/prop-types */
import { TfiStatsUp } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
import { PiUsersThree } from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import CountUp from "react-countup";

const Stat = ({ title, number, logo }) => {
  // Create a mapping between logo names and corresponding icon components
  const logoComponents = {
    campaigns: TfiStatsUp,
    cities: TfiLocationPin,
    volunteers: PiUsersThree,
    trashBags: FiTrash2,
  };

  // Select the appropriate icon component based on the logo property
  const LogoComponent = logoComponents[logo];

  return (
    <article>
      <div className="flex flex-col justify-center items-center px-24 py-5 border-2 border-[#eceef1] rounded-3xl space-y-4">
        <LogoComponent size={48} color="#C1C7CD" />
        <CountUp
          end={number} // Number to count to
          duration={2.5} // Duration of the animation in seconds
          separator="," // Thousands separator
        >
          {({ countUpRef }) => (
            <span ref={countUpRef} className="text-3xl font-semibold" />
          )}
        </CountUp>
        <p className="text-Body-L">{title}</p>
      </div>
    </article>
  );
};

export default Stat;
