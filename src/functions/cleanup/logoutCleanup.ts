/** @format */
import { IIMPState } from '../../interfaces/IIMPState'
import { ILoginValue } from '../../interfaces/unionTypes/ILoginValue'
import { emptyCart } from '../helpers/emptyCart'
import { generateProduct } from '../helpers/generateProduct'
export const logoutCleanup: Function = (user: ILoginValue, state: IIMPState): void => (user === `Logged Out` ? (state.productToReceive = generateProduct() && emptyCart(state.cart)) : null)
