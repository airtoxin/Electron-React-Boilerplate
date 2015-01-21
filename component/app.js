( function () {
	var React = require( 'react' ),
		Main = require( './main/Main.js' );

	window.React = React;

	React.render( <Main />, document.body );
} )();
