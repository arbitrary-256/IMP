/** @format */
import * as React from 'react'
import { IIMPImage } from '../../interfaces/IIMPImage'
/**
 * a component that displays an image in a product
 * @param imageToDisplay the IIMPImage to be displayed
 * @returns a React.FC that displays an image
 */
export const ImageDisplayer: React.FC<IIMPImage> = (imageToDisplay: IIMPImage): React.ReactElement => <img src={imageToDisplay.data} alt={imageToDisplay.altText} height={100} width={100} />
