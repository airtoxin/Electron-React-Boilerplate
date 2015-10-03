var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('transpile', function() {
  return gulp.src(['./src/**/*.js', './src/component'], { base: './' })
    .pipe(babel())
    .pipe(gulp.dest('./compile'));
});
