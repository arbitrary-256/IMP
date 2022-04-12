/** @format */
// interfaces
import { IIMPProductImageToChange } from '../../productProperties/IIMPProductImageToChange'
/**
 * an action interface for updating an image with react-dropzone
 */
export interface IUpdateImageAction {
  type: `UPDATE_IMAGE`
  payload: IIMPProductImageToChange
}
