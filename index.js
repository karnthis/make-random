'use strict';

const Purify = require('purify-int')
const Crypto = require('crypto')

const makeRandom = {
	ceil(max) {
		const safeMax = Purify.asInt(max);
		deprecate("make-random.ceil()", "0.1.6");
		return Math.ceil(Math.random() * safeMax);
	},
	floor(max) {
		const safeMax = Purify.asInt(max);
		deprecate("make-random.floor()", "0.1.6");
		return Math.floor(Math.random() * safeMax);
	}
};

function deprecate(func, version) {
	console.log(`${func} is deprecated as of ${version} and may be removed at any time.
	Please convert to make-random-legacy if this function is still needed.`)
}

module.exports = makeRandom;
