# Electron-React-Boilerplate
Electron app with React.js

![](./docs/screenshot.png)
# How to develop
1. `npm i`
2. `npm run install-atom`
3. `npm start`
4. open application in build directory
5. add some react components and styles
6. reload application (⌘+R)

# Electron api calling
To call Electron's api, it is necessary to use window.require because, browserify rewrites require statement.

ex) `var remote = window.require( 'remote' );`
