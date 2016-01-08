'use strict';

const usersAPI = require('./user.router');

module.exports = function (app, config) {
  app.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Hello, world!');
    }
  });

  app.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
  });

  app.route({
    method: 'GET',
    path: '/user/',
    handler: usersAPI.getUsers
  });

  app.route({
    method: 'GET',
    path: '/user/add',
    handler: usersAPI.addUser
  })
}
