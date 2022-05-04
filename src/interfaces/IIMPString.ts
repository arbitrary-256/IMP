/** @format */
/* interfaces */
import { IStringDescription } from './unionTypes/IStringDescription'
/**
 * the interface for a string in a product
 * @param prefix a string that should be displayed before the text
 * @param text the string to be displayed or changed
 * @param suffix a string that should be displayed after the text
 */
export interface IIMPString {
  id: IStringDescription
  text: string
}
