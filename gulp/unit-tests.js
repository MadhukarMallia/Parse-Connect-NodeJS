'use strict';

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var isparta = require('isparta');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');
var paths = gulp.paths;

gulp.task('test', function (cb) {
  process.env.NODE_ENV = 'test';
  gulp.src(paths.js)
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter
    })) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['app/**/*.spec.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests finished
        .on('end', cb);
    });
});

gulp.task('run-test', function () {
  runSequence('lint:build', 'test', function (error) {
    if (error) {
      console.log('Error in running the test');
    } else {
      console.log('Successfully run the tests');
    }
  });
});

