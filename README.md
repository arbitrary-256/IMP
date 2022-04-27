# IMP - Inventory Management Platform

[](#table-of-contents)

## Table of Contents

- [About IMP](#about-imp 'About IMP')
- [Documentation](#documentation 'Documentation')
- [Develop](#develop 'Develop')
- [Build for web](#build-for-web 'Build for web')
- [Build for your OS](#build-for-your-os 'Build for your OS')
- [Build cross-platform](#build-cross-platform 'Build cross-platform')
- [Deploy your database](#deploy-your-database 'Deploy your database')
- [Status and Roadmap](#status-and-roadmap 'Status and Roadmap')

[](#about-imp)

## About IMP

### What is IMP?

**_IMP_** is an open-source cross-platform **_I_** nventory **_M_** anagement **_P_** latform with integrated Point of Sale (PoS) written with the goal of being entirely platform-agnostic.  To facilitate this, IMP utilizes the Tauri framework to create lightweight and secure cross-platform binaries from a TypeScript/React frontend for every desktop OS.  While the Tauri framework is still at the release candidate stage and does not yet support compiling mobile (iOS and Android) binaries these features are on the Tauri roadmap, so it should eventually be simple to build for all 5 platforms in the future from one codebase without any platform-specific code.

### Current version

IMP uses the semantic versioning system.  The current build of IMP is version `0.9.0`

[](#develop)


## Documentation

[](#documentation)

[TypeDoc Documentation Page on GitHub Pages](https://zindrek.github.io/IMP/docs/)

[ToC](#table-of-contents 'Return to Table of Contents')

## Develop

1. Install your IDE
2. Fork this repository and clone it to your development machine
3. Run `npm run setup` and follow the instructions in your terminal.  This process will install the prerequisites except for your IDE, and should only be required once.
4. Run `yarn tart` to start a hot-reloadable development server in a Tauri application

[ToC](#table-of-contents 'Return to Table of Contents')
### Prerequisites

You will need to install the following things to build IMP:

- [VS Code](https://code.visualstudio.com/download) to edit and lint code **_OR_** a different IDE / text editor that supports both Typescript and Rust
- [Node.js](https://nodejs.org/en/download/), as it is a prerequisite for most of the frontend code (but [Deno](https://deno.land) might also work)
- [Rust](https://www.rust-lang.org/tools/install), as it is a prerequisite for Tauri.
- [Docker Swarm](https://docs.docker.com/engine/swarm) **_OR_** another way to deploy MariaDB

[ToC](#table-of-contents 'Return to Table of Contents')
### Languages

- [Rust version 1.6^](https://www.rust-lang.org/) - for Tauri's backend code
- [Typescript version 4.6^](https://www.typescriptlang.org/) - for Tauri's frontend code, React.JS, and Material-UI

[ToC](#table-of-contents 'Return to Table of Contents')
### Front end technologies

- [React.JS version 18^](https://reactjs.org/) using [create-react-app](https://create-react-app.dev/) - web components library
- [Material-UI version 5^](https://material-ui.com/) - React.JS component and styling library
- [Tauri version 1.0.0-rc.4](https://tauri.studio) - cross-platform desktop framework for compiling web applications

[ToC](#table-of-contents 'Return to Table of Contents')
### Back end technologies

- [MariaDB version 10.7.3^](https://mariadb.org/) - MySQL-compatible database
- [API]() - REST API to make CRUD calls to the MariaDB database
[ToC](#table-of-contents 'Return to Table of Contents')

[](#build-for-web)

### Build for web

Run `yarn tart-zip` to build and zip a servable web directory to the `output` directory with the extension `.zip`.  This directory is meant for deployment to a web server such as [NGINX](https://nginx.org/en/) or [Apache](https://httpd.apache.org/).

[ToC](#table-of-contents 'Return to Table of Contents')

### Build for your OS

[](#build-for-your-os)

Run `yarn tart-bundle` to build a double-clickable installer for your operating system to the `output` directory with the extension `.dmg` (macOS), `.msi`  (Windows), or `.deb`(Debian-like linux distros).  These artifacts are meant for end users to install the application.

[ToC](#table-of-contents 'Return to Table of Contents')

### Build cross platform

[](#build-cross-platform)

[ToC](#table-of-contents 'Return to Table of Contents')
### Running `yarn tart-bundle` on multiple platforms

You can run `yarn tart-bundle` on multiple OSes and produce the installer on each of them.  We recommend automating this process with [GitHub Actions](https://github.com/actions/) for ease of use and to lower processor load on developer machines.

[ToC](#table-of-contents 'Return to Table of Contents')
### Using GitHub Actions

You can use [Tauri Actions](https://github.com/tauri-apps/tauri-action) to easily build for linux, macOS, and Windows.  Fundamentally, this is just a way to run `yarn tart-bundle` on multiple OSes at once on GitHub's servers.

[ToC](#table-of-contents 'Return to Table of Contents')

## Deploy your database

[](#deploy-your-database)

### Docker Swarm

The file `imp-stack.yml` contains inline instructions and defines a Docker Swarm stack that deploys a MariaDB database.  This is the simplest way to deploy the database for most users.  If you happen to be a user who knows more about deploying MariaDB, feel free to deploy however you like - IMP does not discriminate.

[ToC](#table-of-contents 'Return to Table of Contents')

## Status and Roadmap

[](#status-and-roadmap)

### current project status

- version `0.9.0`
- `Nginx` server status:
    - ✅ Docker stack deploys performance-optimized version
    - ✅ Docker instance is reachable
- `MariaDB` server status:
    - ✅ Docker stack deploys
    - ✅ Docker instance is reachable
    - ✅ credentials created from .env file
    - ✅ database created
    - ❌ table created
    - ❌ data rows populated

[ToC](#table-of-contents 'Return to Table of Contents')
## Milestones

[ToC](#table-of-contents 'Return to Table of Contents')

### 0.9.0 - database functionality
- GitHub issue #3 - in progress
- TypeScript - create interface to represent database rows - in progress
- TypeScript - create sql call functions - in progress
- TypeScript - add sql call function to purchase cart button
- TypeScript - add sql call function to restock cart button
- TypeScript - create submit inventory changes action
- TypeScript - create submit inventory changes component for InventoryView
- TypeScript - change appearance of inventory row to reflect changes not yet saved to the database
- SQL - create sql table in live SQL instance
- SQL - populate database with production data 

[ToC](#table-of-contents 'Return to Table of Contents')
### 1.0.0 - UI polish & Desktop application, general code cleanup
- GitHub - add `Tauri Actions` to repo to automate desktop builds
- GIMP - cleanup images/imp.png image matte line
- Tauri - implement autoupdater key for desktop builds (see also `yarn tart-updater-sign` script in `package.json`)
- Tauri - add menubar entries to tauri application so that it can be quit/minimized/etc via standard keyboard shortcuts

[ToC](#table-of-contents 'Return to Table of Contents')

### Other features this program would have in a production environment
- _`v.user.authentication`_ utilize a real authentication system such as [LDAP](https://ldap.com/) or [OAuth](https://oauth.net/) with customizable privilege selection for users and groups
- _`v.digital.payments`_ credit card and other digital (_PayPal_, _Apple Pay_, _Google Pay_, bank wires, cryptocurrency, etc.) payment processing functionality
- _`v.real.hardware`_ interface with hardware such as cash drawers, inventory scanners, [RFID tags](https://en.wikipedia.org/wiki/Radio_frequency_identification_and_tracking_device), receipt printers, loyalty card writers, etc
- _`v.data.reporting`_ provide a reporting system for data analysis of sales, profitability, and data visualization
- _`v.theme.builder`_ a theme builder that allows the user to create custom MUI [Themes] for IMP to match their brand using the GUI
- _`v.modern.database`_ utilize a [MongoDB](https://github.com/mongodb/mongo) or [Redis](https://redis.io/) database for data storage
- _`v.clustered.database`_ cluster the database across an organization's hardware for reliabilty, scalability, redundancy, performance, etc
- _`v.local.cache`_ bundle an external MongoDB binary into Tauri builds for ease of deployment or local database caching
- _`v.mobile.version`_ mobile app builds using a Tauri feature (on their roadmap, but not yet implemented) built from one existing codebase
- _`v.user.training`_ provide a tutorial mode for new users in addition to traditional documentation to familiarize them with IMP's features

[ToC](#table-of-contents 'Return to Table of Contents')
