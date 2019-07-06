function deprecate(func, version) {
	console.log(`${func} is deprecated as of ${version} and may be removed at any time.
	Please convert to make-random-legacy if this function is still needed.`)
}

function cleanInteger(x, fallback = 0) {
	const cleanInt = Number(x)
	const cleanFallback = Number(fallback)
	return (isNaN(cleanInt)) ? (isNaN(cleanFallback)) ? 0 : cleanFallback : cleanInt
}

module.exports = {
	deprecate,
	cleanInteger
}