# IMP - Inventory Management Platform Features Roadmap

## current version
0.8.9

## 0.8.0 - local state functionality

## 0.9.0 - database functionality
- create TypeScript interface to represent database rows
- create sql table in live SQL instance
- create `.env` file template for database connection
- enable environment variables in database connection at build
- populate database with production data
- create sql call functions - in progress
- create submit inventory changes component
- create submit inventory changes action

## 1.0.0 - UI polish & Desktop application, general code cleanup
- add `Tauri Actions` to repo to automate builds
- add icons to DarkModeSwitch component (maybe change switch to an Icon Button?)
- cleanup login screen image matte
- add menubar entries to tauri application so that it can be quit/minimized/etc via standard keyboard shortcuts
- remove all `// TODO:` comments

## Future Goals
- mobile app builds using a later Tauri version