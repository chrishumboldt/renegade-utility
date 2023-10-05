import { expect, test } from 'bun:test'
import { processor } from './processor'

const objectOne = {
  name: 'Anakin Skywalker',
  affiliation: 'Jedi',
}

test('Test that the processor works', async function () {
  const result = await processor(() => ({
    effect: [],
  }))(objectOne)

  expect(result).toBe(undefined)
})
