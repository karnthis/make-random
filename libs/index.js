'use strict'

const Crypto = require('crypto')
const { cleanInteger } = require('../util/index')

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

async function randomLetter(count = 3, source) {
	let ret = ''
	for (let i = 0; i < count; i++) {
		const index = await numberFoundation(25)
		ret += source[index]
	}
	return ret
}

// EXTERNAL
function random(v = 1) {
	const pureV = cleanInteger(v, 1)
	return numberFoundation(pureV)
	.then(res => (pureV < 0 && res !== 0) ? res * -1 : res)
}
function randomInRange(v1 = -100, v2 = 100) {
	v1 = cleanInteger(v1, 1)
	v2 = cleanInteger(v2, 1)
	let high, low
	if (v1 < v2) {
		high = v2
		low = v1
	} else if (v1 > v2) {
		high = v1
		low = v2
	} else {
		return random(v2)
	}
	const baseValue = high - low
	return numberFoundation(baseValue)
	.then(res => (baseValue < 0) ? (res * -1) + low : res + low)
}

function randomAZString(len = 10, upper = true) {
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

async function randomLatin(len = 5) {
	let ret = []
	for (let i = 0; i < len; i++) {
		const index = await numberFoundation(255)
		ret.push(latin[index])
	}
	return ret.join(' ')
}

async function randomUUID() {
	return stringFoundation(16)
	.then(res => {
		const byteTo4 = res.slice(12,14)
		const maskOr = parseInt('01000000', 2)
		const maskAnd = parseInt('01001111', 2)
		const byteSet4 = (maskOr | (maskAnd & parseInt(byteTo4, 16)))
		return res.slice(0,12) + byteSet4.toString(16) + res.slice(14)
	})
	.then(res => {
		const bytePart2 = res.slice(16,18)
		const maskOr = parseInt('10000000', 2)
		const maskAnd = parseInt('10111111', 2)
		const byteSetPart2 = (maskOr | (maskAnd & parseInt(bytePart2, 16)))
		return res.slice(0,16) + byteSetPart2.toString(16) + res.slice(18)
	})
	.then(res => {
		return [
			res.slice(0,8),
			res.slice(8, 12),
			res.slice(12,16),
			res.slice(16,20),
			res.slice(20),
		].join("-").toUpperCase()
	})
}

// WRAPPERS

function flexRange(v) {
	return random(v)
}
function setRange(v1,v2) {
	return randomInRange(v1,v2)
}
function azString(len, upper) {
	return randomAZString(len, upper)
}
function randomWords(len) {
	return randomLatin(len)
}

// EXPORT

module.exports = {
	// WRAPPERS
	flexRange,
	setRange,
	azString,
	randomWords,
	// REAL FUNCTIONS
	random,
	randomInRange,
	randomString,
	randomAZString,
	randomLatin,
	randomUUID
}
