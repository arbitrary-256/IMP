/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
// react context
import { IIMPState } from '../../interfaces/IIMPState'
// helper functions
import { generateProduct } from './generateProduct'
/**
 * cleans up the application state at the end of a call to ImpReducer
 * @param newState the current IIMPState to be cleaned up
 * @param oldState OPTIONAL the previous state to be added to state.stateHistory
 * @param product OPTIONAL the product to be cleaned up
 * @returns the cleaned up application state
 */
export const reducerCleanup: Function = (newState: IIMPState, oldState?: IIMPState, product?: IIMPProduct): IIMPState => {
  let productIndex: number = -1
  
  /**
   * empties the cart and generates a new productToReceive
   */
  const logoutCleanup: Function = (): void => {
    newState.productToReceive = generateProduct()
    newState.inStock.forEach((product) => {
      product.inCart.value = 0
    })
    newState.stateFuture = []
    newState.stateHistory = []
  }
  
  /**
   * locates a product in state
   */
  const locateAndPlaceProduct: Function = (): void => {
    // if product parameter was passed, find it's index in the inStock array
    product ? productIndex = newState.inStock.findIndex((productToFind) => productToFind.upc.value === product.upc.value) : void 0
    // if productIndex is not -1, set the productToLocate to the product
    productIndex && productIndex !== -1 && product ? newState.inStock[productIndex] = product : void 0
    // if the productIndex is -1 and the upc matches the productToReceive, set the productToReceive to the product
    productIndex === -1 && product && product.upc.value === newState.productToReceive.upc.value ? newState.productToReceive = product : void 0
  }

  // if user is logged out, cleanup user activity
  newState.loggedInUser === `Logged Out` ? logoutCleanup() : void 0
  // if there is an old state, add it to the stateHistory
  oldState ? newState.stateHistory.push(oldState) : void 0
  // if there is a product, place it in the correct place in newState
  product ? locateAndPlaceProduct() : void 0
  // rebuild the contents of the cart
  newState.cart = newState.inStock.filter((productInInventory) => productInInventory.inCart.value > 0)
  return newState
}
