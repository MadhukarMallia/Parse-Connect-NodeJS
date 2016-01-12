/**
 * Controller factory function
 */

'use strict';

const _ = require('lodash');

function logToConsole(data) {
  console.log('------------------');
  console.log(JSON.stringify(data, null, ' '));
}

module.exports = function (promiseFn, opts) {
  const _opts = _.merge({
    errorCode: 1000,
    successHTTPCode: 200,
    errorHTTPCode: 500,
    errorHTTPResponse: 'Internal error'
  }, opts);

  return function (req, res, next) {
    // Wrap every controller
    new Promise(function (resolve, reject) {
        // Controllers are expected to return either a promise or value
        return promiseFn(req).then(resolve, reject);
      })
      .then(function (data) {

        if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'development-eu') {
          logToConsole(data);
        }

        if (data === undefined || data === '') {
          res.status(200).send();
        } else if (data.type === 'file') {
          res.download(data.path);
        } else {
          res.status(_opts.successHTTPCode).json(data);
        }

      }, function (e) {
        // Handled error
        if (e.safe) {

          const errCode = e.httpCode || _opts.errorHTTPCode;
          const errObj = {
            code: e.code || _opts.errorCode,
            msg: e.httpResponse || _opts.errorHTTPResponse
          };
          const errData = (process.env.NODE_ENV === 'development') && _.assign(e, errObj) || errObj;

          if (process.env.NODE_ENV === 'development') {
            logToConsole(errData);
          }

          res.status(errCode).json(errData);
        } else {
          // Unhandled error, let the error handling middleware do its job
          next(e);
        }
      });
  };
};

