var gulp = require( 'gulp' );

gulp.task( 'through', function () {
	return gulp.src( [ './index.html', './index.js' ] )
		.pipe( gulp.dest( './compile' ) );
} );
