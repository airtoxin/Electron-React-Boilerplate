'use strict';

var gulp = require('gulp');

gulp.task('compile', [
  'transpile',
	'through',
	'browserify',
	'less',
	'install',
]);
