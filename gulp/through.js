'use strict';

var gulp = require('gulp');

gulp.task('through', function() {
  return gulp.src(['./src/index.html', './src/main.js'], { base: './' })
  .pipe(gulp.dest('./compile'));
});
