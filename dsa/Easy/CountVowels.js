function countVowels(str) {
	// Your implementation
	return str.split("").reduce((acc, el) => {
		const val = el.toLowerCase();
		if (
			val === "a" ||
			val === "e" ||
			val === "i" ||
			val === "o" ||
			val === "u"
		) {
			return acc + 1;
		}
		return acc;
	}, 0);
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels;
