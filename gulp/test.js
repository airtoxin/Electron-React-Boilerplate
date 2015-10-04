var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src('test/**/*.js', { read: false }).pipe(mocha({ reporter: 'nyan' }))
})
