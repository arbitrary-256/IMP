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
  let productIndex: number = -2
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
  const locateAndPlaceProduct: Function = (product: IIMPProduct): void => {
    const nameMatchesReceiving: boolean = newState.productToReceive.name === product.name
    const upcMatchesReceiving: boolean = newState.productToReceive.upc.value === product.upc.value
    const matchesReceiving: boolean = nameMatchesReceiving || upcMatchesReceiving
    // if product parameter was passed, find it's index in the inStock array by upc or name
    productIndex = newState.inStock.findIndex((productToFind) => productToFind.upc.value === product.upc.value || productToFind.name === product.name)
    // if product was found and matched, set newState.inStock[productToLocate] to the product
    productIndex > -1 ? (newState.inStock[productIndex] = product) : void 0
    // if product was not found and matches the product in receiving, set the productToReceive to the product
    productIndex === -1 && matchesReceiving ? (newState.productToReceive = product) : void 0
  }
  // if the upc in receiving matches any upc in inventory, set the productToReceive to the product in inventory
  newState.inStock.find((productToFind) => newState.productToReceive.upc.value === productToFind.upc.value ? newState.productToReceive = productToFind : void 0)
  // if user is logged out, cleanup user activity
  newState.loggedInUser === `Logged Out` ? logoutCleanup() : void 0
  // if there is an old state, add it to the stateHistory
  oldState ? newState.stateHistory.push(oldState) : void 0
  // if there is a product, place it in the correct place in newState
  product ? locateAndPlaceProduct(product) : void 0
  // rebuild the contents of the cart
  newState.cart = newState.inStock.filter((productInInventory) => productInInventory.inCart.value > 0)
  return newState
}
