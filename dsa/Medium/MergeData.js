function mergeData(arr1, arr2) {
	// Your implementation
	const idMap = new Map();

	for (const obj of arr2) {
		idMap.set(obj.id, { ...obj });
	}

	for (const obj of arr1) {
		if (!idMap.has(obj.id)) {
			idMap.set(obj.id, { ...obj });
		} else {
			const existingObject = idMap.get(obj.id);

			for (const [key, value] of Object.entries(obj)) {
				if (key !== "id" && !(key in existingObject)) {
					existingObject[key] = value;
				}
			}
		}
	}

	return Array.from(idMap.values());
}

//For the purpose of user debugging.
//pass your arrays in function call

const arr1 = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
];

const arr2 = [
	{ id: 2, age: 30 },
	{ id: 3, name: "Charlie" },
];
const val = mergeData(arr1, arr2);

console.log(val);

module.exports = mergeData;
