/** @format */
/* interfaces */
import { IIMPNumber } from '../IIMPNumber'
import { IIMPProduct } from '../IIMPProduct'
/**
 * changes the value of a number in a product
 * @param product an IIMPProduct with a number that needs to be changed
 * @param number an IIMPNumber that needs to change
 */
export interface IIMPProductNumberToChange {
  number: IIMPNumber
  product: IIMPProduct
}
