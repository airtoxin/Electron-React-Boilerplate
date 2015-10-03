(function() {
  var React = require('react');
  var Main = require('./main/Main.js');
  var remote = window.require('remote');

  window.React = React;

  React.render(<Main />, document.body);
})();
