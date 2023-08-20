import { Fragment, useState } from 'react'
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
  PolylineF,
} from '@react-google-maps/api'


const points = [
  {
    id: 1,
    name: '65 Dundas St W',
    position: { lat: 43.65602993174411, lng:  -79.38270327796809 }, // 43.65602993174411, -79.38270327796809
  },
  {
    id: 2,
    name: 'George Vari Engineering and Computing Center',
    position: { lat: 43.657773517760866, lng: -79.37715977549773 }, // 43.657773517760866, -79.37715977549773
  }
  /* 
  {
    id: 3,
    name: 'Baku',
    position: { lat: 40.3947365, lng: 49.6898045 },
  },
  */ 
]


const markers = [
  [
    43.65593,
    -79.38279
  ],
  [
    43.65644,
    -79.38033
  ],
  [
    43.65641,
    -79.38012
  ],
  [
    43.65614,
    -79.37889
  ],
  [
    43.65619,
    -79.37858
  ],
  [
    43.6565,
    -79.37713
  ],
  [
    43.65764,
    -79.3776
  ]
]

const Marker = ({ data }: { data: any }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  })

  const [activeMarker, setActiveMarker] = useState(null)

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  const markerPoints = markers.map((marker) => ({
    lat: marker[0],
    lng: marker[1],
  }))

  // const markerPoints = [{ lat: 40.0709493, lng: 49.3694411 }, { lat: 40.5788843, lng: 49.5485073 }, { lat: 40.3947365, lng: 49.6898045 }]

  // const coords = markerPoints

  return (
    <Fragment>
      <div
        className="container"
        style={{ zIndex: -1, position: 'absolute', top: '0px' }}
      >
        <div style={{ height: '90vh', width: '100%' }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 43.65602993174411, lng:  -79.38270327796809 }}
              zoom={15}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: '390px', height: '844px' }}
              options={{mapId: "79f2502ef237e370" }} 
            >
              <PolylineF
                path={markerPoints}
                options={{
                  strokeColor: '#323FE8',
                  strokeOpacity: 1,
                  strokeWeight: 5,
                }}
              />

              {points.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon={{url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}}
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
  )
}

export default Marker
