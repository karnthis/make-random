'use strict';

const { expect } = require('chai');
const { random, randomInRange } = require('../../libs');

describe('random()', () => {
	it(`should be a function`, ()=> {
		expect(random).to.be.a('function');
	});
	it(`should return a positive random number`, async () => {
		const result1 = await random(10)
		expect(result1).to.be.a('number').and.be.at.least(0);
		const result2 = await random('10')
		expect(result2).to.be.an('number').and.be.at.least(0);
	});
	it(`should return a negative random number`, async () => {
		const result1 = await random(-10)
		expect(result1).to.be.a('number').and.to.be.at.most(0);
		const result2 = await random('-10')
		expect(result2).to.be.an('number').and.to.be.at.most(0);
	});
	it(`should return randomly 0 or 1 if passed no arguments`, async () => {
		const result = await random()
		expect(result).to.be.within(0,1);
	});

	it(`should average around 89 after 10,000 cycles`, async () => {
		let result = 0
		for (let i = 0; i < 10000; i++) {
			result += await random(178)
		}
		result = result / 10000
		console.log(result)
		expect(result).and.to.be.at.most(256);
	});
});

describe('randomInRange()', () => {
	it(`should be a function`, ()=> {
		expect(randomInRange).to.be.a('function');
	});
	it(`should return randomly -100 to 100 if passed no arguments`, async () => {
		const result = await randomInRange()
		expect(result).to.be.an('number').to.be.within(-100,100);
	});
	it(`should return randomly 10 to 50 if passed those values`, async () => {
		const result = await randomInRange(10,50)
		expect(result).to.be.an('number').to.be.within(10,50);
	});
	it(`should handle if order is flipped`, async () => {
		const result = await randomInRange(50,10)
		expect(result).to.be.an('number').to.be.within(10,50);
	});
	it(`should handle mixed positive/negative numbers (-10 to 10)`, async () => {
		const result = await randomInRange(-10,10)
		expect(result).to.be.an('number').to.be.within(-10,10);
	});
	it(`should handle negative numbers (-10 to -50)`, async () => {
		const result = await randomInRange(-10,-50)
		expect(result).to.be.an('number').to.be.within(-50,-10);
	});
	it(`should handle numbers as strings ('10' to '-50')`, async () => {
		const result = await randomInRange('10','-50')
		expect(result).to.be.an('number').to.be.within(-50,10);
	});
	it(`should handle mixed numbers as strings ('10' to -50)`, async () => {
		const result = await randomInRange('10',-50)
		expect(result).to.be.an('number').to.be.within(-50,10);
	});
	it(`should range between input (-25) and 100`, async () => {
		const result = await randomInRange('-25')
		expect(result).to.be.an('number').to.be.within(-25,100);
	});
	it(`should range between input (10) and 100`, async () => {
		const result = await randomInRange('10')
		expect(result).to.be.an('number').to.be.within(10,100);
	});
	it(`should range between input (250) and 100`, async () => {
		const result = await randomInRange('250')
		expect(result).to.be.an('number').to.be.within(100,250);
	});
	it(`should default to random() behavior if input is the same`, async () => {
		const result = await randomInRange(10,10)
		expect(result).to.be.an('number').and.be.greaterThan(-1);
	});
});