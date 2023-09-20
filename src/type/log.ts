import { ColourLogName } from "./colour"

export interface LogOutOption {
  colour?: ColourLogName
  input: any
  prefix?: string
  stringify?: boolean
  wrap?: boolean
}
