function makeCounter(initialValue = 0) {
	// Your implementation
	let counter = initialValue || 0;
	return {
		increment: () => {
			counter = counter + 1;
			return counter;
		},
		decrement: () => {
			counter = Math.max(0, counter - 1);
			return counter;
		},
		reset: () => {
			counter = initialValue || 0;
			return counter;
		},
	};
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());

module.exports = makeCounter;
