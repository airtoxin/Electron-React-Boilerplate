'use strict';

var gulp = require('gulp');

gulp.task('compile', [
	'browserify',
	'through',
  'transpile',
	'less',
	'install',
]);
