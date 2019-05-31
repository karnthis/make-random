'use strict';

const dep = require('./deprecated/v1') // floor(), ceil()
const libs = require('./libs') // range()

module.exports = Object.assign({}, dep, libs)
