exports.geocode = async (address: string) => {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
    .then((gres) => gres.json())
    .then((gres) => {
      if (gres.results.length < 1) {
        throw new Error('No results found for ' + address)
      }
      const best = gres.results[0]
      const fullAddress = best.formatted_address
      const location = best.geometry.location
      return { address: fullAddress, location: location }
    })
}

exports.calculateRoute = async (origin: string, destination: string) => {
  const originLocation = await exports.geocode(origin)
  const destinationLocation = await exports.geocode(destination)

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
            latitude: originLocation.location.lat,
            longitude: originLocation.location.lng,
          },
        },
      },
      destination: {
        location: {
          latLng: {
            latitude: destinationLocation.location.lat,
            longitude: destinationLocation.location.lng,
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
