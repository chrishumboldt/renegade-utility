export interface ObjectCreateFromKeyValue {
  key: string
  value: any
}

export interface ObjectScrape {
  func: (input: ObjectScrapeFunction) => void,
  obj: Record<string, any>
}

export interface ObjectScrapeFunction {
  key: string,
  value: any
}

export interface ObjectUnset {
  key: string
  input: object
}
