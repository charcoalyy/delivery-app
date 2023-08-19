import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCzg1MFFfx7ieuTJKYnTSGe65x4ft33CFw'; 

const Map: React.FC = () => {
  const [route, setRoute] = useState<{ origin: string; destination: string; bounds: any } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/route');
        setRoute(response.data.route);
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (route) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();

      const mapOptions = {
        center: route.bounds.getCenter(),
        zoom: 10,
      };

      const map = new window.google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
      directionsRenderer.setMap(map);

      const request = {
        origin: route.origin,
        destination: route.destination,
        travelMode: 'DRIVING',
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
        } else {
          console.error('Error displaying route:', status);
        }
      });
    }
  }, [route]);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default Map;
