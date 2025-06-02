//For the purpose of user debugging.
function findMissingNumber(nums) {
	// Your implementation
	const n = nums.length;
	let sum = (n * (n + 1)) / 2;

	let runningSum = nums.reduce((acc, el) => acc + el, 0);

	return sum - runningSum;
}

//For the purpose of user debugging.
console.log(findMissingNumber([3, 0, 2]));
