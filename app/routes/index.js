'use strict';

const usersAPI = require('./user.router.js');
const devicesAPI = require('./device.router.js');

module.exports = function (app, config) {
  app.get('/', function (req, res) {
    res.send('Hello world!');
  });

  app.get('/:name', function (req, res) {
    res.send('Hello, ' + encodeURIComponent(req.params.name) + '!');
  });

  app.use('/api/user', usersAPI);
  app.use('/api/devices', devicesAPI);
};
