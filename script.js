let images = [1, 2, 3, 4];
let currentIndex = 1;
let timeDelay = 3000;
let size = 4;

// Changes Index as per the time given.
const handleIndexChange = (item, size, time) => {
	console.log(size, time);
	setInterval(() => {
		item.innerHTML = `${images[currentIndex]}`;
		currentIndex = (currentIndex + 1) % size;
	}, time);
};

const init = () => {
	const item = document.getElementById("carousel-item");
	// Change the index of the item.
	handleIndexChange(item, size, timeDelay);
};

init();
