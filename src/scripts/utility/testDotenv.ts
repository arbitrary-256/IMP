/** @format */
import dotenv from 'dotenv'
dotenv.config()

export const testDotenv: Function = (): void => {
  !process.env.IMPHOST ? console.error(`no IMPHOST found in .env`) : console.log(`IMPHOST: ${process.env.IMPHOST}`)
  !process.env.IMPPORT ? console.error(`no IMPPORT found in .env`) : console.log(`IMPHOST: ${process.env.IMPPORT}`)
  !process.env.IMPROOTUSERNAME ? console.error(`no IMPROOTUSERNAME found in .env`) : console.log(`IMPROOTUSERNAME: ${process.env.IMPROOTUSERNAME}`)
  !process.env.IMPROOTPASSWORD ? console.error(`no IMPROOTPASSWORD found in .env`) : console.log(`IMPROOTPASSWORD: ${process.env.IMPROOTPASSWORD}`)
  !process.env.IMPUSERNAME ? console.error(`no IMPUSERNAME found in .env`) : console.log(`IMPUSERNAME: ${process.env.IMPUSERNAME}`)
  !process.env.IMPPASSWORD ? console.error(`no IMPPASSWORD found in .env`) : console.log(`IMPPASSWORD: ${process.env.IMPPASSWORD}`)
  !process.env.IMPDATABASE ? console.error(`no DATABASE found in .env`) : console.log(`IMPDATABASE: ${process.env.IMPDATABASE}`)
}

testDotenv()