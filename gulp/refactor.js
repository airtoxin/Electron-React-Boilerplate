var gulp = require( 'gulp' );
var jscs = require( 'gulp-jscs' );
var files_matcher = [ './component/**/*.js', './*.js' ];

gulp.task( 'check-syntax', function() { 
  return gulp.src(files_matcher)
    .pipe(jscs())
    .pipe(jscs.reporter());
} );

gulp.task( 'refactor', function() {
  return gulp.src(files_matcher)
    .pipe(jscs({
      fix: true
    }))
    .pipe(gulp.dest('./'));
} );

