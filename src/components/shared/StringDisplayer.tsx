/** @format */
import * as React from 'react'
import { IIMPString } from '../../interfaces/IIMPString'
export const StringDisplayer: React.FC<IIMPString> = (impString: IIMPString): React.ReactElement => {
  return <>{`${impString.prefix}${impString.text}${impString.suffix}`}</>
}
