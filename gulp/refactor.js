var gulp = require( 'gulp' );
var jscs = require( 'gulp-jscs' );

gulp.task( 'style', function() { 
  return gulp.src([ './component/**/*.js', './index.js' ])
    .pipe(jscs())
    .pipe(jscs.reporter());
} );

gulp.task( 'refactor', function() {
  return gulp.src([ './**/*.js' ])
    .pipe(jscs({
      fix: true
    }))
    .pipe(gulp.dest('./'));
} );

