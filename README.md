# Electron-React-Boilerplate
Electron app with React.js

![](./docs/screenshot.png)
# How to develop
1. `npm i`
2. `npm start`
3. open application in build directory
4. add some react components and styles
5. reload application (⌘+R)

# Electron api calling
To call Electron's api, it is necessary to use window.require because, browserify rewrites require statement.

ex) `var remote = window.require( 'remote' );`

## Refactoring

Run `npm run refactor` to refactor the code in accordance to [jscs preset](http://jscs.info/overview#presets) specified in the `.jscsrc` file.
