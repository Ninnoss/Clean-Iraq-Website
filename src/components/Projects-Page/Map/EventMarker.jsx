/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MarkerF, InfoWindow } from '@react-google-maps/api';
import CampaignDetails from './CampaignDetails';
import images from '../../../data/images';

const EventMarker = ({ event }) => {
  const [selected, setSelected] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleMarkerClick = () => {
    setSelected(true);
    setCurrentPhotoIndex(0);
  };

  const handleClose = () => {
    setSelected(false);
    setCurrentPhotoIndex(0);
  };

  return (
    <>
      <MarkerF
        position={{ lng: event['GPS Lat'], lat: event['GPS Lon'] }}
        onClick={handleMarkerClick}
        icon={{
          url: images.navLogo,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />
      {selected && (
        <InfoWindow
          position={{ lng: event['GPS Lat'], lat: event['GPS Lon'] }}
          onCloseClick={handleClose}>
          <CampaignDetails
            selectedEvent={event}
            currentPhotoIndex={currentPhotoIndex}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
          />
        </InfoWindow>
      )}
    </>
  );
};

export default EventMarker;
