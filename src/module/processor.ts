import { ProcessorConfig } from '../type'
import { logOut } from './log'

export function processor(config: () => ProcessorConfig) {
  return async function <T = unknown>(input: T) {
    const {
      logOutInput = true,
      logOutPrefix = 'log',
      effect = [],
      preProcessor = [],
      postProcessor = [],
    } = config()

    if (logOutInput === true) {
      logOut({ prefix: logOutPrefix, input })
    }
  }
}
