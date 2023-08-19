import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, LoadScriptProps } from "@react-google-maps/api";

interface MapCenter {
  lat: number;
  lng: number;
}

export default function Index() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center: MapCenter = useMemo(() => ({ lat: 44, lng: -80 }), []);

  const mapContainerClassName = "map-container";

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={mapContainerClassName}>
      <Marker position={center} />
    </GoogleMap>
  );
}
