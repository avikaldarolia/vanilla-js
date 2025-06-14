function reverseWords(sentence) {
	// Your implementation
	return sentence
		.trim()
		.split(" ")
		.map((w) => w.split("").reverse().join(""))
		.join(" ");
}

//For the purpose of user debugging.
const val = reverseWords("Hello World");
console.log(val);

module.exports = reverseWords;
