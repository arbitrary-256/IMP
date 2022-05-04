/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { ThemeProvider } from '@mui/material/styles'
/* interfaces */
import { IIMPState } from '../interfaces/IIMPState'
/* react context */
import { ImpReducer } from '../functions/ImpReducer'
/* helper functions */
import { createEmptyContext } from '../functions/helpers/createEmptyContext'
const defaultState: IIMPState = createEmptyContext()
/**
 * the React Context
 */
export const ImpContext: React.Context<any> = React.createContext(defaultState)
/**
 * the React Context Provider component
 */
export const ImpProvider: React.FC<any> = (props: any): React.ReactElement => {
  const [state, dispatch] = React.useReducer(ImpReducer, defaultState)
  return (
    <ImpContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>{props.children}</ThemeProvider>
    </ImpContext.Provider>
  )
}
/**
 * the React Context Consumer component
 */
export const ImpConsumer: React.FC<any> = (props: any): React.ReactElement => <ImpContext.Consumer>{props.children}</ImpContext.Consumer>
