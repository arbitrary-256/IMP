/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Card } from '@mui/material'
import Dropzone from 'react-dropzone'
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
// react context
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a React Component that displays the image changer
 * @param product the product to change the image of
 * @returns a React.FC that displays the ImageChanger
 */
export const ImageChanger: Function = (product: IIMPProduct) => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)

  const upcValue: number = product.upc.value

  let productLocation: Function = (): number => state.inStock.findIndex((productToFind: IIMPProduct) => productToFind.upc.value === upcValue)

  return (
    <Card>
      <Dropzone
        onDrop={(acceptedFiles: File[]) => {
          const newFile: File = acceptedFiles[0]
          // read contents of newFile
          const reader: FileReader = new FileReader()
          reader.onload = (event: ProgressEvent) => {
            const imageData = (event.target as FileReader).result
            dispatch({
              type: `SET_IMAGE`,
              payload: {
                image: {
                  data: imageData as string,
                  altText: newFile.name
                },
                product: productLocation() === -1 ? state.productToReceive : state.inStock[productLocation()],
                inventoryIndex: productLocation() !== -1 ? productLocation() : undefined
              }
            })
          }
          reader.readAsDataURL(newFile)
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <img src={product.image.data} alt={product.image.altText} height={100} width={100} />
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    </Card>
  )
}
