'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('compile', function() {
  runSequence(
    'transpile',
    'through',
    'browserify',
    'less',
    'install'
  );
});
