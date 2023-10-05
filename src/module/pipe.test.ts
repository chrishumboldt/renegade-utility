import { expect, test } from 'bun:test'
import { pipe } from './pipe'

type AddOne = (input: number) => number
type Double = (input: number) => number
type ToString = (input: any) => string

const addOne: AddOne = (input) => {
  return input + 1
}

const double: Double = (input) => {
  return input * 2
}

const toString: ToString = (input) => {
  return typeof input === 'string' ? input : String(input)
}

test('That a simple pipe works', () => {
  const result = pipe(5, addOne, double)

  expect(result).toBe(12)
})

test('That a pipe transforms a number into a string.', () => {
  const result = pipe(5, addOne, toString)

  expect(typeof result).toBe('string')
  expect(result).toBe('6')
})
