/** @format */
import * as React from 'react'
import { IIMPImage } from '../../interfaces/IIMPImage'
/**
 * @returns a React.FC that allows that displays an image
 */
export const ImageDisplayer: React.FC<IIMPImage> = (impImage: IIMPImage): React.ReactElement => <img src={impImage.data} alt={impImage.altText} height={90} width={90} />
