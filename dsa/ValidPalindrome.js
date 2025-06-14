function isAlpha(str) {
	return /^[a-zA-Z]+$/.test(str);
}

function validatePalindrome(str) {
	// Your implementation
	const cleanedStr = str
		.split("")
		.filter((v) => isAlpha(v))
		.map((ch) => ch.toLowerCase())
		.join("");

	const n = cleanedStr.length;
	for (let i = 0; i < n / 2; i++) {
		if (cleanedStr[i] !== cleanedStr[n - 1 - i]) {
			return false;
		}
	}

	return true;
}

//For the purpose of user debugging.
const val = validatePalindrome("A man, a plan, a canal: Panama");
console.log(val);

module.exports = validatePalindrome;
