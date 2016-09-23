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
    expect(makeRandom.ceil('test')).to.be.an('error');
    expect(makeRandom.ceil('10')).to.be.an('error');
    expect(makeRandom.ceil(true)).to.be.an('error');
    expect(makeRandom.ceil({})).to.be.an('error');
    expect(makeRandom.ceil([])).to.be.an('error');
    expect(makeRandom.ceil(() => {})).to.be.an('error');
    expect(makeRandom.floor('test')).to.be.an('error');
    expect(makeRandom.floor('10')).to.be.an('error');
    expect(makeRandom.floor(true)).to.be.an('error');
    expect(makeRandom.floor({})).to.be.an('error');
    expect(makeRandom.floor([])).to.be.an('error');
    expect(makeRandom.floor(() => {})).to.be.an('error');
  });
});
