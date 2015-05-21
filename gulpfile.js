var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );

requireDir( './gulp' );

function watchAndRecompile() {
	gulp.watch( './component/**/*', [ 'browserify' ] );
	gulp.watch( [ './index.html', './index.js' ], [ 'through' ] );
	gulp.watch( './style/**/*', [ 'less' ] );
}

gulp.task( 'watch-compile', function () {
	watchAndRecompile();
} );


gulp.task( 'default', [ 'compile', 'watch-compile' ] );
