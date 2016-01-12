'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const helmet = require('helmet');
const compression = require('compression');

module.exports = function (config) {
  const app = express();
  app.use(compression());

  // Environment dependent middleware
  if (process.env.NODE_ENV === 'development') {
    // Enable logger (morgan)
    app.use(morgan('dev'));
  }

  app.use(bodyParser.json());
  app.use(function (error, req, res, next) {
    next(new XError(err.g.input).ex(error));
  });

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());

  require('../app/routes')(app, config);

  return app;
}