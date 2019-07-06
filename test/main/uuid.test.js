'use strict';

const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-uuid'));
const { randomUUID } = require('../../libs');

describe('randomUUID()', () => {
	it(`should be a function`, ()=> {
		expect(randomUUID).to.be.a('function');
	});
	it(`should return a random v4-compliant UUID`, async () => {
		const result = await randomUUID()
		expect(result).to.be.a.uuid('v4')
	});
});