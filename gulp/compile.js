var gulp = require('gulp');

gulp.task('compile', [
	'browserify',
	'through',
	'less',
	'install',
]);
