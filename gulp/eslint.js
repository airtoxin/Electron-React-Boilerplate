'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var files = require('./js_files.js');

gulp.task('lint', function() {
  return gulp.src(files, { base: './' })
    .pipe(eslint())
    .pipe(eslint.format());

  //.pipe(eslint.failAfterError());
});
