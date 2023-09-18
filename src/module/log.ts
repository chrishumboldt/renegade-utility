import { COLOUR_LOG } from '@data'
import type { ColourLogName } from '@type'

export function logColour(colour: ColourLogName, input: any) {
  return `\x1b${COLOUR_LOG.get(colour)?.start}${input}\x1b${
    COLOUR_LOG.get(colour)?.end
  }`
}

export function logOut(prefix = 'LOG', stringify = true) {
  return (value: any) => {
    console.log(
      logColour('magenta', `[${prefix.toUpperCase()}]:`),
      stringify ? JSON.stringify(value) : value,
    )

    return value
  }
}

