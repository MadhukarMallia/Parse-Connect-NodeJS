'use strict';

const Parse = require('node-parse-api').Parse;

const parseConnect = new Parse(process.env.PARSE_APP_ID, process.env.PARSE_MASTER_KEY);

function fetchUsersFromParse() {
  return parseConnect.find('', function (err, response) {
    return err ? err : response;
  });
}

function insertUsersToParse() {
  return parseConnect.insertUser({
    username: 'Test-user' + Date.now().toString(),
    password: 'test-password' + Date.now().toString()
  }, function (err, response) {
    return err ? err : response;
  });
}

module.exports = {
  fetchUsersFromParse: fetchUsersFromParse,
  insertUsersToParse: insertUsersToParse
};

