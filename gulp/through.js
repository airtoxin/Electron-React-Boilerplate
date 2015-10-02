var gulp = require('gulp');

gulp.task('through', function() {
  return gulp.src(['./index.html', './boot.js'])
  .pipe(gulp.dest('./compile'));
});
