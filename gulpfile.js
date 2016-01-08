'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect-pm2');
var exec    = require('child_process').exec;

// Development server
gulp.task('dev-server', function () {
	nodemon({
    script: 'index.js',
    ext: 'js'
  });
});

// Start development server
gulp.task('dev-start', ['dev-server']);

gulp.task('dev-start-pm2', function () {
	exec('pm2 start ./pm2/pm2-dev.json', function (err, stdout, stderr) {
		console.log('started');
	});
});

gulp.task('dev-stop-pm2', function () {
	exec('pm2 stop parse-connect-dev', function (err, stdout, stderr) {
		console.log('stopped');
	});
});

gulp.task('dev-delete-pm2', function () {
	exec('pm2 delete parse-connect-dev', function (err, stdout, stderr) {
		console.log('deleted');
	});
});

gulp.task('kill-dev', ['dev-stop-pm2', 'dev-delete-pm2']);