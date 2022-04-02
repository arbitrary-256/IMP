/** @format */
import * as React from 'react'
import { IIMPString } from '../../interfaces/IIMPString'
export const ImageDisplayerOrderView: React.FC<IIMPString> = (impString: IIMPString): React.ReactElement => {
  return <>{`${impString.prefix ? impString.prefix : null}${impString.text}${impString.suffix ? impString.suffix : null}`}</>
}
