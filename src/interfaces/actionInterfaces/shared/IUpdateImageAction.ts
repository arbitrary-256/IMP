/** @format */
/* interfaces */
import { IIMPProductImageToChange } from '../../productProperties/IIMPProductImageToChange'
/**
 * Module 2.1.4.1.5
 * an action interface for updating an image with react-dropzone
 */
export interface IUpdateImageAction {
  type: `SET_IMAGE`
  payload: IIMPProductImageToChange
}
