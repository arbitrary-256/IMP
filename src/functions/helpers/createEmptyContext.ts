/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
// css-in-TypeScript themes
import { darkTheme } from '../../components/theme/darkTheme'
import { createEmptyProduct } from './createEmptyProduct'
/**
 * mocks a React Context state for the application without using the database
 * @returns the default state for the application
 */
export const createEmptyContext: Function = (): IIMPState => {
  const inventory: IIMPProduct[] = []
  return {
    cart: [],
    inStock: inventory,
    inventorySearch: ``,
    filteredInventory: [],
    orderSearch: ``,
    filteredOrder: [],
    restockSearch: ``,
    filteredRestock: [],
    contentAreaView: `Logged Out`,
    loggedInUser: `Logged Out`,
    productToReceive: createEmptyProduct(),
    theme: darkTheme
  }
}
