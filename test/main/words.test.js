'use strict';

const { expect } = require('chai');
const { randomLatin } = require('../../libs');

describe('randomLatin()', () => {
	it(`should be a function`, ()=> {
		expect(randomLatin).to.be.a('function');
	});
	it(`should return a randomized string 5 words long if passed no arguments`, async () => {
		const result = await randomLatin()
		expect(result).to.be.an('string')
		const resultArray = result.split(' ')
		expect(resultArray).to.be.of.length(5);
	});
	it(`should return a randomized string with as many words as the argument`, async () => {
		const result = await randomLatin(12)
		expect(result).to.be.an('string')
		const resultArray = result.split(' ')
		expect(resultArray).to.be.of.length(12);
	});
	it(`should handle string inputs ('15')`, async () => {
		const result = await randomLatin(15)
		expect(result).to.be.an('string')
		const resultArray = result.split(' ')
		expect(resultArray).to.be.of.length(15);
	});
});