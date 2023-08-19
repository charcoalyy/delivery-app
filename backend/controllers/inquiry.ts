const { route, geocode } = require('../utils/google-maps')

export function calculateFee(distance: number) {
  return Math.round((distance / 3000 + 2) * 100) / 100
}

export function createQuote(origin: any, dest: any) {
  const origin_ = geocode(origin).then((res: any) => res)
  const dest_ = geocode(dest).then((res: any) => res)
  console.log(origin_)

  route(origin_.location, dest_.location).then((res: any) => {
    res.fee = calculateFee(res.distanceMeters)
    console.log(res)
  })
}
