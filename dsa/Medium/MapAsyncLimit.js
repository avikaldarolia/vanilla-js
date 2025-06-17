async function mapAsyncLimit(arr, limit, asyncFn) {
	// Your implementation
	if (
		!Array.isArray(arr) ||
		typeof asyncFn !== "function" ||
		typeof limit !== "number"
	) {
		throw new Error("Invalid arguments");
	}

	let ans = [];
	// Limit: distribute array into Chunks
	let i = 0;
	while (i < arr.length) {
		const chunk = arr.slice(i, i + limit);
		const promises = chunk.map(asyncFn);
		const results = await Promise.allSettled(promises);
		ans.push(...results);
		i += limit;
	}

	return ans;
}

const delayFn = (x) =>
	new Promise((resolve) => setTimeout(() => resolve(x * 2), 1000));

(async () => {
	const x = await mapAsyncLimit([1, 2, 3, 4], 2, delayFn);
	console.log(x);
})();
module.exports = mapAsyncLimit;
