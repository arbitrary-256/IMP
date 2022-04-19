/** @format */
import dotenv from 'dotenv'
dotenv.config()

export const showIMPenvs: Function = (): void => {
  !process.env.IMPFRONTENDPORT ? console.error(`no IMPFRONTENDPORT found in .env`) : console.log(`webapp access port: ${process.env.IMPFRONTENDPORT}`)
  !process.env.IMPEXTERNALPORT ? console.error(`no IMPEXTERNALPORT found in .env`) : console.log(`MariaDB access port: ${process.env.IMPEXTERNALPORT}`)
  !process.env.IMPCONTAINERPORT ? console.error(`no IMPCONTAINERPORT found in .env`) : console.log(`MariaDB internal container port: ${process.env.IMPCONTAINERPORT}`)
  !process.env.IMPNGINXVERSION ? console.error(`no IMPNGINXVERSION found in .env`) : console.log(`Nginx docker image version: ${process.env.IMPNGINXVERSION}`)
  !process.env.IMPMARIADBVERSION ? console.error(`no IMPMARIADBVERSION found in .env`) : console.log(`MariaDB docker image version: ${process.env.IMPMARIADBVERSION}`)
  !process.env.IMPMARIADBHOST ? console.error(`no IMPMARIADBHOST found in .env`) : console.log(`MariaDB FQDN or IP address: ${process.env.IMPMARIADBHOST}`)
  !process.env.IMPDATABASE ? console.error(`no DATABASE found in .env`) : console.log(`MariaDB IMP Database: ${process.env.IMPDATABASE}`)
  !process.env.IMPROOTUSERNAME ? console.error(`no IMPROOTUSERNAME found in .env`) : console.log(`MariaDB root user name: ${process.env.IMPROOTUSERNAME}`)
  !process.env.IMPROOTPASSWORD ? console.error(`no IMPROOTPASSWORD found in .env`) : console.log(`MariaDB root password: ${process.env.IMPROOTPASSWORD}`)
  !process.env.IMPUSERNAME ? console.error(`no IMPUSERNAME found in .env`) : console.log(`MariaDB IMP bot user name: ${process.env.IMPUSERNAME}`)
  !process.env.IMPPASSWORD ? console.error(`no IMPPASSWORD found in .env`) : console.log(`MariaDB IMP bot password: ${process.env.IMPPASSWORD}`)
}

showIMPenvs()
