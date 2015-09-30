var gulp = require( 'gulp' );
var eslint = require( 'gulp-eslint' );
var files_matcher = [ 'component/**/*.js', 'gulp/**/*.js', '*.js' ];

gulp.task( 'lint', function() {
  return gulp.src(files_matcher, { base: './' })
    .pipe(eslint())
    .pipe(eslint.format());
    //.pipe(eslint.failAfterError());
} );
