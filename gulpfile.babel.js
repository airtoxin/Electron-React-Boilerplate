'use babel';

import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

requireDir('./gulp');

function watchAndRebuild() {
  gulp.watch(['./compile/**/*', '!./compile/node_modules/**/*'], ['build']);
}

function watchAndRecompile() {
  gulp.watch('./compile/src/component/**/*', ['browserify']);
  gulp.watch(['./src/index.html', './src/main.js'], ['through']);
  gulp.watch(['./src/**/*.js'], ['transpile']);
  gulp.watch('./style/**/*', ['less']);
}

function watchAndRetest() {
  gulp.watch(['./test/**/*.e2e.js'], ['test:e2e']);
  gulp.watch(['./test/**/*.js', '!./test/**/*.e2e.js'], ['test:core']);
}

gulp.task('watch-retest', ['watch-all'], function() {
  watchAndRetest();
});

gulp.task('watch-all', function() {
  watchAndRecompile();
  watchAndRebuild();
});

gulp.task('watch-compile-build', function() {
  runSequence('compile', 'build', 'watch-all');
});

gulp.task('watch-compile', ['build'], watchAndRecompile);
gulp.task('watch-build', ['build'], watchAndRebuild);

gulp.task('default', ['watch-compile-build']);
