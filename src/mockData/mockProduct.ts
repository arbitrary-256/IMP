/** @format */
/* interfaces */
import { IIMPImage } from '../interfaces/IIMPImage'
import { IIMPProduct } from '../interfaces/IIMPProduct'
/* non-TypeScript data */
import { adjectives } from './adjectives'
import { nouns } from './nouns'
/* helper functions */
import { createImpImage } from '../functions/helpers/createImpImage'
/**
 * Module 6.3
 * mocks a product in ReactContext
 * @returns a mocked product
 */
export const mockProduct: Function = (): IIMPProduct => {
  const mockTwoDigitInteger: Function = (): number => Math.floor(Math.random() * 99)
  const mockFiveDigitInteger: Function = (): number => Math.floor(Math.random() * 99999)
  const mockSixDigitInteger: Function = (): number => Math.floor(Math.random() * 999999)
  const mockPrice: Function = () => parseFloat((Math.floor(parseFloat(`${mockFiveDigitInteger()}${mockTwoDigitInteger()}`)) / 100).toFixed(2))
  const randomUpc: number = Math.floor(Math.random() * 99999999999)
  const randomIconImage: IIMPImage = createImpImage()
  const productName: string = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`
  const randomPriceOne: number = mockPrice(mockFiveDigitInteger(), mockTwoDigitInteger())
  const randomPriceTwo: number = mockPrice(mockFiveDigitInteger(), mockTwoDigitInteger())
  let randomSalePrice: number
  let randomcost: number
  if (randomPriceOne > randomPriceTwo) {
    randomSalePrice = randomPriceTwo
    randomcost = randomPriceOne
  } else {
    randomSalePrice = randomPriceOne
    randomcost = randomPriceTwo
  }

  const randomQuantities: number[] = [mockSixDigitInteger(), mockSixDigitInteger(), mockSixDigitInteger()].sort((a, b) => a - b)
  return {
    editingMode: false,
    upc: {
      propertyName: `UPC`,
      id: `UPC`,
      value: randomUpc,
      min: 0,
      max: 99999999999
    },
    name: {
      id: `Product Name`,
      text: `${productName}`
    },
    image: randomIconImage,
    cost: { id: `Purchase Price`, propertyName: `cost`, value: randomcost, min: 0.01, max: 99999.99 },
    price: { id: `Sale Price`, propertyName: `price`, value: randomSalePrice, min: 0.01, max: 99999.99 },
    min: { id: `Minimum Quantity`, propertyName: `min`, value: randomQuantities[0], min: 0, max: 999999 },
    inStock: { id: `In Stock`, propertyName: `inStock`, value: randomQuantities[0], min: randomQuantities[1], max: randomQuantities[2] },
    max: { id: `Maximum Quantity`, propertyName: `max`, value: randomQuantities[2], min: 0, max: 999999 },
    inCart: { id: `In Cart`, propertyName: `inCart`, value: 0, min: 0, max: 999999 },
    toReceive: { id: `To Receive`, propertyName: `toReceive`, value: 0, min: 0, max: 999999 }
  }
}
