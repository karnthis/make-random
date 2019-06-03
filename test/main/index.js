'use strict';

const expect = require('chai').expect;
const { flexRange, setRange } = require('../../libs');

describe('flexRange()', () => {
	it(`should be a function`, ()=> {
		expect(flexRange).to.be.a('function');
	});
	it(`should return a positive random number`, () => {
		expect(flexRange(10)).to.be.a('number').and.be.at.least(0);
		expect(flexRange('10')).to.be.an('number').and.be.at.least(0);
	});
	it(`should return a negative random number`, () => {
		expect(flexRange(-10)).to.be.a('number').and.to.be.at.most(0);
		expect(flexRange('-10')).to.be.an('number').and.to.be.at.most(0);
	});
	it(`should return randomly 0 or 1 if passed no arguments`, () => {
		expect(flexRange()).to.be.within(0,1);
	});
	it(`should return 0 if a number or number string is not passed to range()`, () => {
		expect(flexRange('test')).to.equal(0);
		// expect(flexRange(true)).to.equal(0);
		expect(flexRange({})).to.equal(0);
		expect(flexRange([])).to.equal(0);
		expect(flexRange(() => {})).to.equal(0);
	});
});

describe('setRange()', () => {
	it(`should be a function`, ()=> {
		expect(setRange).to.be.a('function');
	});
	// it(`should return a positive random number`, () => {
	// 	expect(setRange(10)).to.be.a('number').and.be.greaterThan(-1);
	// 	expect(setRange('10')).to.be.an('number').and.be.greaterThan(-1);
	// });
	// it(`should return a negative random number`, () => {
	// 	expect(setRange(-10)).to.be.a('number').and.be.lessThan(0);
	// 	expect(setRange('-10')).to.be.an('number').and.be.lessThan(0);
	// });
	it(`should return randomly -100 to 100 if passed no arguments`, () => {
		expect(setRange()).to.be.an('number').to.be.within(-100,100);
	});
	it(`should return randomly 10 to 50 if passed those values`, () => {
		expect(setRange(10,50)).to.be.an('number').to.be.within(10,50);
	});
	it(`should handle if order is flipped`, () => {
		expect(setRange(50,10)).to.be.an('number').to.be.within(10,50);
	});
	it(`should handle mixed positive/negative numbers (-10 to 10)`, () => {
		expect(setRange(-10,10)).to.be.an('number').to.be.within(-10,10);
	});
	it(`should handle negative numbers (-10 to -50)`, () => {
		expect(setRange(-10,-50)).to.be.an('number').to.be.within(-50,-10);
	});
	it(`should handle numbers as strings ('10' to '-50')`, () => {
		expect(setRange('10','-50')).to.be.an('number').to.be.within(-50,10);
	});
	it(`should handle mixed numbers as strings ('10' to -50)`, () => {
		expect(setRange('10',-50)).to.be.an('number').to.be.within(-50,10);
	});
	it(`should default to flexRange() behavior if input is the same`, () => {
		expect(setRange(10,10)).to.be.an('number').and.be.greaterThan(-1);
	});
	// it(`should return 0 if a number or number string is not passed to range()`, () => {
	// 	expect(setRange('test')).to.equal(0);
	// 	expect(setRange(true)).to.equal(0);
	// 	expect(setRange({})).to.equal(0);
	// 	expect(setRange([])).to.equal(0);
	// 	expect(setRange(() => {})).to.equal(0);
	// });
});