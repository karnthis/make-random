'use strict';

const expect = require('chai').expect;
const { fixedRange, flexRange } = require('../../libs');

describe('makeRandom flexRange()', () => {
	it(`should have the method 'flexRange'`, ()=> {
		expect(flexRange).to.be.a('function');
	});
	it(`should return a positive random number`, () => {
		expect(flexRange(10)).to.be.a('number').and.be.greaterThan(-1);
		expect(flexRange('10')).to.be.an('number').and.be.greaterThan(-1);
	});
	it(`should return a negative random number`, () => {
		expect(flexRange(-10)).to.be.a('number').and.be.lessThan(0);
		expect(flexRange('-10')).to.be.an('number').and.be.lessThan(0);
	});
	// it(`should return 0 if a number or number string is not passed to range()`, () => {
	// 	expect(flexRange('test')).to.equal(0);
	// 	expect(flexRange(true)).to.equal(0);
	// 	expect(flexRange({})).to.equal(0);
	// 	expect(flexRange([])).to.equal(0);
	// 	expect(flexRange(() => {})).to.equal(0);
	// });
});