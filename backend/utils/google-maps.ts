export function geocode(address: string) {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => {
      const best = res.results[0]
      return {
        address: best.formatted_address,
        location: best.geometry.location,
      }
    })
}

export function route(origin: any, dest: any) {
  return fetch(`https://routes.googleapis.com/directions/v2:computeRoutes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': `${process.env.GOOGLE_MAPS_API_KEY}`,
      'X-Goog-FieldMask':
        'routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline',
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
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return res
    })
}
