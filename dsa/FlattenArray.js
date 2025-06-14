function flattenArray(arr) {
	// Your implementation
	return arr.reduce(
		(acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
		[]
	);
}

//For the purpose of user debugging.
const val = flattenArray([1, [2, [3, 4], 5], 6]);
console.log(val);

module.exports = flattenArray;
