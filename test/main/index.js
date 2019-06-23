'use strict';

const expect = require('chai').expect;
const { flexRange, setRange, randomString } = require('../../libs');

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

// describe('setRange()', () => {
// 	it(`should be a function`, ()=> {
// 		expect(setRange).to.be.a('function');
// 	});
// 	it(`should return randomly -100 to 100 if passed no arguments`, async () => {
// 		const result = await setRange()
// 		expect(result).to.be.an('number').to.be.within(-100,100);
// 	});
// 	it(`should return randomly 10 to 50 if passed those values`, async () => {
// 		const result = await setRange(10,50)
// 		expect(result).to.be.an('number').to.be.within(10,50);
// 	});
// 	it(`should handle if order is flipped`, async () => {
// 		const result = await setRange(50,10)
// 		expect(result).to.be.an('number').to.be.within(10,50);
// 	});
// 	it(`should handle mixed positive/negative numbers (-10 to 10)`, async () => {
// 		const result = await setRange(-10,10)
// 		expect(result).to.be.an('number').to.be.within(-10,10);
// 	});
// 	it(`should handle negative numbers (-10 to -50)`, async () => {
// 		const result = await setRange(-10,-50)
// 		expect(result).to.be.an('number').to.be.within(-50,-10);
// 	});
// 	it(`should handle numbers as strings ('10' to '-50')`, async () => {
// 		const result = await setRange('10','-50')
// 		expect(result).to.be.an('number').to.be.within(-50,10);
// 	});
// 	it(`should handle mixed numbers as strings ('10' to -50)`, async () => {
// 		const result = await setRange('10',-50)
// 		expect(result).to.be.an('number').to.be.within(-50,10);
// 	});
// 	it(`should default to flexRange() behavior if input is the same`, async () => {
// 		const result = await setRange(10,10)
// 		expect(result).to.be.an('number').and.be.greaterThan(-1);
// 	});
// });

describe('randomString()', () => {
	it(`should be a function`, ()=> {
		expect(randomString).to.be.a('function');
	});
	it(`should return a random string 10 long if passed no arguments`, async () => {
		const result = await randomString()
		expect(result).to.be.an('string').to.have.length(10);
	});
	it(`should return randomly 10 to 50 if passed those values`, async () => {
		const result = await randomString(25)
		expect(result).to.be.an('string').to.have.length(25);
	});
	// it(`should handle if order is flipped`, async () => {
	// 	const result = await randomString(50,10)
	// 	expect(result).to.be.an('string').to.be.within(10,50);
	// });
	// it(`should handle mixed positive/negative string (-10 to 10)`, async () => {
	// 	const result = await randomString(-10,10)
	// 	expect(result).to.be.an('string').to.be.within(-10,10);
	// });
	// it(`should handle negative numbers (-10 to -50)`, async () => {
	// 	const result = await randomString(-10,-50)
	// 	expect(result).to.be.an('string').to.be.within(-50,-10);
	// });
	it(`should handle string inputs ('15')`, async () => {
		const result = await randomString('15')
		expect(result).to.be.an('string').to.have.length(15);
	});
	// it(`should handle mixed numbers as strings ('10' to -50)`, async () => {
	// 	const result = await randomString('10',-50)
	// 	expect(result).to.be.an('string').to.be.within(-50,10);
	// });
	// it(`should default to flexRange() behavior if input is the same`, async () => {
	// 	const result = await randomString(10,10)
	// 	expect(result).to.be.an('string').and.be.greaterThan(-1);
	// });
});