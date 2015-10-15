'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('babel/register');

gulp.task('test:e2e', function() {
  return gulp
    .src('test/**/*.e2e.js', {
      read: false,
    })
  .pipe(mocha({
    reporter:'nyan',
    compilers: { js: babel },
  }));
});

gulp.task('test:core', function() {
  return gulp
    .src(['test/**/*.js', '!test/**/*.e2e.js'], {
      read: false,
    })
  .pipe(mocha({
    reporter:'nyan',
    compilers: { js: babel },
  }));
});

gulp.task('test', ['test:e2e', 'test:core']);
