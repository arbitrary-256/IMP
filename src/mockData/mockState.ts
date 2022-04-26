/** @format */
// interfaces
import { IIMPProduct } from '../interfaces/IIMPProduct'
import { IIMPState } from '../interfaces/IIMPState'
// css-in-TypeScript themes
import { darkTheme } from '../components/theme/darkTheme'
// helper functions
import { mockInventory } from './mockInventory'
import { mockProduct } from './mockProduct'
/**
 * mocks a React Context state for the application without using the database
 * @returns the default state for the application
 */
export const mockState: Function = (): IIMPState => {
  const receivingProduct: IIMPProduct = mockProduct()
  const inventory: IIMPProduct[] = mockInventory(30)
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
    productToReceive: {
      ...receivingProduct,
      toReceive: {
        ...receivingProduct.toReceive,
        value: 0
      },
      inStock: {
        ...receivingProduct.inStock,
        value: 0
      },
      inCart: {
        ...receivingProduct.inCart,
        value: 0
      }
    },
    theme: darkTheme
  }
}
