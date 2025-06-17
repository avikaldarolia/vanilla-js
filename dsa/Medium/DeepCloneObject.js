function deepClone(obj) {
	// Your implementation
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map(deepClone);
	}

	const clonedObj = {};

	for (const [key, value] of Object.entries(obj)) {
		clonedObj[key] = deepClone(value);
	}

	return clonedObj;
}

const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const cloned = deepClone(original);

console.log(cloned.d[1]);
console.log(cloned.d !== original.d);
