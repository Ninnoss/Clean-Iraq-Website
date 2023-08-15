import { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import images from '../../../data/images';

const CampaignsMap = () => {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const cachedEventsData = localStorage.getItem('eventsData');
  const pastEvents = JSON.parse(cachedEventsData) || [];

  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const mapStyles = {
    height: '70vh',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const defaultCenter = {
    lat: 33.312805,
    lng: 44.361488,
  };

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      onLoad={handleMapLoad}>
      <div className="md:px-4">
        {mapLoaded ? (
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={6.1}
            center={defaultCenter}>
            {pastEvents.map((event, index) => {
              return (
                <MarkerF
                  key={index}
                  position={{ lng: event['GPS Lat'], lat: event['GPS Lon'] }}
                  icon={{
                    url: images.navLogo,
                    scaledSize: new window.google.maps.Size(50, 50),
                  }}
                />
              );
            })}
          </GoogleMap>
        ) : (
          <div>Loading map...</div>
        )}
      </div>
    </LoadScript>
  );
};

export default CampaignsMap;
