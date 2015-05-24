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
	platforms: ['win32-ia32', 'darwin-x64']
};

var platformPath = function(platform) {
	var resourcesPath;
	switch (platform) {
		// OS X
		case 'darwin':
		case 'darwin-x64':
			resourcesPath = path.join('Electron.app', 'Contents', 'Resources', 'app');
			break;
		// Windows, Linux
		default:
			resourcesPath = path.join('resources', 'app');
			break;
	}
	return path.join(
		settings.releasePath, 
		settings.version,
		platform,
		resourcesPath
	);
};
var platforms = settings.platforms.map(platformPath);


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
