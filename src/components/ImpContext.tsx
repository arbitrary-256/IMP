/** @format */
import * as React from 'react'
import { IIMPState } from '../interfaces/IIMPState'
import { generateDefaultState } from '../functions/helpers/generateDefaultState'
import { ImpReducer } from '../functions/ImpReducer'
const defaultState: IIMPState = generateDefaultState()
export const ImpContext: React.Context<any> = React.createContext({
  inventory: [],
  cart: [],
  Receiving: {}
})
export const ImpProvider: React.FC = (props: any): React.ReactElement => {
  const [state, dispatch] = React.useReducer(ImpReducer, defaultState)
  return <ImpContext.Provider value={{ state, dispatch }}>{props.children}</ImpContext.Provider>
}
export const ImpConsumer: React.FC = (props: any): React.ReactElement => <ImpContext.Consumer>{props.children}</ImpContext.Consumer>
