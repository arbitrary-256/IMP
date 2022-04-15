# IMP - Inventory Management Platform Features Roadmap

## current version
0.8.9

## 0.8.0 - local state functionality

## 0.9.0 - database functionality
- TypeScript - create interface to represent database rows - in progress
- TypeScript - create sql call functions - in progress
- TypeScript - create submit inventory changes action
- TypeScript - create submit inventory changes component for InventoryView
- SQL - create sql table in live SQL instance - SQL server status: online and reachable, but unconfigured
- SQL - populate database with production data 

## 1.0.0 - UI polish & Desktop application, general code cleanup
- GitHub - add `Tauri Actions` to repo to automate desktop builds
- GIMP - cleanup images/imp.png image matte line
- Tauri - add menubar entries to tauri application so that it can be quit/minimized/etc via standard keyboard shortcuts

## Other features this program would have
- _`user.authentication`_ utilize a real authentication system such as [LDAP](https://ldap.com/) or [OAuth](https://oauth.net/) with customizable privilege selection for users and groups
- _`digital.payments`_ credit card and other digital (_PayPal_, _Apple Pay_, _Google Pay_, bank wires, cryptocurrency, etc.) payment processing functionality
- _`real.hardware`_ interface with hardware such as cash drawers, inventory scanners, [RFID tags](https://en.wikipedia.org/wiki/Radio_frequency_identification_and_tracking_device), receipt printers, loyalty card writers, etc
- _`data.reporting`_ provide a reporting system for data analysis of sales, profitability, and data visualization
- _`theme.builder`_ a theme builder that allows the user to create custom MUI [Themes] for IMP to match their brand using the GUI
- _`modern.database`_ utilize a [MongoDB](https://github.com/mongodb/mongo) or [Redis](https://redis.io/) database for data storage
- _`clustered.database`_ cluster the database across an organization's hardware for reliabilty, scalability, redundancy, performance, etc
- _`local.cache`_ bundle an external MongoDB binary into Tauri builds for ease of deployment or local database caching
- _`mobile.version`_ mobile app builds using a Tauri feature (on their roadmap, but not yet implemented) built from one existing codebase
- _`user.training`_ provide a tutorial mode for new users in addition to traditional documentation to familiarize them with IMP's features
