/** @format */
import * as React from 'react'
import { IIMPImage } from '../../interfaces/IIMPImage'
/**
 * @param impImage the IIMPImage to be displayed
 * @returns a React.FC that displays an image in the Cart tab of the UI
 */
export const ImageDisplayerCartView: React.FC<IIMPImage> = (impImage: IIMPImage): React.ReactElement => {
  return (
    <>
      <img src={`${impImage.data}`} alt={`${impImage.altText}`} />
    </>
  )
}
