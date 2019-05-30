function deprecate(func, version) {
	console.log(`${func} is deprecated as of ${version} and may be removed at any time.
	Please convert to make-random-legacy if this function is still needed.`)
}

module.exports = {
	deprecate
}