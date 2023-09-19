import type { ObjectCreateFromKeyValue, ObjectUnset } from '../type'
import { isArray, isObject } from './is'
import { stringGetArrayPath } from './string'

export function objectClone(source: any): any {
  if (isArray(source)) {
    const newArray: any[] = []

    for (let item of source) {
      newArray.push(objectClone(item))
    }

    return newArray
  } else if (isObject(source)) {
    const newObject: Record<string, any> = {}

    // Iterate over the source object and merge the values onto the new object.
    for (let key in source) {
      if (source[key] == null) continue

      if (isObject(source[key])) {
        newObject[key] = objectClone(source[key])
      } else {
        newObject[key] = source[key]
      }
    }

    return newObject
  } else {
    return source
  }
}

// This function will take in a map of "flat" paths that point to a
// property on an object along with the corresponding value. We can take
// that map and now turn it into a new object.
export function objectCreateFromPath(
  input: Record<string, any>,
): Record<string, any> {
  let newObject = {}

  for (let key in input) {
    const keySplit = key.split('.').filter(item => item !== '$')
    let ref: Record<string, any> = newObject

    keySplit.forEach((property, index) => {
      if (index === keySplit.length - 1) {
        // Since we are at the end of the path, we can safely apply the
        // actual value.
        ref[property] = input[key]
      } else {
        // If the object key does not exist then create it.
        if (!ref[property]) {
          ref[property] = {}
        }
        // Pass the reference to the nesting so we can continue to generate.
        ref = ref[property]
      }
    })
  }

  return newObject
}

// Create a simple object from a passed in key and value.
export function objectCreateFromKeyValue({
  key,
  value,
}: ObjectCreateFromKeyValue) {
  if (!key) return value

  const keySplit = key.split('.').filter(item => item !== '$')
  const newObject = {}

  keySplit.reduce((obj: any, key: string, index: number) => {
    const { index: arrayIndex, prefix } = stringGetArrayPath(key)

    // Deal with array items
    if (arrayIndex !== undefined) {
      obj[prefix] = []
    }

    if (index === keySplit.length - 1) {
      if (arrayIndex !== undefined) {
        obj[prefix][arrayIndex] = value

        return obj[prefix][arrayIndex]
      }

      obj[key] = value
    } else {
      // Go deeper.
      if (arrayIndex !== undefined) {
        obj[prefix][arrayIndex] = {}

        return obj[prefix][arrayIndex]
      }

      obj[key] = {}
    }

    return obj[key]
  }, newObject)

  return newObject
}

export function objectFlatten(
  input: Record<string, any>,
  prefix = '',
): Record<string, any> {
  let newObject: Record<string, any> = {}

  for (let key in input) {
    if (isObject(input[key])) {
      newObject = Object.assign(
        newObject,
        objectFlatten(input[key], prefix ? `${prefix}.${key}` : key),
      )
    } else {
      newObject[`${prefix ? `${prefix}.${key}` : key}`] = input[key]
    }
  }

  return newObject
}

export function objectMerge<T = Record<string, any>>(
  source: Record<string, any>,
  target: Record<string, any>,
): T {
  for (let key in target) {
    if (target[key] == null) continue

    source[key] = objectReplaceValue(source[key], target[key])
  }

  return source as T
}

function objectReplaceValue(value: any, nextValue: any) {
  if (isArray(value) && isArray(nextValue)) {
    nextValue.forEach((item: any, index: number) => {
      value[index] = objectReplaceValue(value[index], item)
    })

    return value
  }

  // Merge deeper objects.
  if (isObject(value) && isObject(nextValue)) {
    return objectMerge(value, nextValue)
  }

  return nextValue
}

export function objectUnset({ key, input }: ObjectUnset) {
  if (!key) return input

  const keySplit = key.split('.')

  keySplit.reduce((obj: any, key: string, index: number) => {
    const { index: arrayIndex, prefix } = stringGetArrayPath(key)

    if (index === keySplit.length - 1) {
      if (arrayIndex !== undefined) {
        if (prefix.length > 0) {
          obj[prefix].splice(arrayIndex, 1)
        } else {
          obj.splice(arrayIndex, 1)
        }
      } else {
        delete obj[key]
      }
    } else if (arrayIndex !== undefined) {
      // Go deeper.
      if (prefix.length > 0) {
        return obj[prefix][arrayIndex]
      } else {
        return obj[arrayIndex]
      }
    }

    return obj[key]
  }, input)

  return input
}
