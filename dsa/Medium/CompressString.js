function compressString(str) {
	if (!str) return "";

	let res = "";
	let count = 1;

	for (let i = 1; i <= str.length; i++) {
		if (str[i] === str[i - 1]) {
			count++;
		} else {
			let ch = str[i - 1];
			while (count > 9) {
				res += ch + "9";
				count -= 9;
			}
			res += ch + (count > 1 ? count : "");
			count = 1;
		}
	}

	return res;
}

const x = compressString("aaabbbccccccccccc");
console.log(x);

module.exports = compressString;
