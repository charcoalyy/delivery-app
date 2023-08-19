export function geocode(address: string) {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
    .then((response) => response.json())
    .then((response) => {
      const best = response.results[0]
      const fullAddress = best.formatted_address
      const location = best.geometry.location
      return { address: fullAddress, location: location }
    })
}

export function route(
  origin: { lat: string; lng: string },
  dest: { lat: string; lng: string }
) {
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
        location: {
          latLng: {
            latitude: origin.lat,
            longitude: origin.lng,
          },
        },
      },
      dest: {
        location: {
          latLng: {
            latitude: dest.lat,
            longitude: dest.lng,
          },
        },
      },
      travelMode: 'DRIVE',
      routeModifiers: {
        avoidTolls: true,
        avoidHighways: false,
        avoidFerries: true,
      },
      units: 'METRIC',
    }),
  }).then((gres) => gres)
}
