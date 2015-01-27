# atomshell-react-boilerplate
Atom-Shell app with React.js

# How to develop
1. `npm i`
2. `npm start`
3. open application in build directory
4. add some react components and styles
5. reload application (⌘+R)

# atom-shell api calling
To call atom-shell's api, it is necessary to use window.require because, browserify rewrites require statement.

ex) `var remote = window.require( 'remote' );`
