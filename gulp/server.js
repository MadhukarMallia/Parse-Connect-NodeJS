'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// Development server
gulp.task('dev-server', function () {
  nodemon({
    script: 'index.js',
    ext: 'js'
  });
});

// Start development server
gulp.task('dev-start', ['dev-server']);

