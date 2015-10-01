var gulp = require('gulp');
var jscs = require('gulp-jscs');
var files = ['component/**/*.js', 'gulp/**/*.js', '*.js'];

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

