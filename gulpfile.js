var gulp = require("gulp");
var babelify = require("babelify");
var browserSync = require('browser-sync');
var browserify = require('gulp-browserify'); 
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var jscs = require('gulp-jscs');



gulp.task('js', function () {
  return gulp.src("js/app.js")
    .pipe(concat('all.js'))
    .pipe(browserify({transform: [babelify]}))
    .pipe(gulp.dest("dist/js"));
});

gulp.task('js-minify', function () {
  return gulp.src("js/app.js")
    .pipe(concat('all.js'))
    .pipe(browserify({transform: [babelify]}))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task('lint', function () {
  return gulp.src("js/**/*.js")
    .pipe(jscs({preset:'airbnb', esprima:'esprima-fb'}));
});

gulp.task('js-watch', ['lint', 'js'], function(){
    browserSync.reload();
});

gulp.task('serve', ['js'], function () {
    // Proxy to django dev server
    browserSync({
        proxy: "localhost:8000"
    });
    // add browserSync.reload to the tasks array to make
    gulp.watch('js/**/*.js', ['js-watch']);
});
