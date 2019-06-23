'use strict'

const Purify = require('purify-int')
const Crypto = require('crypto')

// DATA IMPORT
const latin = require('../data/256Latin.js')
const { asUpper, asLower } = require('../data/letters.js')

// INTERNAL
function foundation(base) {
	const byteCount = makeByteCount(base)
	return promiseCryptoRBytes(byteCount)
	.then(buf => buf.toString('hex'))
}

function numberFoundation(base) {
	const trueBase = Math.abs(base)
	return foundation(trueBase)
	.then(hex => parseInt(hex, 16) % trueBase)
}

function stringFoundation(base) {
	const trueBase = Math.abs(base)
	return promiseCryptoRBytes(trueBase)
	.then(buf => buf.toString('hex'))
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

async function randomLetter(count = 3, source) {
	let ret = ''
	for (let i = 0; i < count; i++) {
		const index = await numberFoundation(25)
		ret += source[index]
	}
	return ret
}

// EXTERNAL
function flexRange(v = 1) {
	// v = (v > 0) ? v : --v
	const pureV = Purify.asInt(v, 1)
	return numberFoundation(pureV)
	.then(res => (pureV < 0 && res !== 0) ? res * -1 : res)
}
function setRange(v1 = -100, v2 = 100) {
	v1 = Purify.asInt(v1, 1)
	v2 = Purify.asInt(v2, 1)
	// v1 = offsetNum(Purify.asInt(v1, 1))
	// v2 = offsetNum(Purify.asInt(v2, 1))
	let high, low
	if (v1 < v2) {
		high = v2
		low = v1
	} else if (v1 > v2) {
		high = v1
		low = v2
	} else {
		return flexRange(v2)
		// return flexRange(offsetNum(v2, true))
	}
	const baseValue = high - low
	return numberFoundation(baseValue)
	.then(res => (baseValue < 0) ? (res * -1) + low : res + low)
}

function azString(len = 10, upper = true) {
	if (upper) {
		return randomLetter(len, asUpper)
	} else {
		return randomLetter(len, asLower)
	}
}
function randomString(len = 10) {
	return stringFoundation(len)
	.then(hex => hex.slice(0, len))
}

async function randomWords(len = 5) {
	let ret = []
	for (let i = 0; i < len; i++) {
		const index = await numberFoundation(255)
		ret.push(latin[index])
	}
	return ret.join(' ')
}


module.exports = {
	flexRange,
	setRange,
	azString,
	randomString,
	randomWords
}
