'use strict';

const makeRandom = {
  ceil(max) {
    if (typeof max !== 'number') {
      throw new Error('Max parameter must be a number.');
    }
    const value = Math.ceil(Math.random() * max);
    if (value === -0) {
      return negativeZeroHelper(value);
    } else {
      return value;
    }
  },
  floor(max) {
    if (typeof max !== 'number') {
      throw new Error('Max parameter must be a number.');
    }
    return Math.floor(Math.random() * max);
  }
};

function negativeZeroHelper(number) {
  return parseInt(number.toString());
}

module.exports = makeRandom;
