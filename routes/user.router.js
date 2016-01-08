'use strict';

const parseAPI = require('../services/parse-api.service');

function getUsers (req, reply) {
	// parseAPI.fetchUsersFromParse().then(function (err) {
	// 	console.log(err);
	// });
  var users = parseAPI.fetchUsersFromParse();
  console.log(users);
	reply(users);
}

function addUser (req, reply) {
	parseAPI.insertUsersToParse().then(function (err) {
		console.log(err);
	});
}

module.exports = {
	getUsers: getUsers,
	addUser: addUser
};