import { describe, expect, test } from 'bun:test'
import { objectFlatten } from './object'

describe('Object Module Tests', () => {
  test('Test that a simple object can be flattened.', () => {
    const input = {
      name: 'Darth Vader',
      attributes: {
        lightsaber: 'red',
      },
    }
    const output = {
      name: 'Darth Vader',
      'attributes.lightsaber': 'red',
    }

    expect(objectFlatten(input)).toStrictEqual(output)
  })

  test('Test that a nested object can be flattened.', () => {
    const input = {
      name: 'Darth Vader',
      attributes: {
        lightsaber: 'red',
        likes: {
          recreation: 'Force choke',
          spareTime: {
            sleeping: 'never',
          },
        },
      },
    }
    const output = {
      name: 'Darth Vader',
      'attributes.lightsaber': 'red',
      'attributes.likes.recreation': 'Force choke',
      'attributes.likes.spareTime.sleeping': 'never',
    }

    expect(objectFlatten(input)).toStrictEqual(output)
  })

  test('Test that an array within an object can be flattened.', () => {
    const input = {
      name: 'Darth Vader',
      otherNames: ['Anakin Skywalker', 'Padawan Skywalker'],
    }
    const output = {
      name: 'Darth Vader',
      'otherNames.0': 'Anakin Skywalker',
      'otherNames.1': 'Padawan Skywalker',
    }

    expect(objectFlatten(input)).toStrictEqual(output)
  })

  test('Test that a complex array within an object can be flattened.', () => {
    const input = {
      name: 'Darth Vader',
      identities: [
        { name: 'Anakin Skywalker', age: 9 },
        { name: 'Padawan Skywalker', age: 17 },
      ],
    }
    const output = {
      name: 'Darth Vader',
      'identities.0.age': 9,
      'identities.0.name': 'Anakin Skywalker',
      'identities.1.age': 17,
      'identities.1.name': 'Padawan Skywalker',
    }

    expect(objectFlatten(input)).toStrictEqual(output)
  })
})
