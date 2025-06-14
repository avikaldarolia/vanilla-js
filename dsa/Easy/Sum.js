function sum(...args) {
	// Your implementation

	return args.reduce((acc, cur) => (acc += cur), 0);
}

//For the purpose of user debugging.
const val = sum(5, -5, 10, 20);
console.log(val);

module.exports = sum;
