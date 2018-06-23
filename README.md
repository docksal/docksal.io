# docksal.io

Docksal official website (built with [GatsbyJS](https://www.gatsbyjs.org/))

## Local development

1. Clone the repo
2. Run `fin init` and wait for it to start serving the site (it needs to keep running for realtime updates)
3. Open http://devdocksalio.docksal/ (note: Gastby will point to http://devdocksalio.docksal:3000/ - don't use that)

**Note:** `fin init` initializes project from scratch.

To just (re)start the project stack and development server - use `fin develop` instead.

## Custom commands  

- `fin init` - (re)initialize the project (start fresh, drops `node_modules` and and run `npm install`) 
- `fin develop` - starts Gatsby server again (if the server or project stack was stopped). Does NOT do a reset
- `fin build-site` - Generates production GatsbyJS site build in `./public`
