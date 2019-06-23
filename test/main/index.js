'use strict';

const expect = require('chai').expect;
const { flexRange, setRange, azString, randomString, randomWords} = require('../../libs');

describe('flexRange()', () => {
	it(`should be a function`, ()=> {
		expect(flexRange).to.be.a('function');
	});
	it(`should return a positive random number`, async () => {
		const result1 = await flexRange(10)
		expect(result1).to.be.a('number').and.be.at.least(0);
		const result2 = await flexRange('10')
		expect(result2).to.be.an('number').and.be.at.least(0);
	});
	it(`should return a negative random number`, async () => {
		const result1 = await flexRange(-10)
		expect(result1).to.be.a('number').and.to.be.at.most(0);
		const result2 = await flexRange('-10')
		expect(result2).to.be.an('number').and.to.be.at.most(0);
	});
	it(`should return randomly 0 or 1 if passed no arguments`, async () => {
		const result = await flexRange()
		expect(result).to.be.within(0,1);
	});

	it(`should average around 89 after 10,000 cycles`, async () => {
		let result = 0
		for (let i = 0; i < 10000; i++) {
			result += await flexRange(178)
		}
		result = result / 10000
		console.log(result)
		expect(result).and.to.be.at.most(256);
	});
});

describe('setRange()', () => {
	it(`should be a function`, ()=> {
		expect(setRange).to.be.a('function');
	});
	it(`should return randomly -100 to 100 if passed no arguments`, async () => {
		const result = await setRange()
		expect(result).to.be.an('number').to.be.within(-100,100);
	});
	it(`should return randomly 10 to 50 if passed those values`, async () => {
		const result = await setRange(10,50)
		expect(result).to.be.an('number').to.be.within(10,50);
	});
	it(`should handle if order is flipped`, async () => {
		const result = await setRange(50,10)
		expect(result).to.be.an('number').to.be.within(10,50);
	});
	it(`should handle mixed positive/negative numbers (-10 to 10)`, async () => {
		const result = await setRange(-10,10)
		expect(result).to.be.an('number').to.be.within(-10,10);
	});
	it(`should handle negative numbers (-10 to -50)`, async () => {
		const result = await setRange(-10,-50)
		expect(result).to.be.an('number').to.be.within(-50,-10);
	});
	it(`should handle numbers as strings ('10' to '-50')`, async () => {
		const result = await setRange('10','-50')
		expect(result).to.be.an('number').to.be.within(-50,10);
	});
	it(`should handle mixed numbers as strings ('10' to -50)`, async () => {
		const result = await setRange('10',-50)
		expect(result).to.be.an('number').to.be.within(-50,10);
	});
	it(`should default to flexRange() behavior if input is the same`, async () => {
		const result = await setRange(10,10)
		expect(result).to.be.an('number').and.be.greaterThan(-1);
	});
});

describe('azString()', () => {
	it(`should be a function`, ()=> {
		expect(azString).to.be.a('function');
	});
	it(`should return a randomized uppercase a-z string 10 characters long if passed no arguments`, async () => {
		const result = await azString()
		console.log(result)
		expect(result).to.be.an('string').of.length(10);
	});
	it(`should return a randomized uppercase a-z string the length of the argument`, async () => {
		const result = await azString(25, true)
		console.log(result)
		expect(result).to.be.an('string').of.length(25);
	});
	it(`should return a randomized lowercase a-z string the length of the argument`, async () => {
		const result = await azString(25, false)
		console.log(result)
		expect(result).to.be.an('string').of.length(25);
	});
	it(`should handle string inputs ('15')`, async () => {
		const result = await azString('15')
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

describe('randomWords()', () => {
	it(`should be a function`, ()=> {
		expect(randomWords).to.be.a('function');
	});
	it(`should return a randomized string 5 words long if passed no arguments`, async () => {
		const result = await randomWords()
		expect(result).to.be.an('string')
		const resultArray = result.split(' ')
		expect(resultArray).to.be.of.length(5);
	});
	it(`should return a randomized string with as many words as the argument`, async () => {
		const result = await randomWords(12)
		expect(result).to.be.an('string')
		const resultArray = result.split(' ')
		expect(resultArray).to.be.of.length(12);
	});
	it(`should handle string inputs ('15')`, async () => {
		const result = await randomWords(15)
		expect(result).to.be.an('string')
		const resultArray = result.split(' ')
		expect(resultArray).to.be.of.length(15);
	});
});