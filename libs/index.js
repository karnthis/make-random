'use strict'

const Purify = require('purify-int')
const Crypto = require('crypto')

// INTERNAL
function foundation(base) {
	const pureBase = Math.abs(base)
	const byteCount = Math.ceil(pureBase / 256)
	const hexString = Crypto.randomBytes(byteCount).toString('hex')
	return parseInt(hexString, 16) % pureBase
}

// EXTERNAL
function flexRange(v) {
	const pureV = Purify.asInt(v)
	const result = foundation(pureV)
	return (pureV < 0) ? result * -1 : result
}

module.exports = { flexRange }
