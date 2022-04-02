/** @format */
import { INumberDescription } from './unionTypes/INumberDescription'
export interface IIMPNumber {
  parentUpc: number
  id: INumberDescription
  prefix: string
  currentValue: number
  minValue: number
  maxValue: number
  suffix: string
}
