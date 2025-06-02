function findMaxNumber(arr) {
	// Your implementation
	return arr.reduce((acc, el) => {
		return Math.max(acc, el);
	}, arr[0]);
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber;
