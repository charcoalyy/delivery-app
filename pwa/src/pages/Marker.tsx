import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
  PolylineF, 
} from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "Qobustan",
    position: { lat: 40.0709493, lng: 49.3694411 },
  },
  {
    id: 2,
    name: "Sumqayit",
    position: { lat: 40.5788843, lng: 49.5485073 },
  },
  {
    id: 3,
    name: "Baku",
    position: { lat: 40.3947365, lng: 49.6898045 },
  }
];

function Marker() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const markerPoints = markers.map(marker => ({lat : marker.position.lat, lng: marker.position.lng})) 

  // const markerPoints = [{ lat: 40.0709493, lng: 49.3694411 }, { lat: 40.5788843, lng: 49.5485073 }, { lat: 40.3947365, lng: 49.6898045 }] 

  const coords = markerPoints

  return (
    <Fragment>
      <div className="container">
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 40.3947365, lng: 49.6898045 }}
              zoom={10}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "390px", height: "844px" }}
            >

            <Polyline
                path={markerPoints} 
                geodesic={true}
                clickability={true}
                options={{
                  strokeColor: '#62a2c4',
                  strokeOpacity: 1,
                  strokeWeight: 5
                }}
            />

              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  // icon={{
                  //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                  //   scaledSize: { width: 50, height: 50 }
                  // }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>



          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default Marker;