/* eslint-disable react/prop-types */
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import EventMarker from './EventMarker';

const CampaignsMap = ({ width, height, zoom }) => {

  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const cachedEventsData = sessionStorage.getItem('previousEventsData');
  const pastEvents = JSON.parse(cachedEventsData) || [];
  const [mapLoaded, setMapLoaded] = useState(false);

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
              <EventMarker
                key={index}
                event={event}
              />
            ))}
          </GoogleMap>
        ) : (
          <div>Loading map...</div>
        )}
      </div>
    </LoadScript>
  );
};

export default CampaignsMap;
