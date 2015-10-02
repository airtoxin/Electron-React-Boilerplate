var gulp = require('gulp');
var jscs = require('gulp-jscs');
var files = require('./js_files.js');

gulp.task('check-syntax', function() {
  return gulp.src(files, { base: './' })
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('refactor', function() {
  gulp.src(files, { base: './' })
    .pipe(jscs({ fix: true }))
    .pipe(jscs.reporter())
    .pipe(gulp.dest('./'));
});
