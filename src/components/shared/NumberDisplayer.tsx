/** @format */
import * as React from 'react'
import { IIMPNumber } from '../../interfaces/IIMPNumber'
export const NumberDisplayer: React.FC<IIMPNumber> = (impNumber: IIMPNumber): React.ReactElement => {
  return (
    <>{`${impNumber.id}: ${impNumber.prefix} ${impNumber.id === `Purchase Price` || impNumber.id === `Sale Price` ? impNumber.currentValue.toFixed(2) : impNumber.currentValue} ${impNumber.suffix}`}</>
  )
}
