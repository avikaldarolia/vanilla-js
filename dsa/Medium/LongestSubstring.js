function lengthOfLongestSubstring(s) {
	// Your implementation
	if (s.length <= 1) {
		return s.length;
	}

	const hash = {};
	let i = 0,
		j = 0;

	let ans = 1;
	while (i < s.length) {
		const val = s[i];
		if (hash.hasOwnProperty(val)) {
			j = Math.max(j, hash[val] + 1);
		}

		ans = Math.max(ans, i - j + 1);
		hash[val] = i;
		i++;
	}

	return ans;
}

//For the purpose of user debugging.
const val = lengthOfLongestSubstring("tmmzuxt");
console.log(val);

module.exports = lengthOfLongestSubstring;
