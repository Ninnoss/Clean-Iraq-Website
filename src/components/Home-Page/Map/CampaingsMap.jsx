import { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import images from '../../../data/images';

const CampaignsMap = () => {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const cachedEventsData = sessionStorage.getItem('previousEventsData');
  const pastEvents = JSON.parse(cachedEventsData) || [];

  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const mapStyles = {
    height: '65vh',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
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

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      onLoad={handleMapLoad}>
      <div className="md:p-4">
        {mapLoaded ? (
          <GoogleMap
            options={{
              styles: mapOptions,
            }}
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
