# IMP - Inventory Management Platform

[](#table-of-contents)Version `0.9.1` - Table of Contents

- [What is IMP?](#what-is-imp "This section contains information most useful to newcomers.  If you don't know what IMP is, click here.")
- [Documentation](#documentation "This section contains full documentation for IMP.  If your question wasn't covered in the 'What is Imp?' section above, probably click this next.")
- [Languages, libraries, and tools](#languages-libraries-and-tools "This section contains information about the languages, libraries, and tools that IMP uses.")
- [Client Applications](#client "The IMP frontend application written in TypeScript and ReactJS")
- [Distributable Installers](#distributable-installers "How to package desktop installers to install IMP")
- [Deploying the IMP's Backend](#deploy "How to deploy IMP's backend services")

[](#what-is-imp)

## What is IMP?

**_IMP_** is an open-source cross-platform **_I_** nventory **_M_** anagement **_P_** latform with integrated Point of Sale (PoS) written to be entirely platform-agnostic to both developers and end users.  To facilitate this, IMP utilizes the Tauri framework to compile lightweight and secure cross-platform client application binaries and installers from a TypeScript/React frontend for every desktop OS.

## Documentation

[](#documentation)

[TypeDoc Documentation Page on GitHub Pages](https://zindrek.github.io/IMP/docs/ "This is where IMP's automated documentation is hosted.  If you're looking for the documentation for IMP, this could be a good click for you.")

[ToC](#table-of-contents "Return to Table of Contents")

### Languages, Libraries, and Tools

1. Install prerequisite software packages:

- [VS Code](https://code.visualstudio.com/download  "You need something to edit and lint code in") **_OR_** a different IDE / text editor that supports both Typescript and Rust
- [Docker](https://www.docker.com/products/personal/ "I just really love smiling magic whales with shipping containers on their heads wat more than configuring database connections manually.") **_OR_** another way to deploy MySQL and an api to connect the frontend to it
- [Rust version 1.60.0^](https://www.rust-lang.org/tools/install "Rust is a prerequisite for Tauri's Desktop application framework")
- [Typescript version 4.6.4^](https://www.typescriptlang.org/ "for Tauri's frontend code, React.JS, and Material-UI")
- [Node.js](https://nodejs.org/en/download/ "NodeJS is a major part of our toolchain for React and TypeScript.  Theoretically one day this will be Deno instead, because it's much better.")

2. Fork this repository and clone your fork to your development machine

- On Windows, you must install the [Visual C++ Build Tools](https://aka.ms/vs/17/release/vs_BuildTools.exe "You literally must install these libraries to develop for IMP: 'C++ Build Tools' and 'Node.JS'"), selecting the _C++ Build tools_ and _Node.JS_ options.  These packages are required to compile the IMP desktop applications.

3. Run `yarn setup` and follow the instructions in your terminal.  This process will install the prerequisites except for your IDE, and should only be required once.

- on macOS with Apple Silicon, you must install [Xcode](https://developer.apple.com/xcode/ "Xcode is required to develop IMP on macOS.") to compile the IMP desktop applications.

4. Run scripts in `package.json`'s `scripts` section with the command `yarn <scriptCategory:identifier>`.  For example, `yarn documentation:readme` explains what some of these scripts do.

### Project Dependencies

- [React.JS version 18.1.0^](https://reactjs.org/ "Meta's web components library renders the ui and enforces immutable state in the client") using [create-react-app](https://create-react-app.dev/ "Meta's CLI tool for rapid React.JS bootstrapping")
- [Material-UI version 5.6.3^](https://mui.com/ "Google's styling library for Material Design components in React.JS ")
- [Tauri version 1.0.0-rc.8](https://tauri.studio "lightweight framework for building desktop applications from web applications")
- [Express version 4.18.1^](https://expressjs.com/ "a Node.JS REST API to connect the frontend to the sql database")
- [MariaDB version 10.7.3^](https://mariadb.org/ "or another MySQL-compatible database")

[ToC](#table-of-contents "Return to Table of Contents")

[](#client)
### Client applications

Run `yarn package:react` to build and zip a servable web directory to the `output` directory with the extension `.zip`.  This directory is meant for deployment to a web server such as [NGINX](https://nginx.org/en/) or [Apache](https://httpd.apache.org/).

[](#distributable-installers)
### Packaging distributable installers

Run `yarn package:installer` to build a double-clickable installer for your operating system to the `output` directory with the extension `.dmg` (macOS), `.msi`  (Windows), or `.deb`(Debian-like linux distros).  These installers are suitable for end users to install the React client as a native desktop application.

### Packaging distributable installers on other operating systems with GitHub Actions

You can run `yarn package:installer` on multiple OSes and produce the installer on each of them.  We recommend automating this process with [GitHub Actions](https://github.com/actions/) for ease of use and to lower processor load on developer machines.  You can use [Tauri Actions](https://github.com/tauri-apps/tauri-action) to easily build for linux, macOS, and Windows.  Fundamentally, this is just a way to run `yarn tart-bundle` on multiple OSes at once on GitHub"s servers.

### Deploying the IMP's backend

The file `docker-compose.yml` contains inline instructions and defines a Docker Swarm stack that deploys a SQL database.  This is the simplest way to deploy the database for most users.

[ToC](#table-of-contents "Return to Table of Contents")
