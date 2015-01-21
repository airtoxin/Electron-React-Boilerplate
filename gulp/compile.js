var gulp = require( 'gulp' );

gulp.task( 'compile', [
	'react',
	'install',
	'through',
	'less'
] );
