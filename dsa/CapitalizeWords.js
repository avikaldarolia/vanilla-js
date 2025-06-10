function capitalizeWords(sentence) {
	// Your implementation
	return sentence
		.trim()
		.split(" ")
		.map((el) => (el ? el[0].toUpperCase() + el.substr(1) : ""))
		.join(" ");
}

//For the purpose of user debugging.
console.log(capitalizeWords("hello world"));
