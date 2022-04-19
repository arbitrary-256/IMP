/** @format */
// interfaces
import { IIMPImage } from '../../interfaces/IIMPImage'
import { IIMPProduct } from '../../interfaces/IIMPProduct'
// non-TypeScript data
import { adjectives } from '../../mockData/adjectives'
import { nouns } from '../../mockData/nouns'
// helper functions
import { generateProductIcon } from './generateProductIcon'
/**
 * generates a mocked product without using the database
 * @returns a mocked product
 */
export const generateProduct: Function = (): IIMPProduct => {
  // const mockOneDigitInteger: Function = (): number => Math.floor(Math.random() * 9)
  const mockTwoDigitInteger: Function = (): number => Math.floor(Math.random() * 99)
  const mockThreeDigitInteger: Function = (): number => Math.floor(Math.random() * 999)
  const mockFourDigitInteger: Function = (): number => Math.floor(Math.random() * 9999)
  const mockPrice: Function = () => parseFloat((Math.floor(parseFloat(`${mockFourDigitInteger()}${mockTwoDigitInteger()}`)) / 100).toFixed(2))
  const randomUpc: number = Math.floor(Math.random() * 99999999999)
  const randomIconImage: IIMPImage = generateProductIcon()
  const productName: string = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`
  const randomPriceOne: number = mockPrice(mockFourDigitInteger(), mockTwoDigitInteger())
  const randomPriceTwo: number = mockPrice(mockFourDigitInteger(), mockTwoDigitInteger())
  let randomSalePrice: number
  let randomcost: number
  if (randomPriceOne > randomPriceTwo) {
    randomSalePrice = randomPriceTwo
    randomcost = randomPriceOne
  } else {
    randomSalePrice = randomPriceOne
    randomcost = randomPriceTwo
  }
  const randominStock: number = mockThreeDigitInteger()
  const randomQuantityOne: number = mockThreeDigitInteger()
  const randomQuantityTwo: number = mockThreeDigitInteger()
  let randommin: number
  let randommax: number
  if (randomQuantityOne > randomQuantityTwo) {
    randommin = randomQuantityTwo
    randommax = randomQuantityOne
  } else {
    randommin = randomQuantityOne
    randommax = randomQuantityTwo
  }
  return {
    editingMode: false,
    upc: {
      propertyName: `upc`,
      id: `UPC`,
      value: randomUpc,
      min: 0,
      max: 99999999999
    },
    name: {
      id: `name`,
      suffix: ``,
      prefix: ``,
      text: `${productName}`
    },
    image: randomIconImage,
    cost: { id: `Purchase Price`, propertyName: `cost`, value: randomcost, prefix: `$`, min: 0.01, max: 9999.99 },
    price: { id: `Sale Price`, propertyName: `price`, value: randomSalePrice, prefix: `$`, min: 0.01, max: 9999.99 },
    inStock: { id: `In Stock`, propertyName: `inStock`, value: randominStock, min: 0, max: 9999 },
    inCart: { id: `In Cart`, propertyName: `inCart`, value: 0, min: 0, max: 9999 },
    toReceive: { id: `To Receive`, propertyName: `toReceive`, value: 0, min: 0, max: 9999 },
    min: { id: `Minimum Quantity`, propertyName: `min`, value: randommin, min: 0, max: 9999 },
    max: { id: `Maximum Quantity`, propertyName: `max`, value: randommax, min: 0, max: 9999 }
  }
}
