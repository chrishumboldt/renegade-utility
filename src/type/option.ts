export type None = {
  readonly _type: 'None'
}

export type Option<T> = Some<T> | None

export type Some<T> = {
  readonly _type: 'Some'
  readonly value: T
}
