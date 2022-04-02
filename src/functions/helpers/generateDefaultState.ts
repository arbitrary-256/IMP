/** @format */
import { generateProduct } from './generateProduct'
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
import { mockInventory } from '../../mockData/mockInventory'
const receivingProduct: IIMPProduct = generateProduct()
export const generateDefaultState: Function = (): IIMPState => {
  return {
    cart: [],
    currentInventory: mockInventory(),
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
      quantityToReceive: {
        ...receivingProduct.quantityToReceive,
        currentValue: 0
      },
      quantityInInventory: {
        ...receivingProduct.quantityInInventory,
        currentValue: 0
      },
      quantityInCart: {
        ...receivingProduct.quantityInCart,
        currentValue: 0
      }
    },
    stateFuture: [],
    stateHistory: []
  }
}
