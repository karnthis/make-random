# Make Random

<!-- [![Build Status](https://travis-ci.org/johnfoderaro/make-random.svg?branch=master)](https://travis-ci.org/johnfoderaro/make-random) -->
[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)

[![License: MIT](https://badgen.net/github/license/karnthis/make-random)](https://opensource.org/licenses/MIT)
[![github: version](https://badgen.net/github/release/karnthis/make-random)](https://github.com/karnthis/make-random)
[![github: last-commit](https://badgen.net/github/last-commit/karnthis/make-random)](https://github.com/karnthis/make-random)
[![npm: version](https://badgen.net/npm/v/make-random)](https://www.npmjs.com/package/make-random)
[![npm: downloads](https://badgen.net/npm/dt/make-random)](https://www.npmjs.com/package/make-random)

A lightweight Node.js module to help with generating a random number between either 1 or 0 and your specified "maximum" value. This module comes in handy for easily generating a random number for tasks such as dealing with arrays (zero based index) or pagination (one based index).

## Getting started
```shell
npm install make-random
```

## Examples

```javascript
const makeRandom = require('make-random');

makeRandom.ceil(200);
// returns a random number between 1 and 200

makeRandom.floor(10);
// returns a random number between 0 and 10

makeRandom.ceil(-42);
// returns random number between 0 and -42

makeRandom.floor(-10);
// returns a random number between 1 and -10

makeRandom.floor(-0);
// returns 0
```

## Usage

### `makeRandom.ceil(number);`

The `ceil()` method accepts only a number as its single argument -- the maximum value for the range the random number is generated against. If the argument is a positive number, the method returns a number between 1 and your maximum value. If the number is negative, this method returns a value between the maximum negative value and 0. Please note, "-0" gets "normalized" to 0 in this module.

### `makeRandom.floor(number);`

The `floor()` method accepts only a number as its single argument -- the maximum value for the range the random number is generated against. If the argument is a positive number, the method returns a number between 0 and your maximum value. If the number is negative, this method returns a value between the maximum negative value and 1.

## License

The MIT License (MIT)

Copyright (c) 2016 John Foderaro
Copyright (c) 2019 Erin Rivas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
