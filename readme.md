# Make Random

[![License: MIT](https://badgen.net/github/license/karnthis/make-random)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/karnthis/make-random.svg?branch=master)](https://travis-ci.com/karnthis/make-random)
[![github: version](https://badgen.net/github/release/karnthis/make-random)](https://github.com/karnthis/make-random)
[![github: last-commit](https://badgen.net/github/last-commit/karnthis/make-random)](https://github.com/karnthis/make-random)
[![npm: version](https://badgen.net/npm/v/make-random)](https://www.npmjs.com/package/make-random)
[![npm: downloads](https://badgen.net/npm/dt/make-random)](https://www.npmjs.com/package/make-random)

## About Make Random

Make Random is a lightweight Node.js Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) module to help with generating random numbers and other values using the power of Crypto. Trust your results to be both secure and random!

## Getting started
```shell
npm install make-random
```

## Examples
### Jump-to:
- [random()](#random)
- [randomInRange()](#randomInRange)
- [randomAZString()](#randomAZString)
- [randomString()](#randomString)
- [randomLatin()](#randomLatin)
- [randomUUID()](#randomUUID)

__All ranges are inclusive of the passed value(s)__
### random()

The `random()` method accepts any integer or integer-like string as an optional single argument. The method returns a true integer between 0 and the argument value (inclusive). This holds true for both positive and negative arguments. If no argument is given, the method defaults to randomly returning 0 or 1.

```javascript
const { random } = require('make-random')

// Return a random integer between 0 and 200
random(200)
.then(resp => console.log(resp))

// Accept integer or integer-like string
random("200")
.then(resp => console.log(resp))

// Works with negative values
random(-10)
.then(resp => console.log(resp))

// Including negative strings
random("-12")
.then(resp => console.log(resp))

// Defaults to returning 0 or 1
random()
.then(resp => console.log(resp))
```

### randomInRange()

The `randomInRange()` method accepts any integers or integer-like strings as optional single or pair arguments. The method returns a true integer between the 2 arguments given. If only 1 argument is given, the random number will be between the argument value and 100. If no arguments are given, the method defaults to returning a random integer between -100 and 100. If the arguements are the same value (-10, "-10"), the method will return an integer between 0 and the passed arguments as if `random()` was used.

Additionally, the `randomInRange()` method will accept paired arguments in any order, i.e. both `randomInRange(-10, 10)` and `randomInRange(10, -10)` is valid and will return the same results.

```javascript
const { randomInRange } = require('make-random')

// Return random integer between -42 and 42
randomInRange(-42,42)
.then(resp => console.log(resp))

// Accept integer or integer-like strings
randomInRange(-42,"42")
.then(resp => console.log(resp))

// String position doesn't matter
randomInRange("-42",42)
.then(resp => console.log(resp))

// Order of values does not matter
randomInRange("100", "-5")
.then(resp => console.log(resp))

// Return a random integer between -5 and 100
randomInRange(-5)
.then(resp => console.log(resp))

// Return a random integer between 25 and 100
randomInRange(25)
.then(resp => console.log(resp))

// Return a random integer between 100 and 250
randomInRange(250)
.then(resp => console.log(resp))

// Return random interger between -100 and 100
randomInRange()
.then(resp => console.log(resp))
```

### randomAZString()

The `randomAZString()` method accepts an integer or integer-like argument, and a boolean to determine upper or lowercase as optional single or pair arguments. It returns an A-Z string of the specified length. If no arguments are given, method defaults to a 10 character uppercase string.

```javascript
const { randomAZString } = require('make-random')

// Return uppercase 10 character random string
randomAZString()
.then(resp => console.log(resp))

// Return uppercase 15 character random string
randomAZString(15)
.then(resp => console.log(resp))

// Return lowercase 15 character random string
randomAZString(15, false)
.then(resp => console.log(resp))

// Accept integer or integer-like string
randomAZString('20')
.then(resp => console.log(resp))
```

### randomString()

The `randomString()` method accepts an optional integer or integer-like argument. It returns an alpha-numeric string of the specified length. If no argument is given, method defaults to a 10 character string.

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

### randomLatin()

The `randomLatin()` method accepts an optional integer or integer-like argument. It returns a string with the specified number of random latin words. If no argument is given, method defaults to 5 words. All words start with E or R.

```javascript
const { randomLatin } = require('make-random')

// Return string with 5 random words
randomLatin()
.then(resp => console.log(resp))

// Return string with 12 random words
randomLatin(12)
.then(resp => console.log(resp))

// Accept integer or integer-like string
randomLatin('20')
.then(resp => console.log(resp))
```

### randomUUID()

The `randomUUID()` method generates v4-compliant CSPRNG UUID

```javascript
const { randomUUID } = require('make-random')

// Return UUID
// example: DC3A411B-6C86-48D7-B0B3-369EF3CB73EF
randomUUID()
.then(resp => console.log(resp))
```

## Deprecated

### Make-Random-Legacy

The old methods `makeRandom.ceil()` and `makeRandom.floor()` have been discontined and removed. If continued use is needed and the new `random()` will not meet your needs, please switch to [make-random-legacy](https://github.com/karnthis/make-random-legacy) or consider submitting a feature request or PR.

## License

The MIT License (MIT)

Copyright (c) 2016 John Foderaro

Copyright (c) 2019 Erin Rivas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
