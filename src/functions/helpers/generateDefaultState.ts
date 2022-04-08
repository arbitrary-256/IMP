/** @format */
import { generateProduct } from './generateProduct'
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
import { mockInventory } from '../../mockData/mockInventory'
/**
 * generates a mocked state for the application without using the database
 * @returns the default state for the application
 */
export const generateDefaultState: Function = (): IIMPState => {
  const receivingProduct: IIMPProduct = generateProduct()
  const inventory: IIMPProduct[] = mockInventory(10)
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
      onHand: {
        ...receivingProduct.onHand,
        value: 0
      },
      inCart: {
        ...receivingProduct.inCart,
        value: 0
      }
    },
    stateFuture: [],
    stateHistory: []
  }
}
