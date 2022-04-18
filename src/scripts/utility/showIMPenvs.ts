/** @format */
import dotenv from 'dotenv'
dotenv.config()

export const showIMPenvs: Function = (): void => {
  !process.env.IMPSTACKNAME ? console.error(`no IMPSTACKNAME found in .env`) : console.log(`IMPSTACKNAME: ${process.env.IMPSTACKNAME}`)
  !process.env.IMPMARIADBVERSION ? console.error(`no IMPMARIADBVERSION found in .env`) : console.log(`IMPMARIADBVERSION: ${process.env.IMPMARIADBVERSION}`)
  !process.env.IMPMARIADBHOST ? console.error(`no IMPMARIADBHOST found in .env`) : console.log(`IMPMARIADBHOST: ${process.env.IMPMARIADBHOST}`)
  !process.env.IMPFRONTENDPORT ? console.error(`no IMPFRONTENDPORT found in .env`) : console.log(`IMPFRONTENDPORT: ${process.env.IMPFRONTENDPORT}`)
  !process.env.IMPCONTAINERPORT ? console.error(`no IMPCONTAINERPORT found in .env`) : console.log(`IMPCONTAINERPORT: ${process.env.IMPCONTAINERPORT}`)
  !process.env.IMPEXTERNALPORT ? console.error(`no IMPEXTERNALPORT found in .env`) : console.log(`IMPEXTERNALPORT: ${process.env.IMPEXTERNALPORT}`)
  !process.env.IMPROOTUSERNAME ? console.error(`no IMPROOTUSERNAME found in .env`) : console.log(`IMPROOTUSERNAME: ${process.env.IMPROOTUSERNAME}`)
  !process.env.IMPROOTPASSWORD ? console.error(`no IMPROOTPASSWORD found in .env`) : console.log(`IMPROOTPASSWORD: ${process.env.IMPROOTPASSWORD}`)
  !process.env.IMPUSERNAME ? console.error(`no IMPUSERNAME found in .env`) : console.log(`IMPUSERNAME: ${process.env.IMPUSERNAME}`)
  !process.env.IMPPASSWORD ? console.error(`no IMPPASSWORD found in .env`) : console.log(`IMPPASSWORD: ${process.env.IMPPASSWORD}`)
  !process.env.IMPDATABASE ? console.error(`no DATABASE found in .env`) : console.log(`IMPDATABASE: ${process.env.IMPDATABASE}`)
}

showIMPenvs()
