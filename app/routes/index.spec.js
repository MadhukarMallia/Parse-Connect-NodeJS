'use strict';

const config = require('../../config/config');

const index = require('./index');

describe('initialize API', function(){
  it('should initialize the API correctly', function(){

    const testRouter = require('express').Router();
    index(testRouter, config);
  });
});