'use strict';

const { expect } = require('chai');
const { randomAZString, randomString } = require('../../libs');

describe('randomAZString()', () => {
	it(`should be a function`, ()=> {
		expect(randomAZString).to.be.a('function');
	});
	it(`should return a randomized uppercase a-z string 10 characters long if passed no arguments`, async () => {
		const result = await randomAZString()
		console.log(result)
		expect(result).to.be.an('string').of.length(10);
	});
	it(`should return a randomized uppercase a-z string the length of the argument`, async () => {
		const result = await randomAZString(25, true)
		console.log(result)
		expect(result).to.be.an('string').of.length(25);
	});
	it(`should return a randomized lowercase a-z string the length of the argument`, async () => {
		const result = await randomAZString(25, false)
		console.log(result)
		expect(result).to.be.an('string').of.length(25);
	});
	it(`should handle string inputs ('15')`, async () => {
		const result = await randomAZString('15')
		console.log(result)
		expect(result).to.be.an('string').of.length(15);
	});
});

describe('randomString()', () => {
	it(`should be a function`, ()=> {
		expect(randomString).to.be.a('function');
	});
	it(`should return a randomized string 10 characters long if passed no arguments`, async () => {
		const result = await randomString()
		expect(result).to.be.an('string').of.length(10);
	});
	it(`should return a randomized string the length of the argument`, async () => {
		const result = await randomString(25)
		expect(result).to.be.an('string').of.length(25);
	});
	it(`should handle string inputs ('15')`, async () => {
		const result = await randomString('15')
		expect(result).to.be.an('string').of.length(15);
	});
});