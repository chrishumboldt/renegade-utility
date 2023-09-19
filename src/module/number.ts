import type { NumberRandom } from '../type'

export function numberRandom({ max = 10, min = 1 }: NumberRandom): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
