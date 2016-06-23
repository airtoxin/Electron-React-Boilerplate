'use strict';

var gulp = require('gulp');
var exec = require('gulp-exec');

var cmd = 'electron-mocha --renderer --compilers js:babel/register';
var reportOptions = { err: true, stderr: true, stdout: true};

gulp.task('test:e2e', function() {
  return gulp
    .src('test/**/*.e2e.js', {
      read: false,
    })
    .pipe(exec(cmd + ' <%= file.path %>'))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('test:core', function() {
  return gulp
    .src(['test/**/*.js', '!test/**/*.e2e.js'], {
      read: false,
    })
    .pipe(exec(cmd + ' <%= file.path %>'))
    .pipe(exec.reporter(reportOptions));
});

gulp.task('test', ['test:e2e', 'test:core']);
