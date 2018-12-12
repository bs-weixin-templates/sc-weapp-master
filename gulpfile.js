const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const rename = require('gulp-rename');
const src = path.join(__dirname, './packages');
const dist = path.join(__dirname, './components');
const ext = ['js', 'less', 'json', 'wxml'];

function copy(ext) {
	return gulp.src([src + '/**/*.' + ext]).pipe(gulp.dest(dist));
}

gulp.task('compile-less', () => {
	return gulp
		.src([src + '/**/*.less'])
		.pipe(less())
		.pipe(
			rename(path => {
				path.extname = '.wxss';
			})
		)
		.pipe(gulp.dest(dist));
});


gulp.task('compile-js', () => copy('js'));
gulp.task('compile-json', () => copy('json'));
gulp.task('compile-wxml', () => copy('wxml'));
gulp.task('build', ext.map(ext => 'compile-' + ext));

ext.forEach(ext => {
	gulp.watch(src + '/**/*.' + ext, ['compile-' + ext]);
});
gulp.task('default', ['compile-less', 'compile-js', 'compile-json', 'compile-wxml', 'build']);