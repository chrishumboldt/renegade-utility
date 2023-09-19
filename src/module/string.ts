import { CHARACTER } from '../data'
import type { StringGetArrayPath, StringRandomOptions } from '../type'
import { numberRandom } from './number'

export function stringCamelCaseToDashCase(input: string) {
  return input
    .replace(/([A-Z])/g, ' $1')
    .split(' ')
    .join('-')
    .toLowerCase()
}

export function stringDashCaseToCamelCase(input: string) {
  return input.replace(/(\-[a-z])/g, val => val.toUpperCase().replace('-', ''))
}

export function stringGetIndexFromArrayPath(input: string): number | undefined {
  const inputSplit = input.split('[')

  if (inputSplit[1] !== undefined) {
    const theIndex = parseInt(inputSplit[1].substring(0, inputSplit.length - 1))

    return isNaN(theIndex) ? undefined : theIndex
  }

  return undefined
}

export function stringGetPrefixFromArrayPath(input: string): string {
  return input.split('[')[0]
}

export function stringGetArrayPath(string: string): StringGetArrayPath {
  return {
    index: stringGetIndexFromArrayPath(string),
    prefix: stringGetPrefixFromArrayPath(string),
  }
}

export function stringRandom(input: StringRandomOptions = {}): string {
  const { length = 10, textOnly = false } = input
  const characters = textOnly
    ? CHARACTER.ALPHABET
    : `${CHARACTER.ALPHABET}${CHARACTER.NUMBER}`
  let returnString = ''

  // Append to the return string a character randomly selected from the
  // character list.
  for (let i = 0; i < length; i++) {
    returnString += characters[numberRandom({ max: characters.length - 1 })]
  }

  return returnString
}

export function stringRemoveFirstLast(input: string): string {
  if (input.length < 3) return ''

  return input.substring(1, input.length - 1)
}
