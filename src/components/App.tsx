/** @format */
import * as React from 'react'
import { ContentArea } from './content/ContentArea'
import { ImpProvider } from './ImpContext'
import { NavBar } from './navigation/NavBar'
/**
 * a component to render the React application
 * @returns the React application
 */
export const App: React.FC = (): React.ReactElement => {
  return (
    <div className={`App`}>
      <ImpProvider>
        <NavBar />
        <ContentArea />
      </ImpProvider>
    </div>
  )
}
