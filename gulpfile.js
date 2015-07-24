var gulp = require("gulp");
var babelify = require("babelify");
var browserSync = require('browser-sync');
var browserify = require('gulp-browserify'); 
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

var DIR_IN = 'js/**/*.js';
var DIR_OUT = 'dist/js';
var APP_FILE = 'js/app.js';
var OUT_FILE = 'main.js';
var OUT_FILE_MIN = 'main.min.js';
var DEV_SERVER = "localhost:8000";


gulp.task('js', function () {
  return gulp.src(APP_FILE)
    .pipe(concat(OUT_FILE))
    .pipe(browserify({transform: [babelify], extensions: ['.jsx']}))
    .pipe(gulp.dest(DIR_OUT));
});

gulp.task('js-minify', function () {
  return gulp.src(APP_FILE)
    .pipe(concat(OUT_FILE_MIN))
    .pipe(browserify({transform: [babelify], extensions: ['.jsx']}))
    .pipe(uglify())
    .pipe(gulp.dest(DIR_OUT));
});

gulp.task('lint', function () {
  return gulp.src(DIR_IN)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('js-watch', ['lint', 'js'], function(){
    browserSync.reload();
});

gulp.task('serve', ['js'], function () {
    // Proxy to django dev server
    browserSync({
        proxy: DEV_SERVER
    });
    // add browserSync.reload to the tasks array to make
    gulp.watch(DIR_IN, ['js-watch']);
});
