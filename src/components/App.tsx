/** @format */
import * as React from 'react'
import { ContentArea } from './content/ContentArea'
import { ImpProvider } from './ImpContext'
import { NavBar } from './navigation/NavBar'
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
