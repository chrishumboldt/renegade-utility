import type { None, Option, Some } from '../type'

export const isNone = <T>(input: Option<T>): input is None => {
  return input._type === 'None'
}

export const isSome = <T>(input: Option<T>): input is Some<T> => {
  return input._type === 'Some'
}

export const none: None = { _type: 'None' }

export const option = <T>(input: T): Option<T> => (input ? some(input) : none)

export const some = <T>(input: T): Some<T> => ({ _type: 'Some', value: input })
