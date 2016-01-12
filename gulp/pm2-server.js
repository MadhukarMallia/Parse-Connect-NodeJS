'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('dev-start-pm2', function () {
  exec('pm2 start ./pm2/pm2-dev.json', function (err, stdout, stderr) {
    if (err || stderr) {
      err ? console.log(err) : console.log(stderr);
    } else {
      console.log('started', stdout);
    }
  });
});

gulp.task('dev-stop-pm2', function () {
  exec('pm2 stop parse-connect-dev', function (err, stdout, stderr) {
    if (err || stderr) {
      err ? console.log(err) : console.log(stderr);
    } else {
      console.log('stopped', stdout);
    }
  });
});

gulp.task('dev-delete-pm2', function () {
  exec('pm2 delete parse-connect-dev', function (err, stdout, stderr) {
    if (err || stderr) {
      err ? console.log(err) : console.log(stderr);
    } else {
      console.log('deleted', stdout);
    }
  });
});

gulp.task('dev-kill-pm2', ['dev-stop-pm2', 'dev-delete-pm2']);

