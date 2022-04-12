/** @format */
// libraries
import * as React from 'react'
import Dropzone from 'react-dropzone'
// interfaces
import { IIMPProductImageToChange } from '../../interfaces/productProperties/IIMPProductImageToChange'
// react context
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
// custom components
import { ImageDisplayer } from './ImageDisplayer'
/**
 * a component that uses react-dropzone to allow the user to change the image for a product
 * @returns a React.FC that allows the user to update the value of an image
 */
export const ImageChanger: React.FC<IIMPProductImageToChange> = (toChange: IIMPProductImageToChange): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <>
      <Dropzone
        accept={`image/*`}
        maxFiles={1}
        multiple={false}
        noKeyboard={true}
        onDrop={(images) =>
          dispatch({
            type: `UPDATE_IMAGE`,
            payload: {
              product: toChange.product,
              image: {
                data: images[0].toString(),
                altText: images[0].name
              }
            }
          })
        }
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              {ImageDisplayer(toChange.image)}
              <input {...getInputProps()} />
              <p>Drop image files here, or click to browse</p>
            </div>
          </section>
        )}
      </Dropzone>
    </>
  )
}
