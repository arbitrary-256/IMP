# IMP - Inventory Management Platform

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

### What is IMP?

**_IMP_** is an open-source cross-platform **_I_** nventory **_M_** anagement **_P_** latform with integrated Point of Sale (PoS) written with the goal of being entirely platform-agnostic.  To facilitate this, IMP utilizes the Tauri framework to create lightweight and secure cross-platform binaries from a TypeScript/React frontend for every desktop OS.  While the Tauri framework is still at the release candidate stage and does not yet support compiling mobile (iOS and Android) binaries these features are on the Tauri roadmap, so it should eventually be simple to build for all 5 platforms in the future from one codebase without any platform-specific code.

### Current version

IMP uses the semantic versioning system.  The current build of IMP is version 0.8.9

[](#develop)

## Develop

1. Install your IDE
2. Fork this repository and clone it to your development machine
3. Run `npm run setup` and follow the instructions in your terminal.  This process will install the prerequisites except for your IDE, and should only be required once.
4. Run `yarn start` to start a hot-reloadable development server in a Tauri application

[ToC](#table-of-contents 'Return to Table of Contents')

### Prerequisites

You will need to install the following things to build IMP:

- [VS Code](https://code.visualstudio.com/download) to edit and lint code **_OR_** a different IDE / text editor that supports both Typescript and Rust
- [Node.js](https://nodejs.org/en/download/), as it is a prerequisite for most of the frontend code (but [Deno](https://deno.land) might also work)
- [Rust](https://www.rust-lang.org/tools/install), as it is a prerequisite for Tauri.
- [Docker Swarm](https://docs.docker.com/engine/swarm) **_OR_** another way to deploy MariaDB

### Languages

- [Rust version 1.6^](https://www.rust-lang.org/) - for Tauri's backend code
- [Typescript version 4.6^](https://www.typescriptlang.org/) - for Tauri's frontend code, React.JS, and Material-UI

### Front end technologies

- [React.JS version 18^](https://reactjs.org/) using [create-react-app](https://create-react-app.dev/) - web components library
- [Material-UI version 5^](https://material-ui.com/) - React.JS component and styling library

### Back end technologies

- [Tauri version 1.0.0-rc.3](https://tauri.studio) - cross-platform desktop framework for compiling web applications
- [MariaDB version 10.7.3^](https://mariadb.org/) - MySQL-compatible database

[ToC](#table-of-contents 'Return to Table of Contents')

[](#build-for-web)

### Build for web

Run `yarn zip` to build and zip a servable web directory to the `output` directory with the extension `.zip`.  This directory is meant for deployment to a web server such as [NGINX](https://nginx.org/en/) or [Apache](https://httpd.apache.org/).

[ToC](#table-of-contents 'Return to Table of Contents')

### Build for your OS

[](#build-for-your-os)

Run `yarn bundle` to build a double-clickable installer for your operating system to the `output` directory with the extension `.dmg` (macOS), `.msi`  (Windows), or `.deb`(Debian-like linux distros).  These artifacts are meant for end users to install the application.

[ToC](#table-of-contents 'Return to Table of Contents')

### Build cross platform

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
