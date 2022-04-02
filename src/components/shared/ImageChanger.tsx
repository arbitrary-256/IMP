/** @format */
import * as React from 'react'
import { IIMPString } from '../../interfaces/IIMPString'
/**
 * @param impString the IIMPString to be displayed
 * @returns a React.FC that allows the user to update the value of an image
 */
export const ImageChanger: React.FC<IIMPString> = (impString: IIMPString): React.ReactElement => {
  return <>{`${impString.prefix ? impString.prefix : null}${impString.text}${impString.suffix ? impString.suffix : null}`}</>
}
