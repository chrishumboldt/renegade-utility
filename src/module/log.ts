import { COLOUR_LOG } from '../data'
import type { ColourLogName, LogOutOption } from '../type'

export function logColour(prefixColour: ColourLogName, input: any) {
  return `\x1b${COLOUR_LOG.get(prefixColour)?.start}${input}\x1b${
    COLOUR_LOG.get(prefixColour)?.end
  }`
}

export function logOut({
  colour,
  input,
  prefix,
  stringify,
  wrap,
}: LogOutOption) {
  return logOutExecute(prefix, stringify, colour, wrap)(input)
}

export function logOutExecute(
  prefix = 'LOG',
  stringify = false,
  colour: ColourLogName = 'magenta',
  wrap = true,
) {
  return (value: any) => {
    const prefixFinal: string = wrap ? `[${prefix}]` : prefix

    console.log(
      logColour(colour, `${prefixFinal.toUpperCase()}:`),
      stringify ? JSON.stringify(value) : value,
    )

    return value
  }
}
