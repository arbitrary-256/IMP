/**
 * Module 1.1.	HTML Index Module
 *Describes a web page containing the application. Provides root *element for rendering the application.

 */

/** @format */
import * as ReactDOMClient from 'react-dom/client'
import { App } from './components/App'
const rootElement: HTMLElement = document.getElementById(`react-app`)!
const root: ReactDOMClient.Root = ReactDOMClient.createRoot(rootElement)
root.render(<App />)
