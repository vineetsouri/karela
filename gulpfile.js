var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    sass   = require("gulp-sass");

var cssFiles = [
  "./bower_components/bootstrap/dist/css/bootstrap.css",
  "./bower_components/bootswatch/flatly/bootstrap.css",
  "./css/src/app.css"
];

var jsFiles = [
  "./bower_components/jquery/dist/jquery.js",
  "./bower_components/bootstrap/dist/js/bootstrap.js",
  "./bower_components/angular/angular.js",
  "./js/src/app.js"
];

gulp.task("sass", function () {
  gulp.src("./css/src/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css/src/"));
});

gulp.task('css', ['sass'], function() {
  gulp.src(cssFiles)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('js', function() {
  gulp.src(jsFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function() {
  gulp.watch('./css/src/*.scss', ['css']);
  gulp.watch('./js/src/*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);
