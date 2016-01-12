'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'app',
  js: ['index.js',
    'gulpfile.js',
    'gulp/**/*',
    'app/**/*.js',
    '!app/**/*.spec.js'
  ]
};

require('require-dir')('./gulp');
