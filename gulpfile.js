var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );
var runSequence = require('run-sequence');

requireDir( './gulp' );

function watchAndRebuild() {
	gulp.watch( ['./compile/**/*', '!./compile/node_modules/**/*'], [ 'build' ] );
}

function watchAndRecompile() {
	gulp.watch( './component/**/*', [ 'browserify' ] );
	gulp.watch( [ './index.html', './index.js' ], [ 'through' ] );
	gulp.watch( './style/**/*', [ 'less' ] );
}

gulp.task( 'watch-all', function () {
	watchAndRecompile();
	watchAndRebuild();
} );

gulp.task( 'watch-compile-build', function () {
  runSequence('compile', 'build', 'watch-all')
} );

gulp.task( 'watch-compile', [ 'build' ], watchAndRecompile );
gulp.task( 'watch-build', [ 'build' ], watchAndRebuild );

gulp.task( 'default', [ 'watch-compile-build' ] );
