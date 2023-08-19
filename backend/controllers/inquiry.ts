const { route, geocode } = require('../utils/google-maps')

export function calculateFee(distance: number) {
  return Math.round((distance / 3000 + 2) * 100) / 100
}

export function createQuote(origin: string, dest: string) {
  origin = geocode(origin)
  dest = geocode(dest)
}
