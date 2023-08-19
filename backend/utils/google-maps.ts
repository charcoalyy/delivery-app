exports.addressAutoFill = async (address: string) => {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
    .then((gres) => gres.json())
    .then((gres) => gres)
}

// exports.placeIdCoords = async (placeId: string) => {
// }

exports.calculateRoute = async (
  originPlaceId: string,
  destinationPlaceId: string
) => {
  return fetch(`https://routes.googleapis.com/directions/v2:computeRoutes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': `${process.env.GOOGLE_MAPS_API_KEY}`,
      'X-Goog-FieldMask':
        'routes.distanceMeters,routes.polyline.encodedPolyline',
    },
    body: JSON.stringify({
      origin: {
        placeId: originPlaceId,
      },
      destination: {
        placeId: destinationPlaceId,
      },
      travelMode: 'DRIVE',
      routeModifiers: {
        avoidTolls: true,
        avoidHighways: false,
        avoidFerries: true,
      },
      units: 'METRIC',
    }),
  })
    .then((gres) => gres.json())
    .then((gres) => gres)
}
