function customSort(arr) {
	//write your implementation here
	arr.sort((a, b) => {
		const aIsString = typeof a === "string";
		const bIsString = typeof b === "string";

		if (aIsString && bIsString) {
			return a.localeCompare(b); // alphabetical sort
		} else if (!aIsString && !bIsString) {
			return a - b; // numeric sort
		} else if (aIsString && !bIsString) {
			return -1; // strings come first
		} else {
			return 1; // numbers come after
		}
	});

	return arr;
}

const input = ["g", "f", "s", 5, 2, "c", "e", 6, 1, "a"];
const val = customSort(input);
console.log(val);

module.exports = customSort;
