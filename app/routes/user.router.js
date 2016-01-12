'use strict';

const router = require('express').Router();
const usersCtrl = require('../controllers/users.controller.js');
const build = require('../../lib/utils/controller-factory');

// function getUsers (req, reply) {
// 	// parseAPI.fetchUsersFromParse().then(function (err) {
// 	// 	console.log(err);
// 	// });
//   var users = parseAPI.fetchUsersFromParse();
//   console.log(users);
// 	reply(users);
// }

// function addUser (req, reply) {
// 	parseAPI.insertUsersToParse().then(function (err) {
// 		console.log(err);
// 	});
// }

// module.exports = {
// 	getUsers: getUsers,
// 	addUser: addUser
// };

router.get('/', build(usersCtrl.index));
router.get('/addUser', build());

module.exports = router;

