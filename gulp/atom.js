'use strict';

var gulp = require('gulp');
var atom = require('gulp-atom');

gulp.task('atom', function() {
  atom({
    srcPath: './compile',
    releasePath: './build',
    cachePath: './cache',
    version: 'v0.30.2',
    rebuild: false,
    platforms: ['darwin-x64'],
  });
});
