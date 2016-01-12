'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var paths = gulp.paths;

gulp.task('lint', function () {
  return gulp.src([].concat(paths.js))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:build', function () {
  return gulp.src([].concat(paths.js))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

