function curry(fn) {
	// Your implementation
	return function curried(...args) {
		if (args.length === 0) {
			return fn();
		}

		if (args.length >= fn.length) {
			return fn(...args);
		} else {
			return function (...nextArgs) {
				return curried(...args, ...nextArgs);
			};
		}
	};
}

//For the purpose of user debugging.
//pass appropriate input in below function call

function sum(a, b, c) {
	return a + b + c;
}
const val = curry(sum);
console.log(val(1)(2)(3));
console.log(val(1)(2, 3));
console.log(val(1, 2)(3));
console.log(val(1, 2, 3));

module.exports = curry;
