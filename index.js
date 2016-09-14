'use strict';

const makeRandom = {
  ceil(max) {
    if (typeof max !== 'number') {
      throw new Error('Max parameter must be a number.');
    }
    return Math.ceil(Math.random() * max);
  },
  floor(max) {
    if (typeof max !== 'number') {
      throw new Error('Max parameter must be a number.');
    }
    return Math.floor(Math.random() * max);
  }
};

module.exports = makeRandom;
