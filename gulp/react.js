var gulp = require( 'gulp' );
var react = require( 'gulp-react' );

gulp.task( 'react', function () {
	return gulp.src( './component/**/*' )
		.pipe( react() )
		.pipe( gulp.dest( './compile/component' ) );
} );
