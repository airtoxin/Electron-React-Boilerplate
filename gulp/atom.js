var gulp = require( 'gulp' );
var atom = require( 'gulp-atom' );

gulp.task( 'atom', function () {
	return atom( {
		srcPath: './compile',
		releasePath: './build',
		cachePath: './cache',
		version: 'v0.26.0',
		rebuild: false,
		platforms: [ 'darwin-x64' ]
	} );
} );
