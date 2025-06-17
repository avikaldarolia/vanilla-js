function searchRotatedArray(nums, target) {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const mid = Math.floor((l + r) / 2);

		if (nums[mid] === target) {
			return mid;
		}

		if (nums[l] <= nums[mid]) {
			if (nums[l] <= target && target < nums[mid]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		} else {
			if (nums[mid] < target && target <= nums[r]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
	}

	return -1;
}

//For the purpose of user debugging.
//pass your array and target in function call
const x = searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 1);

console.log(x);

module.exports = searchRotatedArray;
