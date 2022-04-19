/** @format */
// interfaces
import { INumberDescription } from './unionTypes/INumberDescription'
import { INumberPropertyName } from './unionTypes/INumberPropertyName'
/**
 * the interface for a number in a product
 * @param id a label for the number to be displayed in the UI
 * @param min the minimum value for the number
 * @param max the maximum value for the number
 * @param propertyName the name of the property that this number appears as in an IIMPProduct
 * @param value the number to be displayed or changed
 * @param prefix OPTIONAL a string that should be displayed before the value
 * @param suffix OPTIONAL a string that should be displayed after the value
 */
export interface IIMPNumber {
  id: INumberDescription
  min: number
  max: number
  propertyName: INumberPropertyName
  value: number
}
