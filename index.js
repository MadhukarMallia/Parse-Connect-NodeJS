'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 3030
});

const config = 'hey man';

require('./routes')(server, config);

server.start(() => {
  console.log('Server running at:', server.info.uri);
});