import { expect, test } from 'bun:test'
import { pipe } from '..'
import type { Either } from '../type'
import { flatten, isLeft, isRight, left, map, match, right } from './either'

function addOne(input: number): number {
  return input + 1
}

const addOneMap = map(addOne)

function divideNumbers(num: number) {
  return function (divider: number): Either<string, number> {
    if (divider === 0) {
      return left('Cannot divide numbers by 0')
    }

    return right(num / divider)
  }
}

function toString(input: number | string): string {
  if (typeof input === 'string') return input
  return `${input}`
}

function validateNotZero(
  input: Either<string, number>,
): Either<string, number> {
  if (isRight(input) && input.value === 0) {
    return left('The number cannot be 0.')
  }

  return input
}

test('Test that a function returns the right value.', () => {
  const result = divideNumbers(10)(5)

  expect(isRight(result)).toBe(true)
  expect(isLeft(result)).toBe(false)
  expect(flatten(result)).toBe(2)
})

test('Test that a function returns the left error value.', () => {
  const result = divideNumbers(10)(0)

  expect(isRight(result)).toBe(false)
  expect(isLeft(result)).toBe(true)
  expect(flatten(result)).toBe('Cannot divide numbers by 0')
})

test('Test that a match works.', () => {
  const leftValue = left('Dath Vader')
  const rightValue = right('Darth Vader')

  const matcher = match(
    value => value,
    value => `Sorry ${value} not right`,
  )

  expect(matcher(leftValue)).toBe('Sorry Dath Vader not right')
  expect(matcher(rightValue)).toBe('Darth Vader')
})

test('Test that an either can be used in a pipe.', () => {
  const testPipe = (input: number) => {
    return pipe(right(input), addOneMap, validateNotZero, flatten)
  }

  expect(testPipe(5)).toBe(6)
  expect(testPipe(-1)).toBe('The number cannot be 0.')
  expect(testPipe(0)).toBe(1)
})

test('Test that the map functor works.', () => {
  const testPipe = (input: number) => {
    return pipe(
      right(input),
      map(addOne),
      validateNotZero,
      map(toString),
      flatten,
    )
  }

  expect(testPipe(5)).toBe('6')
  expect(testPipe(10)).toBe('11')
  expect(testPipe(-1)).toBe('The number cannot be 0.')
})
