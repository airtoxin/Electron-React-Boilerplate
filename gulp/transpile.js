var gulp = require('gulp');
var babel = require('gulp-babel');
var files = require('./js_files.js');

gulp.task('transpile', function() {
  return gulp.src('./index.js')
    .pipe(babel())
    .pipe(gulp.dest('compile'));
});
