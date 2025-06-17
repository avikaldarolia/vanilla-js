function detectType(value) {
	// Your implementation
	if (value === null) {
		return "null";
	}

	if (Array.isArray(value)) {
		return "array";
	}

	return typeof value;
}

//For the purpose of user debugging.
detectType();

module.exports = detectType;
