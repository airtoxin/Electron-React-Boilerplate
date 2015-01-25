var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );

requireDir( './gulp' );

gulp.task( 'watch-compile', [ 'compile' ], function () {
	gulp.watch( './component/**/*', [ 'browserify' ] );
	gulp.watch( [ './index.html', './index.js' ], [ 'through' ] );
	gulp.watch( './style/**/*', [ 'less' ] );
} );

gulp.task( 'watch-build', [ 'build' ], function () {
	gulp.watch( './compile/**/*', [ 'build' ] );
} );

gulp.task( 'default', [ 'watch-compile', 'watch-build' ] );
