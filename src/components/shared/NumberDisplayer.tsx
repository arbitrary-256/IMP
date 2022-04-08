/** @format */
import * as React from 'react'
import { IIMPNumber } from '../../interfaces/IIMPNumber'
/**
 * a component to display a number in a product
 * @param impNumber the IIMPNumber to display
 * @returns a component to display the numbers in a product
 */
export const NumberDisplayer: React.FC<IIMPNumber> = (impNumber: IIMPNumber): React.ReactElement => (
  <>{`${impNumber.id}: ${impNumber.prefix ? impNumber.prefix : ``} ${
    impNumber.propertyName.toString() === `price` || impNumber.propertyName.toString() === `cost` ? impNumber.value.toFixed(2) : impNumber.value
  } ${impNumber.suffix ? impNumber.suffix : ``}`}</>
)
