'use babel';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('babel/register');

gulp.task('test', function() {
  return gulp
    .src('test/**/*.js', {
      read: false,
    })
  .pipe(mocha({
    reporter:'nyan',
    compilers: { js: babel },
  }));
});
