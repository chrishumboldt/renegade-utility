export function isArray(check: any): boolean {
  return isObject(check) && check instanceof Array
}

export function isFunction(check: any): boolean {
  return typeof check === 'function'
}

export function isObject(check: any): boolean {
  return typeof check === 'object'
}

export function isString(check: any): boolean {
  return typeof check === 'string'
}

