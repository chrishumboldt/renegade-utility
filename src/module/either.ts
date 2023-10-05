import type { Either, Left, Right } from '../type'

type Flatten = <L, R>(input: Either<L, R>) => L | R
export const flatten: Flatten = input => input.value

export const isLeft = <L, R = never>(input: Either<L, R>): input is Left<L> => {
  return input._type === 'Left'
}

export const isRight = <R, L = never>(
  input: Either<L, R>,
): input is Right<R> => {
  return input._type === 'Right'
}

type LeftInstance = <L, R = never>(input: L) => Either<L, R>
export const left: LeftInstance = input => ({ _type: 'Left', value: input })

type Map = <A, B>(
  fn: (input: A) => B,
) => (fn: Either<string, A>) => Either<string, B>
export const map: Map = fn =>
  match(
    value => right(fn(value)),
    error => left(error),
  )

type Match = <L, R, A, B>(
  onRight: (input: R) => A,
  onLeft: (input: L) => B,
) => (input: Either<L, R>) => A | B
export const match: Match = (onRight, onLeft) => input => {
  if (isRight(input)) return onRight(input.value)

  return onLeft(input.value)
}

type RightInstance = <R, L = never>(input: R) => Either<L, R>
export const right: RightInstance = input => ({ _type: 'Right', value: input })
