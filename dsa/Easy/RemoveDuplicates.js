function removeDuplicates(arr) {
	// your code here
	const res = [];
	const hash = {};

	arr.forEach((val) => {
		if (!hash.hasOwnProperty(val)) {
			res.push(val);
			hash[val] = true;
		}
	});

	return res;
}

const val = removeDuplicates([1, 2, 2, 3, 4, 4]);
console.log(val);

module.exports = removeDuplicates;
