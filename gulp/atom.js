var gulp = require('gulp');
var atom = require('gulp-atom');
var symlink = require('gulp-sym');
var fs = require('fs');
var runSequence = require('run-sequence');

var s = {
	srcPath: './compile',
	releasePath: './build',
	cachePath: './cache',
	version: 'v0.26.0',
	rebuild: false,
	platforms: ['darwin-x64'] // Set at the first place your dev platform for correct linking of resources
}
var appPath = s.releasePath + '/' + s.version + '/' + s.platforms[0] + '/Electron.app/Contents/Resources/app';


gulp.task('atom-deploy', function() {
	try { 
		fs.unlinkSync(appPath); 
	} catch(err){}
	return atom(s);
});

gulp.task('atom-soft', function() {
	return gulp
		.src(s.srcPath)
		.pipe(symlink(appPath, { force: true }));
});

gulp.task('atom', function(){
	runSequence('atom-deploy', 'atom-soft');
} );
