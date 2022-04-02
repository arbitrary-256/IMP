/** @format */
import { IIMPImage } from '../../interfaces/IIMPImage'
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { adjectives } from '../../mockData/adjectives'
import { nouns } from '../../mockData/nouns'
import { generateProductIcon } from './generateProductIcon'
export const generateProduct: Function = (): IIMPProduct => {
  const mockDigit: Function = (): number => Math.floor(Math.random() * 9)
  const mockTwoDigitInteger: Function = (): number => Math.floor(Math.random() * 99)
  const mockThreeDigitInteger: Function = (): number => Math.floor(Math.random() * 999)
  const mockFourDigitInteger: Function = (): number => Math.floor(Math.random() * 9999)
  const mockPrice: Function = () => parseFloat((Math.floor(parseFloat(`${mockFourDigitInteger()}${mockTwoDigitInteger()}`)) / 100).toFixed(2))
  const randomUpc: number = Math.floor(Math.random() * 99999999999)
  let randomIconImage: IIMPImage = generateProductIcon()
  randomIconImage.parentUpc = randomUpc
  const productName: string = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`
  const randomPriceOne: number = mockPrice(mockFourDigitInteger(), mockTwoDigitInteger())
  const randomPriceTwo: number = mockPrice(mockFourDigitInteger(), mockTwoDigitInteger())
  let randomSalePrice: number
  let randomPurchasePrice: number
  if (randomPriceOne > randomPriceTwo) {
    randomSalePrice = randomPriceTwo
    randomPurchasePrice = randomPriceOne
  } else {
    randomSalePrice = randomPriceOne
    randomPurchasePrice = randomPriceTwo
  }
  const randomQuantityInInventory: number = mockThreeDigitInteger()
  const randomQuantityOne: number = mockThreeDigitInteger()
  const randomQuantityTwo: number = mockThreeDigitInteger()
  let randomMinQuantity: number
  let randomMaxQuantity: number
  if (randomQuantityOne > randomQuantityTwo) {
    randomMinQuantity = randomQuantityTwo
    randomMaxQuantity = randomQuantityOne
  } else {
    randomMinQuantity = randomQuantityOne
    randomMaxQuantity = randomQuantityTwo
  }
  return {
    upc: {
      parentUpc: randomUpc,
      id: `UPC`,
      currentValue: randomUpc,
      minValue: 0,
      maxValue: 99999999999,
      prefix: ``,
      suffix: ``
    },
    name: {
      parentUpc: randomUpc,
      suffix: ``,
      prefix: ``,
      text: `${productName}`
    },
    image: randomIconImage,
    purchasePrice: { parentUpc: randomUpc, id: `Purchase Price`, currentValue: randomPurchasePrice, prefix: `$`, suffix: ``, minValue: 0.01, maxValue: 9999.99 },
    salePrice: { parentUpc: randomUpc, id: `Sale Price`, currentValue: randomSalePrice, prefix: `$`, suffix: ``, minValue: 0.01, maxValue: 9999.99 },
    quantityInInventory: { parentUpc: randomUpc, id: `On Hand`, currentValue: randomQuantityInInventory, prefix: ``, suffix: `units`, minValue: 0, maxValue: 9999 },
    quantityInCart: { parentUpc: randomUpc, id: `In Cart`, currentValue: 0, prefix: ``, suffix: `units`, minValue: 0, maxValue: 9999 },
    quantityToReceive: { parentUpc: randomUpc, id: `To Receive`, currentValue: 0, prefix: ``, suffix: `units`, minValue: 0, maxValue: 9999 },
    quantityToRestock: { parentUpc: randomUpc, id: `To Restock`, currentValue: 0, prefix: ``, suffix: `units`, minValue: 0, maxValue: randomMaxQuantity },
    minQuantity: { parentUpc: randomUpc, id: `Minimum Quantity`, currentValue: randomMinQuantity, prefix: ``, suffix: `units`, minValue: mockDigit(), maxValue: randomMaxQuantity },
    maxQuantity: { parentUpc: randomUpc, id: `Maximum Quantity`, currentValue: randomMaxQuantity, prefix: ``, suffix: `units`, minValue: mockDigit(), maxValue: 9999 },
    size: null
  }
}
