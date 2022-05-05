/** @format */
/* interfaces */
//import { IIMPDatabaseRow } from '../../interfaces/IIMPDatabaseRow'
import { IIMPState } from '../../interfaces/IIMPState'
import { mockState } from '../../mockData/mockState'
/* helpers */
// import { convertProduct } from './convertProduct'
// import { createEmptyContext } from './createEmptyContext'
/**
 * creates a React Context state for the application from the database contents
 * @returns the database's current state as Context state
 */
export const createContextFromDatabase: Function = async (): Promise<IIMPState> => {
  /* check for the database */

  /* check for the table */

  /* if both are true, create the Context state from the database */

  // let tempInStock: IIMPProduct[] = []
  /* convert each database row to a product */

  /* create the Context state */
  const context: IIMPState = {
    //...createContextFromDatabase(),
    ...mockState()
    // inStock: tempInStock
  }
  /* return the Context state */
  return context
}
