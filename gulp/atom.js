var gulp = require('gulp');
var atom = require('gulp-atom');
var symlink = require('gulp-sym');
var fs = require('fs');
var path = require('path');
var runSequence = require('run-sequence');

var settings = {
	srcPath: './compile',
	releasePath: './build',
	cachePath: './cache',
	version: 'v0.26.0',
	rebuild: false,
	platforms: ['darwin-x64']
};

var platformPath = function(platform) {
	return path.join(
		settings.releasePath, 
		settings.version,
		platform,
		'/Electron.app/Contents/Resources/app'
	);
};
var platforms = settings.platforms.map(function(platform){
	return platformPath(platform);
});


gulp.task('atom-deploy', function() {
	try { 
		platforms.forEach(fs.unlinkSync);
	} catch(err){}
	return atom(settings);
});

gulp.task('atom-soft', function() {
	return gulp
		.src(settings.platforms.map(function(){
			return settings.srcPath;
		}))
		.pipe(symlink(platforms, { force: true }));
});

gulp.task('atom', function(){
	runSequence('atom-deploy', 'atom-soft');
} );
