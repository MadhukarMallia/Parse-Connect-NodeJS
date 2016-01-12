'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var prettify = require('gulp-jsbeautifier');

gulp.task('beautify', function () {
  gulp.src(paths.js, {
      base: '.'
    })
    .pipe(prettify({
      config: '.jsbeautifyrc',
      mode: 'VERIFY_AND_WRITE'
    }))
    .pipe(gulp.dest('.'));
});

