import D from 'debug'

export function Debug (name) {
  return D(`wishquest:${name}`)
}
