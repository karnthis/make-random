'use strict';

const chai = require('chai');
const expect = chai.expect;
const makeRandom = require('./index');

describe('makeRandom', () => {
  it(`should have the methods 'ceil' and 'floor'`, ()=> {
    expect(makeRandom.ceil).to.be.a('function');
    expect(makeRandom.floor).to.be.a('function');
  });
  it(`should return a number`, () => {
    expect(makeRandom.ceil(10)).to.be.a('number');
    expect(makeRandom.floor(10)).to.be.a('number');
  });
  it(`should not return a negative zero`, () => {
    expect(makeRandom.ceil(-0)).to.equal(0);
    expect(makeRandom.floor(-0)).to.equal(0);
  });
  it(`should throw an error if a number is not passed`, () => {
    expect(() => {
      makeRandom.ceil('test');
      makeRandom.floor('test');
    }).to.throw(Error);
    expect(() => {
      makeRandom.ceil('10');
      makeRandom.floor('10');
    }).to.throw(Error);
    expect(() => {
      makeRandom.ceil(true);
      makeRandom.floor(true);
    }).to.throw(Error);
    expect(() => {
      makeRandom.ceil({});
      makeRandom.floor({});
    }).to.throw(Error);
  });
});
