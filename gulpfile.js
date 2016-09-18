var gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	jshint = require('gulp-jshint'),
	imagemin = require('gulp-imagemin'),
	minify = require('gulp-minify'),
	minifyHtml = require("gulp-minify-html"),
	prettify = require('gulp-html-prettify'),
	beautify = require('gulp-jsbeautify'),
	convertNewline = require("gulp-convert-newline");

gulp.task('jsLint', function() {
	gulp.src('/**/*.js') // path to your files
		.pipe(jshint())
		.pipe(jshint.reporter()); // Dump results
});


gulp.task('minifyMainJs', function() {
	gulp.src('app/js/*.js')
		.pipe(minify({
			src: '-debug.js',
			min: '.js'
		}))
		.pipe(gulp.dest('dist/js/'))
});

gulp.task('minifyViewsJs', function() {
	gulp.src('app/views/js/*.js')
		.pipe(minify({
			ext: {
				src: '-debug.js',
				min: '.js'
			}
		}))
		.pipe(gulp.dest('dist/views/js/'))
});

gulp.task('minifyMainHTML', function() {
	gulp.src('./app/*.html') // path to your files
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/'));
});

gulp.task('minifyViewsHTML', function() {
	gulp.src('./app/views/*.html') // path to your files
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist/views/'));
});

gulp.task('minifyMainCss', function() {
	return gulp.src('app/css/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('minifyViewsCss', function() {
	return gulp.src('app/views/css/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('./dist/views/css/'));
});

gulp.task('minifyMainImages', () =>
	gulp.src('app/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img/'))
);

gulp.task('minifyViewsImages', () =>
	gulp.src('app/views/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/views/images/'))
);

gulp.task('prettifyMainHTML', function() {
	gulp.src('app/*.html')
		.pipe(prettify({
			indent_char: '	',
			indent_size: 1
		}))
		.pipe(gulp.dest('app/'))
});

gulp.task('prettifyViewsHTML', function() {
	gulp.src('app/views/*.html')
		.pipe(prettify({
			indent_char: '  ',
			indent_size: 1
		}))
		.pipe(gulp.dest('app/views/'))
});

gulp.task('beautifyViewsJS', function() {
	gulp.src('app/views/js/*.js')
		.pipe(beautify({
			indent_char: '	',
			indent_size: 1
		}))
		.pipe(gulp.dest('app/views/js/'));
});

gulp.task('beautifyGulpJS', function() {
	gulp.src('gulpfile.js')
		.pipe(beautify({
			indent_char: '	',
			indent_size: 1
		}))
		.pipe(gulp.dest('./'));
});

gulp.task("crlfMainHTML", function() {
    return gulp.src("app/index.html")
        .pipe(convertNewline({
            newline: "crlf"
        }))
        .pipe(gulp.dest("app/"));
});

gulp.task("crlfViewsHTML", function() {
    return gulp.src("app/views/pizza.html")
        .pipe(convertNewline({
            newline: "crlf"
        }))
        .pipe(gulp.dest("app/views/"));
});