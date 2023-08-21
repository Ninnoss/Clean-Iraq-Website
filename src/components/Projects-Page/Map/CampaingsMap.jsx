/* eslint-disable react/prop-types */
import { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import images from '../../../data/images';

const CampaignsMap = ({ width, height, zoom }) => {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const cachedEventsData = sessionStorage.getItem('previousEventsData');
  const pastEvents = JSON.parse(cachedEventsData) || [];

  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const mapStyles = {
    height: height || '65vh',
    width: width || '70%',
    margin: 'auto',
  };

  const defaultCenter = {
    lat: 33.312805,
    lng: 44.361488,
  };

  const mapOptions = [
    { featureType: 'all', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { featureType: 'all', elementType: 'labels.text', stylers: [{ visibility: 'off' }] },
    { featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
  ];

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const getPrevIndex = () => (selectedEvent ? (currentPhotoIndex - 1 + selectedEvent.Photos.length) % selectedEvent.Photos.length : currentPhotoIndex);

  const getNextIndex = () => (selectedEvent ? (currentPhotoIndex + 1) % selectedEvent.Photos.length : currentPhotoIndex);

  const handleMarkerClick = (event) => {
    setSelectedEvent(event);
    setCurrentPhotoIndex(0);
  };

  const handleCloseCard = () => {
    setSelectedEvent(null);
    setCurrentPhotoIndex(0);
  };

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      onLoad={handleMapLoad}>
      <div className="relative">
        {mapLoaded ? (
          <GoogleMap
            options={{
              styles: mapOptions,
            }}
            mapContainerStyle={mapStyles}
            zoom={zoom || 6.1}
            center={defaultCenter}>
            {pastEvents.map((event, index) => (
              <MarkerF
                key={index}
                position={{ lng: event['GPS Lat'], lat: event['GPS Lon'] }}
                onClick={() => handleMarkerClick(event)}
                icon={{
                  url: images.navLogo,
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              />
            ))}
          </GoogleMap>
        ) : (
          <div>Loading map...</div>
        )}

        {selectedEvent && selectedEvent.Photos && selectedEvent.Photos.length > 0 && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 bg-white pt-3 px-10 shadow-md flex-col items-center rounded-lg">
            <div
              className="close-icon font-bold text-xl cursor-pointer absolute top-2 right-2"
              onClick={handleCloseCard}>
              <AiOutlineClose
                color="#000"
                className="hover:bg-slate-100"
                aria-label="Close"
              />
            </div>
            <div className="text-center mb-2">
              <p className="text-lg font-semibold">{selectedEvent.Province}</p>
              <p className="text-sm text-gray-500">{selectedEvent['Location Description']}</p>
            </div>
            <img
              src={selectedEvent.Photos[currentPhotoIndex].full.url}
              alt="Event"
              className="w-[300px] h-[120px]  sm:h-[250px] object-cover"
            />
            <div
              className="cursor-pointer absolute top-[55%] -right-1 font-bold text-xl transform -translate-y-1/2 mx-2"
              onClick={() => setCurrentPhotoIndex(getPrevIndex())}>
              <FaAngleRight
                size={25}
                className="hover:text-primaryGreen"
                aria-label="Previous Photo"
              />
            </div>
            <div
              className="cursor-pointer absolute top-[55%] -left-1 font-bold text-xl transform -translate-y-1/2 mx-2"
              onClick={() => setCurrentPhotoIndex(getNextIndex())}>
              <FaAngleLeft
                size={25}
                className="hover:text-primaryGreen"
                aria-label="Next Photo"
              />
            </div>
          </div>
        )}
      </div>
    </LoadScript>
  );
};

export default CampaignsMap;

// import { useState } from 'react';
// import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
// import images from '../../../data/images';

// const CampaignsMap = () => {
//   const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
//   const cachedEventsData = sessionStorage.getItem('previousEventsData');
//   const pastEvents = JSON.parse(cachedEventsData) || [];

//   const [mapLoaded, setMapLoaded] = useState(false);

//   const handleMapLoad = () => {
//     setMapLoaded(true);
//   };

//   const mapStyles = {
//     height: '65vh',
//     width: '70%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   };

//   const defaultCenter = {
//     lat: 33.312805,
//     lng: 44.361488,
//   };

//   const mapOptions = [
//     { featureType: 'all', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
//     { featureType: 'all', elementType: 'labels.text', stylers: [{ visibility: 'off' }] },
//     { featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
//   ];

//   return (
//     <LoadScript
//       googleMapsApiKey={apiKey}
//       onLoad={handleMapLoad}>
//       <div className="md:p-4">
//         {mapLoaded ? (
//           <GoogleMap
//             options={{
//               styles: mapOptions,
//             }}
//             mapContainerStyle={mapStyles}
//             zoom={6.1}
//             center={defaultCenter}>
//             {pastEvents.map((event, index) => {
//               return (
//                 <MarkerF
//                   key={index}
//                   position={{ lng: event['GPS Lat'], lat: event['GPS Lon'] }}
//                   icon={{
//                     url: images.navLogo,
//                     scaledSize: new window.google.maps.Size(50, 50),
//                   }}
//                 />
//               );
//             })}
//           </GoogleMap>
//         ) : (
//           <div>Loading map...</div>
//         )}
//       </div>
//     </LoadScript>
//   );
// };

// export default CampaignsMap;
