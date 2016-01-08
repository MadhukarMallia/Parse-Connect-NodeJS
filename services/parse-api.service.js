'use strict';

const Parse = require('node-parse-api').Parse;

const parseConnect = new Parse(process.env.PARSE_APP_ID, process.env.PARSE_MASTER_KEY);

function fetchUsersFromParse () {
	return parseConnect.find('', function (err, response) {
		console.log('response', response, err);
		return err ? err : response;
  });
}

function insertUsersToParse () {
	return parseConnect.insertUser({
		username: 'Madhukar' + Date.now().toString(),
		password: 'password' + Date.now().toString()
	}, function (err, response) {
		// console.log(err);
		// console.log(response);
		return err ? err : response;
	});
}

module.exports = {
	fetchUsersFromParse: fetchUsersFromParse,
	insertUsersToParse: insertUsersToParse
};
