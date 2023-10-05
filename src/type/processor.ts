export interface ProcessorConfig{
  effect?: ProcessorFunction[]
  logOutInput?: boolean
  logOutPrefix?: string
  postProcessor?: ProcessorFunction[]
  preProcessor?: ProcessorFunction[]
}

export type ProcessorFunction = <T>(input: T) => any
