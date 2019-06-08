'use strict'
// Through v0.1.6

const Purify = require('purify-int')
const { deprecate } = require('../util')

function ceil(max) {
	const safeMax = Purify.asInt(max);
	deprecate("make-random.ceil()", "0.1.6");
	return Math.ceil(Math.random() * safeMax);
}
function floor(max) {
	const safeMax = Purify.asInt(max);
	deprecate("make-random.floor()", "0.1.6");
	return Math.floor(Math.random() * safeMax);
}

module.exports = {
	floor,
	ceil
}