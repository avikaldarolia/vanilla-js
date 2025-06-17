function debounce(fn, delay) {
	// Your implementation
	let timer = null;

	return function (...args) {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			fn(...args);
			timer = true;
		}, delay);
	};
}

//For the purpose of user debugging.
//pass appropriate input in below function call
const x = debounce(console.log, 300);
console.log(x("Hello"));

module.exports = debounce;
