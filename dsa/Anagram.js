function isAnagram(str1, str2) {
	// Your implementation
	if (str1.length != str2.length) {
		return false;
	}

	const hash = {};
	str1.split("").forEach((val) => {
		hash[val] = (hash[val] || 0) + 1;
	});

	console.log(hash);

	for (let char of str2) {
		if (!hash[char]) {
			return false;
		}

		hash[char]--;
		if (hash[char] === 0) {
			delete hash[char];
		}
	}

	return Object.keys(hash).length === 0;
}

//For the purpose of user debugging.
const val = isAnagram("listex", "silent");
console.log(val);

module.exports = isAnagram;
