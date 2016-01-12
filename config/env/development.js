'use strict';

module.exports = {
	db: process.env.DB_NAME || 'parse-connect-dev',
	dbUrl: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost')
}; 