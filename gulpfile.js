'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp');

function watchAndRebuild() {
  gulp.watch(['./compile/**/*', '!./compile/node_modules/**/*'], ['build']);
}

function watchAndRecompile() {
  gulp.watch('./src/component/**/*', ['browserify']);
  gulp.watch(['./src/index.html', './src/main.js'], ['through']);
  gulp.watch(['./src/**/*.js', './index.js', '!./src/component/**/*'], ['transpile']);
  gulp.watch('./style/**/*', ['less']);
}

gulp.task('watch-all', function() {
  watchAndRecompile();
  watchAndRebuild();
});

gulp.task('watch-compile-build', function() {
  runSequence('compile', 'build', 'watch-all');
});

gulp.task('rebuild', function() {
  runSequence('compile', 'build');
});

gulp.task('watch-compile', ['build'], watchAndRecompile);
gulp.task('watch-build', ['build'], watchAndRebuild);

gulp.task('default', ['watch-compile-build']);
