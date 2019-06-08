'use strict';

const chai = require('chai');
const expect = chai.expect;
const { ceil, floor } = require('../../deprecated/v1');

describe('makeRandom ceil()', () => {
  it(`should have the method 'ceil'`, ()=> {
    expect(ceil).to.be.a('function');
  });
  it(`should return a number`, () => {
    expect(ceil(10)).to.be.a('number');
    expect(ceil('10')).to.be.an('number');
  });
  it(`should not return a negative zero`, () => {
    expect(ceil(-0)).to.equal(0);
  });
	
	it(`should return 0 if a number or number string is not passed to ceil()`, () => {
    expect(ceil('test')).to.equal(0);
    expect(ceil(true)).to.equal(0);
    expect(ceil({})).to.equal(0);
    expect(ceil([])).to.equal(0);
    expect(ceil(() => {})).to.equal(0);
  });
});

describe('makeRandom floor()', () => {
  it(`should have the method 'floor'`, ()=> {
    expect(floor).to.be.a('function');
  });
  it(`should return a number`, () => {
    expect(floor(10)).to.be.a('number');
    expect(floor('10')).to.be.an('number');
  });
  it(`should not return a negative zero`, () => {
    expect(floor(-0)).to.equal(0);
  });
  it(`should return 0 if a number or number string is not passed to ceil()`, () => {
    expect(floor('test')).to.equal(0);
    expect(floor(true)).to.equal(0);
    expect(floor({})).to.equal(0);
    expect(floor([])).to.equal(0);
    expect(floor(() => {})).to.equal(0);
	});
});