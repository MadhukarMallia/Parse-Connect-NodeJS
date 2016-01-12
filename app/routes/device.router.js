'use strict';

const router = require('express').Router();
const devicesCtrl = require('../controllers/devices.controller.js');
const build = require('../../lib/utils/controller-factory');

router.get('/', build(devicesCtrl.index));

module.exports = router;

