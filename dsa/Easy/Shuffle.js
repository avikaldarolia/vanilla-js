function shuffle(array) {
	const arr = Array.from(array);

	let currentIndex = arr.length;

	while (currentIndex !== 0) {
		const randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[arr[currentIndex], arr[randomIndex]] = [
			arr[randomIndex],
			arr[currentIndex],
		];
	}

	return arr;
}

//For the purpose of user debugging.
const val = shuffle([1, 2, 3, 4, 5]);
console.log(val);

module.exports = shuffle;
