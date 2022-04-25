/** @format */
// import dotenv from 'dotenv'
// dotenv.config()

export const showIMPenvs: Function = (): void => {
  !process.env.REACT_APP_FRONTENDPORT ? console.error(`no REACT_APP_FRONTENDPORT found in .env`) : console.log(`webapp access port: ${process.env.REACT_APP_FRONTENDPORT}`)
  !process.env.REACT_APP_MARIADBPORT ? console.error(`no REACT_APP_MARIADBPORT found in .env`) : console.log(`MariaDB access port: ${process.env.REACT_APP_MARIADBPORT}`)
  !process.env.REACT_APP_INTERNALPORT ? console.error(`no REACT_APP_INTERNALPORT found in .env`) : console.log(`MariaDB internal container port: ${process.env.REACT_APP_INTERNALPORT}`)
  !process.env.REACT_APP_NGINXVERSION ? console.error(`no REACT_APP_NGINXVERSION found in .env`) : console.log(`Nginx docker image version: ${process.env.REACT_APP_NGINXVERSION}`)
  !process.env.REACT_APP_MARIADBVERSION ? console.error(`no REACT_APP_MARIADBVERSION found in .env`) : console.log(`MariaDB docker image version: ${process.env.REACT_APP_MARIADBVERSION}`)
  !process.env.REACT_APP_MARIADBHOST ? console.error(`no REACT_APP_MARIADBHOST found in .env`) : console.log(`MariaDB FQDN or IP address: ${process.env.REACT_APP_MARIADBHOST}`)
  !process.env.REACT_APP_DATABASENAME ? console.error(`no DATABASE found in .env`) : console.log(`MariaDB IMP Database: ${process.env.REACT_APP_DATABASENAME}`)
  !process.env.REACT_APP_ROOTUSER ? console.error(`no REACT_APP_ROOTUSER found in .env`) : console.log(`MariaDB root user name: ${process.env.REACT_APP_ROOTUSER}`)
  !process.env.REACT_APP_ROOTPASSWORD ? console.error(`no REACT_APP_ROOTPASSWORD found in .env`) : console.log(`MariaDB root password: ${process.env.REACT_APP_ROOTPASSWORD}`)
  !process.env.REACT_APP_USER ? console.error(`no REACT_APP_USER found in .env`) : console.log(`MariaDB IMP bot user name: ${process.env.REACT_APP_USER}`)
  !process.env.REACT_APP_PASSWORD ? console.error(`no REACT_APP_PASSWORD found in .env`) : console.log(`MariaDB IMP bot password: ${process.env.REACT_APP_PASSWORD}`)
}

showIMPenvs()
