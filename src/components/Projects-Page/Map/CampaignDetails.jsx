/* eslint-disable react/prop-types */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CampaignDetails = ({ selectedEvent, currentPhotoIndex, setCurrentPhotoIndex }) => {
  const handleNextPhoto = () => {
    if (selectedEvent.Photos && selectedEvent.Photos.length > 1) {
      setCurrentPhotoIndex((currentPhotoIndex + 1) % selectedEvent.Photos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedEvent.Photos && selectedEvent.Photos.length > 1) {
      setCurrentPhotoIndex((currentPhotoIndex - 1 + selectedEvent.Photos.length) % selectedEvent.Photos.length);
    }
  };

  return (
    <div className="flex-col items-center justify-center rounded-lg pr-8 pb-4">
      <div className="text-center mb-2">
        <p className="text-lg font-semibold">{selectedEvent.Province}</p>
        <p className="text-sm text-gray-500">{selectedEvent['Location Description']}</p>
      </div>
      {selectedEvent.Photos ? (
        <div>
          <img
            src={selectedEvent.Photos[currentPhotoIndex].full.url}
            alt="Event"
            className="w-[300px] h-[120px]  sm:h-[250px] object-cover rounded-sm"
          />
          <div
            className="cursor-pointer absolute top-[55%] -right-1 font-bold text-xl transform -translate-y-1/2 mx-2"
            onClick={handleNextPhoto}>
            <FaAngleRight
              size={25}
              className="hover:text-primaryGreen"
              aria-label="Previous Photo"
            />
          </div>
          <div
            className="cursor-pointer absolute top-[55%] -left-1 font-bold text-xl transform -translate-y-1/2 mx-2"
            onClick={handlePrevPhoto}>
            <FaAngleLeft
              size={25}
              className="hover:text-primaryGreen"
              aria-label="Next Photo"
            />
          </div>
        </div>
      ) : (
        <p>Campaign photos not available</p>
      )}
    </div>
  );
};

export default CampaignDetails;
