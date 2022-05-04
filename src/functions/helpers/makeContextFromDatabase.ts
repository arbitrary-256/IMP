/** @format */
/* interfaces */
//import { IIMPDatabaseRow } from '../../interfaces/IIMPDatabaseRow'
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
/* helpers */
// import { convertProduct } from './convertProduct'
import { createEmptyContext } from './createEmptyContext'
/**
 * creates a React Context state for the application from the database contents
 * @returns the database's current state as Context state
 */
export const makeContextFromDatabase: Function = async (): Promise<IIMPState> => {
  /* check for the database */

  /* check for the table */

  /* if both are true, create the Context state from the database */

  let tempInStock: IIMPProduct[] = []
  /* convert each database row to a product */

  /* create the Context state */
  const context: IIMPState = {
    ...createEmptyContext(),
    inStock: tempInStock
  }
  /* return the Context state */
  return context
}
