# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- #### Added -->
<!-- #### Changed -->
<!-- #### Removed -->
<!-- ## [Unreleased] -->

## Major Releases:
### [v3.0.0] - 2022 02 22
#### Added
- New random word generator:
	- `randomEnglish()` Generates text block with specified number of random English words.
#### Changed
- Introducing Types! We have converted to Typescript, and it is good.
- Added input sanitization to several functions that were missing it.

### [v2.0.0] - 2022 02 22
Skipped by accident

### [v1.0.0] - 2019 06 23
#### Added
- Two random string functions:
	- `azString()` Generates a randomized uppercase(default) A-Z string of specified length. Optional second booblean argument toggles upper/lowercase.
	- `randomString()` Generates a true random string of specified length
- Random word generator:
	- `randomWords()` Generates text block with specified number of random Latin words. All words intentionally begin with E or R.
#### Changed
- Updated readme to be more concise.
#### Removed
- Removed legacy code and tests:
	- `makeRandom.ceil()`
	- `makeRandom.floor()`

### v0.0.1 - 2016 09 23
- Initial Release

## Minor Releases:
### [v3.0.2] - 2022 06 01
#### Changed
- `randomCaseString()` Updated 'mode' to be optional

### [v3.0.1] - 2022 05 31
#### Changed
- `randomCaseString()` Added support for generating random values from a full 62 options instead of randomizing letters
- Flagged internal functions so they should no longer appear in typescript intellisense

### [v1.3.0] - 2022 01 29
#### Added
- `flipCoin()` Generates a random boolean value
- `randomCaseString()` Generates a true mixed-case random string of specified length
#### Changed
- `random()` Fixed bug where defaulting to randomly returning 0 or 1 always returned 0

## [v1.2.2] - 2021 10 24
#### Changed
- Changelog tweaks
- Security updates
- Removed "Gluten Free" tag from Readme

### [v1.2.0] - 2019 07 05
#### Added
- Added UUID tests
#### Changed
- Updated Readme
- Refactored tests
#### Removed
- No more Purify-Int dependency

### [v1.1.0] - 2019 06 29
#### Added
- `randomUUID()` Generate v4-compliant UUIDs

### [v1.0.1] - 2019 06 23
#### Changed
- Updated Readme
- Updated package.json tags

### [v0.1.7] - 2019 06 08
#### Changed
- Updated existing supported methods to promises

### [v0.1.6] - 2019 06 08
#### Added
- `setRange()`
- `flexRange()`
#### Changed
- Deprecated: 
	- `makeRandom.ceil()`
	- `makeRandom.floor()`

### [v0.1.5] - 2019 05 29
#### Added
- changelog.md
#### Changed
- Updated badges
- Updated ownership details

<!-- LINKS -->
<!-- RELEASES -->
[Unreleased]: https://github.com/karnthis/make-random/compare/v3.0.2...dev
[v3.0.2]: https://github.com/karnthis/make-random/compare/v3.0.1...v3.0.2
[v3.0.1]: https://github.com/karnthis/make-random/compare/v3.0.0...v3.0.1
[v3.0.0]: https://github.com/karnthis/make-random/compare/v1.3.0...3.0.0
[v1.3.0]: https://github.com/karnthis/make-random/compare/v1.2.2...v1.3.0
[v1.2.2]: https://github.com/karnthis/make-random/compare/v1.2.0...v1.2.2
[v1.2.0]: https://github.com/karnthis/make-random/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/karnthis/make-random/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/karnthis/make-random/compare/v0.1.7...v1.0.0
[v0.1.6]: https://github.com/karnthis/make-random/compare/v0.1.6...v0.1.7
[v0.1.6]: https://github.com/karnthis/make-random/compare/v0.1.5...v0.1.6
[v0.1.5]: https://github.com/karnthis/make-random/compare/v0.1.4...v0.1.5
<!-- ISSUES -->
