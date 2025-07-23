function flattenObject(obj) {
	// Your implementation
	let flattenedObj = {};

	for (let [key, value] of Object.entries(obj)) {
		if (typeof value === "object") {
			const flattenValue = flattenObject(value);
			for (const [fk, fv] of Object.entries(flattenValue)) {
				const nk = key + "." + fk;
				flattenedObj[nk] = fv;
			}
		} else {
			flattenedObj[key] = value;
		}
	}

	return flattenedObj;
}

//For the purpose of user debugging.
const x = flattenObject({ a: { b: { c: 2 }, d: 3 }, e: undefined, f: null });
console.log(x);

module.exports = flattenObject;
