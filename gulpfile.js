var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    minify = require('gulp-minify')
    minifyHtml = require("gulp-minify-html");


gulp.task('task-name', function () {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync'], function (){
  // gulp.watch('app/scss/**/*.scss', ['sass']); and other watchers
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);
   gulp.watch('app/views/css/*.css', browserSync.reload);
   gulp.watch('app/views/js/**/*.js', browserSync.reload);
   gulp.watch('app/views/*.html', browserSync.reload);
})

gulp.task('jsLint', function () {
    gulp.src('/*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
});


gulp.task('minifyMainJs', function() {
  gulp.src('app/js/*.js')
    .pipe(minify({
        noSource,

    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('minifyViewsJs', function() {
  gulp.src('app/views/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('dist/views/js'))
});

gulp.task('minifyMainHTML', function () {
    gulp.src('./app/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/'));
});

gulp.task('minifyViewsHTML', function () {
    gulp.src('./app/views/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/views/'));
});

gulp.task('minifyMainCss', function() {
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minifyViewsCss', function() {
    return gulp.src('app/views/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/views/css'));
});

gulp.task('minifyMainImages', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('minifyMainImages', () =>
    gulp.src('app/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'))
);