/** @format */
/* interfaces */
import { IIMPState } from '../interfaces/IIMPState'
/* css-in-TypeScript themes */
import { darkTheme } from '../components/theme/darkTheme'
/* helper functions */
import { mockInventory } from './mockInventory'
import { mockProduct } from './mockProduct'
/**
 * mocks a React Context state for the application without using the database
 * @returns the default state for the application
 */
export const mockState: Function = (): IIMPState => ({
  cart: [],
  inStock: mockInventory(30),
  inventorySearch: ``,
  filteredInventory: [],
  orderSearch: ``,
  filteredOrder: [],
  restockSearch: ``,
  filteredRestock: [],
  contentAreaView: `Logged Out`,
  loggedInUser: `Logged Out`,
  productToReceive: mockProduct(),
  theme: darkTheme
})
