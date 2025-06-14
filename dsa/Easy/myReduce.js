Array.prototype.myReduce = function (callback, initialValue) {
	// Your implementation
	let acc = initialValue;
	for (let i = 0; i < this.length; i++) {
		acc = callback(acc, this[i], i, this);
	}

	return acc;
};
