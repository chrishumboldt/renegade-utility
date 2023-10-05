export type Either<L, R> = Left<L> | Right<R>

export type Left<T> = {
  readonly _type: 'Left'
  readonly value: T
}

export type Right<T> = {
  readonly _type: 'Right'
  readonly value: T
}
