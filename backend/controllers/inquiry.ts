const { route, geocode } = require('../utils/google-maps')

export function calculateFee(distance: number) {
  return Math.round((distance / 3000 + 2) * 100) / 100
}

export function createQuote(origin: any, dest: any) {
  origin = geocode(origin).then((res: any) => res)
  dest = geocode(dest).then((res: any) => res)
  console.log(origin)

  route(origin.location, dest.location).then((res: any) => {
    res.fee = calculateFee(res.distanceMeters)
    console.log(res)
  })
}
