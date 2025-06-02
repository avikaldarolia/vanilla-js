//For the purpose of user debugging.
function chunkArray(arr, n) {
	// Your implementation
	let chunks = Math.ceil(arr.length / n);
	let chunkedArray = [];
	let i = 0;
	while (chunks--) {
		chunkedArray.push(arr.slice(i, Math.min(arr.length, i + n)));
		i += n;
	}

	return chunkedArray;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray;
