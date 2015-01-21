var app = require( 'app' )
var BrowserWindow = require( 'browser-window' );

require( 'crash-reporter' ).start();

var mainWindow = null;

app.on( 'window-all-closed', function () {
	if ( process.platform !== 'darwin' ) app.quit();
} );

app.on( 'ready', function () {
	mainWindow = new BrowserWindow( {
		width: 480,
		height: 360,
		'min-width': 480,
		'min-height': 280,
		frame: true
	} );
	mainWindow.loadUrl( 'file://' + __dirname + '/index.html' );
	mainWindow.on( 'closed', function () {
		mainWindow = null;
	} );
} );
