# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- #### Added -->
<!-- #### Changed -->
<!-- #### Removed -->
## [Unreleased]
#### Changed
- Changelog tweaks
- Removed "Gluten Free" tag from Readme

## Major Releases:
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
[Unreleased]: https://github.com/karnthis/make-random/compare/v1.2.0...dev
[v1.2.0]: https://github.com/karnthis/make-random/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/karnthis/make-random/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/karnthis/make-random/compare/v0.1.7...v1.0.0
[v0.1.6]: https://github.com/karnthis/make-random/compare/v0.1.6...v0.1.7
[v0.1.6]: https://github.com/karnthis/make-random/compare/v0.1.5...v0.1.6
[v0.1.5]: https://github.com/karnthis/make-random/compare/v0.1.4...v0.1.5
<!-- ISSUES -->
