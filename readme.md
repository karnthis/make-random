# Make Random

[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)

[![License: MIT](https://badgen.net/github/license/karnthis/make-random)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/karnthis/make-random.svg?branch=master)](https://travis-ci.com/karnthis/make-random)
[![github: version](https://badgen.net/github/release/karnthis/make-random)](https://github.com/karnthis/make-random)
[![github: last-commit](https://badgen.net/github/last-commit/karnthis/make-random)](https://github.com/karnthis/make-random)
[![npm: version](https://badgen.net/npm/v/make-random)](https://www.npmjs.com/package/make-random)
[![npm: downloads](https://badgen.net/npm/dt/make-random)](https://www.npmjs.com/package/make-random)

## About Make Random

Make Random is a lightweight Node.js Cryptographically Secure Pseudo-Random Number Generator module to help with generating random numbers and other values using the power of Crypto. Trust your results to be both secure and random!

## Getting started
```shell
npm install make-random
```

## Examples
### Jump-to:
- [flexRange()](#flexRange)
- [setRange()](#setRange)
- [azString()](#azString)
- [randomString()](#randomString)
- [randomWords()](#randomWords)

__All ranges are inclusive of the passed value(s)__
### flexRange()

The `flexRange()` method accepts any integer or integer-like string as an optional single argument. The method returns an integer between 0 and the argument value (inclusive). This holds true for both positive and negative arguments. If no argument is given, the method defaults to randomly returning 0 or 1.

```javascript
const { flexRange } = require('make-random')

// Return a random integer between 0 and 200
flexRange(200)
.then(resp => console.log(resp))

// Accept integer or integer-like string
flexRange("200")
.then(resp => console.log(resp))

// Works with negative values
flexRange(-10)
.then(resp => console.log(resp))

// Defaults to returning 0 or 1
flexRange()
.then(resp => console.log(resp))
```

### setRange()

The `setRange()` method accepts any integers or integer-like strings as optional single or pair arguments. The method returns an integer between the 2 arguments given. If only 1 argument is given, the random number will be between the argument value and 100. If no arguments are given, the method defaults to returning a random integer between -100 and 100.

Additionally, the `setRange()` method will accept paired arguments in any order, i.e. both `setRange(-10, 10)` and `setRange(10, -10)` is valid and will return the same results.

```javascript
const { setRange } = require('make-random')

// Return random integer between -42 and 42
setRange(-42,42)
.then(resp => console.log(resp))

// Accept integer or integer-like strings
setRange(-42,"42")
.then(resp => console.log(resp))

// Order of values does not matter
setRange("100", "-5")
.then(resp => console.log(resp))

// Return a random integer between -5 and 100
setRange(-5)
.then(resp => console.log(resp))

// Return random interger between -100 and 100
setRange()
.then(resp => console.log(resp))
```

### azString()

The `azString()` method accepts an integer or integer-like argument, and an optional boolean to determine upper or lowercase. It returns an A-Z string of the specified length. If no arguments are given, method defaults to a 10 character uppercase string.

```javascript
const { azString } = require('make-random')

// Return uppercase 10 character random string
azString()
.then(resp => console.log(resp))

// Return uppercase 15 character random string
azString(15)
.then(resp => console.log(resp))

// Return lowercase 15 character random string
azString(15, false)
.then(resp => console.log(resp))

// Accept integer or integer-like string
azString('20')
.then(resp => console.log(resp))
```

### randomString()

The `randomString()` method accepts an integer or integer-like argument. It returns an alpha-numeric string of the specified length. If no arguments are given, method defaults to a 10 character string.

```javascript
const { randomString } = require('make-random')

// Return 10 character random string
randomString()
.then(resp => console.log(resp))

// Return 15 character random string
randomString(15)
.then(resp => console.log(resp))

// Accept integer or integer-like string
randomString('20')
.then(resp => console.log(resp))
```

### randomWords()

The `randomWords()` method accepts an integer or integer-like argument. It returns a string with the specified number of random latin words. If no arguments are given, method defaults to 5 words. All words start with E or R.

```javascript
const { randomWords } = require('make-random')

// Return string with 5 random words
randomWords()
.then(resp => console.log(resp))

// Return string with 12 random words
randomWords(12)
.then(resp => console.log(resp))

// Accept integer or integer-like string
randomWords('20')
.then(resp => console.log(resp))
```

## Deprecated

### Make-Random-Legacy

The old methods `makeRandom.ceil()` and `makeRandom.floor()` have been discontined and removed. If continued use is needed and the new `flexRange()` will not meet your needs, please switch to [make-random-legacy](https://github.com/karnthis/make-random-legacy) or consider submitting a feature request or PR.

## License

The MIT License (MIT)

Copyright (c) 2016 John Foderaro

Copyright (c) 2019 Erin Rivas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
