function groupBy(arr, key) {
	// Your implementation

	if (arr.length === 0) {
		return {};
	}

	return arr.reduce((acc, cur) => {
		const keyP = cur[key];
		const value = acc[keyP] || [];
		value.push(cur);
		acc[keyP] = value;
		return acc;
	}, {});
}
const val = groupBy(
	[
		{ name: "Alice", age: 25 },
		{ name: "Bob", age: 30 },
		{ name: "Charlie", age: 25 },
	],
	"age"
);
console.log(val);

module.exports = groupBy;
