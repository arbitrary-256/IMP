/** @format */
/* interfaces */
import { IIMPProduct } from '../IIMPProduct'
import { IIMPString } from '../IIMPString'
/**
 * Module 2.1.1.9
 * interface for a string to change in state
 * @param product an IIMPProduct with a string that needs to be changed
 * @param string the IIMPString property to change in product
 * @param newValue the new string.text value
 */
export interface IIMPProductStringToChange {
  product: IIMPProduct
  string: IIMPString
  newValue: string
}
