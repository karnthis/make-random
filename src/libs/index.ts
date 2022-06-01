import Crypto from 'crypto'
import { cleanInteger } from '../util'

// DATA IMPORT
import latin from '../data/256Latin'
import english from '../data/182English'
import { Buffer } from "buffer";
import {asLong} from "../data/letters";
const { asUpper, asLower } = require('../data/letters')

// INTERNAL
/** @internal */
function foundation(base: number): Promise<string> {
	const byteCount: number = makeByteCount(base)
	return promiseCryptoRBytes(byteCount)
		.then((buf: Buffer): string => buf.toString('hex'))
}

/** @internal */
function numberFoundation(base: number): Promise<number> {
	const trueBase: number = Math.abs(base)
	return foundation(trueBase)
		.then((hex: string): number => {
			const val: number = parseInt(hex, 16)
			if (trueBase === 1) {
				return val % 2
			} else {
				return val % trueBase
			}
		})
}

/** @internal */
function stringFoundation(base: number): Promise<string> {
	const trueBase: number = Math.abs(base)
	return promiseCryptoRBytes(trueBase)
		.then((buf: Buffer): string => buf.toString('hex'))
}

/** @internal */
function promiseCryptoRBytes(byteCount: number = 1): Promise<Buffer> {
	return new Promise((resolve, reject) => {
		Crypto.randomBytes(byteCount, (err, buf) => {
			if (err) {
				reject(err)
			} else {
				resolve(buf)
			}
		})
	})
}

/** @internal */
function makeByteCount(max: number): number {
	let ret = 1
	let cycle = 256
	while (max > cycle) {
		cycle *= 256
		ret++
	}
	if (ret == 1) ret++
	return ret
}

/** @internal */
async function randomLetter(count: number = 3, source: string): Promise<string> {
	let ret = ''
	for (let i = 0; i < count; i++) {
		const index = await numberFoundation(25)
		ret += source[index]
	}
	return ret
}

/** @internal */
async function randomLongLetter(count: number = 3): Promise<string> {
	let ret = ''
	for (let i = 0; i < count; i++) {
		const index = await numberFoundation(62)
		ret += asLong[index]
	}
	return ret
}

// EXTERNAL
function random(v: number | string = 1): Promise<number> {
	const pureV = cleanInteger(v, 1)
	return numberFoundation(pureV)
		.then(res => (pureV < 0 && res !== 0) ? res * -1 : res)
}
function coinFlip(): Promise<boolean> {
	return random()
		.then(num => num === 0)
}
function randomInRange(v1: number | string = -100, v2: number | string = 100): Promise<number> {
	v1 = cleanInteger(v1, -100)
	v2 = cleanInteger(v2, 100)
	let high: number = 0
	let low: number = 0
	if (v1 < v2) {
		high = v2
		low = v1
	} else if (v1 > v2) {
		high = v1
		low = v2
	} else {
		return random(v2)
	}
	const baseValue: number = high - low
	return numberFoundation(baseValue)
		.then(res => (baseValue < 0) ? (res * -1) + low : res + low)
}

function randomAZString(len: number | string = 10, upper: boolean = true): Promise<string> {
	len = cleanInteger(len, 10)
	if (upper) {
		return randomLetter(len, asUpper)
	} else {
		return randomLetter(len, asLower)
	}
}
function randomString(len: number | string = 10): Promise<string> {
	len = cleanInteger(len, 10)
	return stringFoundation(len)
		.then(hex => hex.slice(0, len as number))
}
function randomCaseString(len: number | string = 10, mode?: string): Promise<string> {
	len = cleanInteger(len, 10)
	if (mode === 'mixed') {
		return stringFoundation(len)
			.then(hex => hex.slice(0, len as number))
			.then(async (str) => {
				return Promise.all(str
					.split('')
					.map(async (char: string) => (await coinFlip()) ? char : char.toUpperCase())
				)
			})
			.then(strArr => strArr.join(''))
	} else {
		return randomLongLetter(len)
	}
}

async function randomLatin(len: number | string = 5): Promise<string> {
	len = cleanInteger(len, 5)
	let ret = []
	for (let i = 0; i < len; i++) {
		const index = await numberFoundation(255)
		ret.push(latin[index])
	}
	return ret.join(' ')
}

async function randomEnglish(len: number | string = 5): Promise<string> {
	len = cleanInteger(len, 5)
	let ret = []
	for (let i = 0; i < len; i++) {
		const index = await numberFoundation(181)
		ret.push(english[index])
	}
	return ret.join(' ')
}

async function randomUUID(): Promise<string> {
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

function flexRange(v: number | string): Promise<number> {
	return random(v)
}
function setRange(v1: number | string, v2: number | string): Promise<number> {
	return randomInRange(v1,v2)
}
function azString(len: number | string, upper: boolean): Promise<string> {
	return randomAZString(len, upper)
}
function randomWords(len: number | string): Promise<string> {
	return randomLatin(len)
}

// EXPORT

export {
	// WRAPPERS
	coinFlip,
	flexRange,
	setRange,
	azString,
	randomWords,
	// REAL FUNCTIONS
	random,
	randomInRange,
	randomString,
	randomAZString,
	randomCaseString,
	randomLatin,
	randomEnglish,
	randomUUID
}
