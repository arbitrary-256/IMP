
/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Paper } from '@mui/material'
/* react context */
import { ImpProvider } from './ImpContext'
/* custom components */
import { ContentArea } from './content/ContentArea'
import { NavBar } from './navigation/NavBar'
/**
 * Module 1.2.	App Module
 * Container component around entire application – renders application.

 */


/**
 * a component to render the React application
 * @returns the React application
 */
export const App: React.FC = (): React.ReactElement => {
  return (
    <div className={`App`}>
      <ImpProvider>
        <Paper>
          <NavBar />
          <ContentArea />
        </Paper>
      </ImpProvider>
    </div>
  )
}
