var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );

requireDir( './gulp' );

function watchAndRebuild() {
	var watcher = gulp.watch( ['./compile/**/*'], [ 'build' ] );
	watcher.on('change', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
}

function watchAndRecompile() {
	gulp.watch( './component/**/*', [ 'browserify' ] );
	gulp.watch( [ './index.html', './index.js' ], [ 'through' ] );
	gulp.watch( './style/**/*', [ 'less' ] );
}

gulp.task( 'watch-compile-build', [ 'compile', 'build' ], function () {
	watchAndRecompile();
	watchAndRebuild();
} );

gulp.task( 'watch-compile', [ 'build' ], watchAndRecompile );
gulp.task( 'watch-build', [ 'build' ], watchAndRebuild );

gulp.task( 'default', [ 'watch-compile-build' ] );
