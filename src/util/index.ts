/** @internal */
function deprecate(func: string, version: string): void {
	console.log(`${func} is deprecated as of ${version} and may be removed at any time.
	Please convert to make-random-legacy if this function is still needed.`)
}

/** @internal */
function cleanInteger(x: number | string, fallback: number | string = 0): number {
	const cleanInt = Number(x)
	const cleanFallback = Number(fallback)
	return (isNaN(cleanInt)) ? (isNaN(cleanFallback)) ? 0 : cleanFallback : cleanInt
}

export {
	deprecate,
	cleanInteger
}