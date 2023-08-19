exports.addressAutoFill = async (address: string) => {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
    .then((gres) => gres.json())
    .then((gres) => gres)
}

// exports.placeIdCoords = async (placeId: string) => {
// }
