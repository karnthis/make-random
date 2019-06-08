'use strict'

const Purify = require('purify-int')
const Crypto = require('crypto')

// INTERNAL
function foundation(base) {
	const trueBase = Math.abs(base)
	const byteCount = makeByteCount(trueBase)
	return promiseCryptoRBytes(byteCount)
	.then(buf => buf.toString('hex'))
	.then(hex => parseInt(hex, 16) % trueBase)
}

function promiseCryptoRBytes(byteCount = 1) {
	return new Promise((resolve, reject) => {
		Crypto.randomBytes(byteCount, (err, buf) => {
			if (err) throw err
			resolve(buf)
		})
	})
}

function makeByteCount(max) {
	let ret = 1
	let cycle = 256
	while (max > cycle) {
		cycle *= 256
		ret++
	}
	if (ret == 1) ret++
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
	return foundation(pureV)
	.then(res => (pureV < 0 && res !== 0) ? res * -1 : res)
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
		return flexRange(offsetNum(v2, true))
	}
	const baseValue = high - low
	return foundation(baseValue)
	.then(res => (baseValue < 0) ? (res * -1) + low : res + low)
}

module.exports = { flexRange, setRange }
