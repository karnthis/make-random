'use strict'

const Purify = require('purify-int')
const Crypto = require('crypto')

const debug = true

// INTERNAL
function foundation(base) {
	const trueBase = Math.abs(base)
	const byteCount = makeByteCount(trueBase)
	// if (debug) console.log(byteCount)
	const hexString = Crypto.randomBytes(byteCount).toString('hex')
	// if (debug) console.log(parseInt(hexString, 16))
	return parseInt(hexString, 16) % trueBase
}

function makeByteCount(max) {
	let ret = 1
	let cycle = 256
	while (max > cycle) {
		cycle *= 256
		ret++
	}
	return ret
}

function offsetNum(v, invert = false) {
	if (!invert) {
		return (v > 0) ? ++v : --v
	} else {
		return (v < 0) ? ++v : --v
	}
	
}

// EXTERNAL
function flexRange(v = 1) {
	v = (v > 0) ? ++v : --v
	const pureV = Purify.asInt(v, 1)
	const result = foundation(pureV)
	console.log(result)
	return (pureV < 0 && result !== 0 ) ? result * -1 : result
}

function setRange(v1 = -100, v2 = 100) {
	v1 = offsetNum(Purify.asInt(v1, 1))
	v2 = offsetNum(Purify.asInt(v2, 1))
	let high, low
	if (v1 < v2) {
		high = v2
		low = v1
	} else if (v1 > v2) {
		high = v1
		low = v2
	} else {
		return flexRange(offsetNum(v2,true))
	}
	const baseValue = high - low
	const result = foundation(baseValue)
	return (baseValue < 0) ? (result * -1) + low : result + low
}

console.log(flexRange(-5))
// console.log(setRange(20, 10))

module.exports = { flexRange, setRange }
