/** @format */
import * as React from 'react'
import { generateDefaultState } from '../functions/helpers/generateDefaultState'
import { ImpReducer } from '../functions/ImpReducer'
import { IIMPState } from '../interfaces/IIMPState'
const defaultState: IIMPState = generateDefaultState()
/**
 * the React Context
 */
export const ImpContext: React.Context<any> = React.createContext(defaultState)
/**
 * the React Context Provider component
 */
export const ImpProvider: React.FC<any> = (props: any): React.ReactElement => {
  const [state, dispatch] = React.useReducer(ImpReducer, defaultState)
  return <ImpContext.Provider value={{ state, dispatch }}>{props.children}</ImpContext.Provider>
}
/**
 * the React Context Consumer component
 */
export const ImpConsumer: React.FC<any> = (props: any): React.ReactElement => <ImpContext.Consumer>{props.children}</ImpContext.Consumer>
