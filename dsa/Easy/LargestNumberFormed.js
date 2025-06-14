function formLargestNumber(arr) {
	//write your implementation here
	let vals = arr.map(String);

	vals.sort((a, b) => (b + a).localeCompare(a + b));

	if (vals[0] === "0") return 0;

	return vals.reduce((acc, cur) => acc + cur, "");
}
const input = [3, 30, 34, 5, 9];
const val = formLargestNumber(input);

console.log(val);
