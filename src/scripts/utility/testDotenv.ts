/** @format */
import dotenv from 'dotenv'
dotenv.config()

export const testDotenv: Function = (): void => {
  !process.env.IMPHOST ? console.error(`no IMPHOST found in .env`) : console.log(`IMPHOST: ${process.env.IMPHOST}`)
  !process.env.IMPUSERNAME ? console.error(`no IMPUSERNAME found in .env`) : console.log(`IMPUSERNAME: ${process.env.IMPUSERNAME}`)
  !process.env.IMPPASSWORD ? console.error(`no IMPPASSWORD found in .env`) : console.log(`IMPPASSWORD: ${process.env.IMPPASSWORD}`)
  !process.env.IMPDATABASE ? console.error(`no DATABASE found in .env`) : console.log(`IMPDATABASE: ${process.env.IMPDATABASE}`)
}

testDotenv()
