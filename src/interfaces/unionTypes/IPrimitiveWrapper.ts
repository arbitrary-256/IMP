/** @format */
// interfaces
import { IIMPImage } from '../IIMPImage'
import { IIMPNumber } from '../IIMPNumber'
import { IIMPString } from '../IIMPString'
/**
 * a union type of all possible values for an IIMP primitive wrapper interface
 */
export type IPrimitiveWrapper = IIMPImage | IIMPNumber | IIMPString
