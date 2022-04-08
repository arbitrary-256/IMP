# IMP - Inventory Management Platform roadmap

## 0.8.0 - local state functionality
- create `CHANGE_IMAGE` action
- create `ImageChanger` component
- add `ImageChanger` to Receiving tab
- add `ImageChanger` to inventory row
- create JSDoc comments for every function - 95% done

## 0.9.0 - database functionality
- create TypeScript interfaces to represent database rows
- create sql table in live SQL instance
- create `.env` file template for database connection
- enable environment variables in database connection at build
- populate database with production data
- create sql call functions
- create submit inventory changes component
- create submit inventory changes action

## 1.0.0 - Styling & Desktop application
- implement light and dark themes
- cleanup login screen image matte
- add menubar entries to tauri application so that it can be quit/minimized/etc via standard keyboard shortcuts
- remove all `// TODO:` comments
