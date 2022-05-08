/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Box } from '@mui/material'
/* interfaces */
import { IIMPImage } from '../../interfaces/IIMPImage'
/**
 * a component that displays an image in a product
 * @param imageToDisplay the IIMPImage to be displayed
 * @param dimensions? { height: number, width: number }
 * @returns a React.FC that displays an image
 */
export const ImageDisplayer: React.FC<IIMPImage> = (imageToDisplay: IIMPImage, dimensions?: { height: number; width: number }): React.ReactElement => (
  <Box>
    <img
      src={imageToDisplay.data}
      alt={imageToDisplay.altText}
      height={dimensions ? (dimensions.height ? dimensions.height : 100) : 100}
      width={dimensions ? (dimensions.width ? dimensions.width : 100) : 100}
    />
  </Box>
)
