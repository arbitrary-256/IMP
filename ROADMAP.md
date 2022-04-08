# IMP - Inventory Management Platform Features Roadmap

## current version
0.7.9

## 0.8.0 - local state functionality complete
- create `CHANGE_IMAGE` action - in progress
- create `ImageChanger` component - in progress
- add `ImageChanger` component to Receiving tab
- add `ImageChanger` component to inventory row

## 0.9.0 - database functionality complete
- create TypeScript interface to represent database rows
- create sql table in live SQL instance
- create `.env` file template for database connection
- enable environment variables in database connection at build
- populate database with production data
- create sql call functions - in progress
- create submit inventory changes component
- create submit inventory changes action

## 1.0.0 - UI cleanup & Desktop application, general code cleanup
- implement light and dark themes in every component - mostly done
- add `Tauri Actions` to repo to automate builds
- cleanup login screen image matte
- add menubar entries to tauri application so that it can be quit/minimized/etc via standard keyboard shortcuts
- remove all `// TODO:` comments
