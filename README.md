# IMP - Inventory Management Program

[](#table-of-contents)

## Table of Contents

- [About IMP](#about-imp 'About IMP')
- [Develop](#develop 'Develop')
- [Build for web](#build-for-web 'Build for web')
- [Build for your OS](#build-for-your-os 'Build for your OS')
- [Build cross-platform](#build-cross-platform 'Build cross-platform')
- [Deploy your database](#deploy-your-database 'Deploy your database')

[](#about-imp)

## About IMP

### Prerequisites

You will need to install the following things to use this repository:

- [VS Code](https://code.visualstudio.com/download) to edit and lint code **_OR_** a different IDE / text editor that supports both Typescript and Rust
- [Node.js](https://nodejs.org/en/download/), as it is a prerequisite for most of the frontend code (but [Deno](https://deno.land) might also work)
- [Rust](https://www.rust-lang.org/tools/install), as it is a prerequisite for Tauri.
- [Docker Swarm](https://docs.docker.com/engine/swarm) **_OR_** another way to deploy MariaDB

**IMP** is a cross-platform **I**nventory **M**anagement **P**rogram.

#### Languages

- [Rust](https://www.rust-lang.org/) - language for Tauri's backend code
- [SQL](https://www.mysql.com/) - language for database queries
- [Typescript](https://www.typescriptlang.org/) - language for React and Tauri's frontend code

#### Front end technologies

- [React.JS](https://reactjs.org/) with [create-react-app](https://create-react-app.dev/)
- [Material-UI](https://material-ui.com/) - styling and component creation

#### Back end technologies

- [Tauri](https://tauri.studio) - cross-platform desktop and web applications
- [create-react-app](https://create-react-app.dev/) - transpiles/minifies/obfuscates Typescript
- [MariaDB](https://mariadb.org/) - database

[ToC](#table-of-contents 'Return to Table of Contents')

[](#develop)

## Develop

1. Install your IDE
2. Fork this repository and clone it to your development machine
3. Run `npm run setup` and follow the instructions in your terminal.  This process will install the prerequisites except for your IDE, and should only be required once.
4. Run `yarn start` to start a hot-reloadable development server in a Tauri application

[ToC](#table-of-contents 'Return to Table of Contents')

[](#build-for-web)

## Build for web

Run `yarn zip` to build and zip a servable web directory to the `output` directory with the extension `.zip`.  This artifact is meant for deployment to a web server.

[ToC](#table-of-contents 'Return to Table of Contents')

## Build for your OS

[](#build-for-your-os)

Run `yarn bundle` to build a double-clickable installer for your operating system to the `output` directory with the extension `.dmg` (macOS), `.msi`  (Windows), or `.deb`(Debian-like linux distros).  These artifacts are meant for end users to install the application.

[ToC](#table-of-contents 'Return to Table of Contents')

## Build cross platform

[](#build-cross-platform)

### Running `yarn bundle` on multiple platforms

You can run `yarn bundle` on multiple OSes and produce the installer on each of them.  We recommend automating this process with [GitHub Actions](https://github.com/actions/) for ease of use and to lower processor load on developer machines.

### Using GitHub Actions

You can use [Tauri Actions](https://github.com/tauri-apps/tauri-action) to easily build for linux, macOS, and Windows.  Fundamentally, this is just a way to run `yarn bundle` on multiple OSes at once on GitHub's servers.

[ToC](#table-of-contents 'Return to Table of Contents')

## Deploy your database

[](#deploy-your-database)

### Docker Swarm

The file `mariadb-stack.yml` contains inline instructions and defines a Docker Swarm stack that deploys a MariaDB database.  This is the simplest way to deploy the database for most users.  If you happen to be a user who knows more about deploying MariaDB, feel free to deploy however you like - IMP does not discriminate.

[ToC](#table-of-contents 'Return to Table of Contents')

