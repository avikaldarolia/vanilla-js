let images = [1, 2, 3, 4];
let currentIndex = 0;
let timeDelay = 3000;
let size = 4;
let previousElement = -1;

let dots = Array(size);

// Changes Index as per the time given.
const handleIndexChange = (item, dots, size, time) => {
	let previousElement = -1;
	setInterval(() => {
		dots.children[currentIndex].classList.add("white-dot");
		item.innerHTML = `${images[currentIndex]}`;
		currentIndex = (currentIndex + 1) % size;

		// do nothing about
		if (previousElement === -1) {
			previousElement = 0;
			return;
		} else if (previousElement === 0) {
			previousElement = size - 1;
		} else {
			previousElement = currentIndex - 1;
		}

		dots.children[previousElement].classList.remove("white-dot");
	}, time);
};

const updateChangeOfIndex = (item, dots) => {
	if (previousElement === -1) {
		previousElement = currentIndex;
		dots.children[currentIndex].classList.add("white-dot");
		item.innerHTML = `${images[currentIndex]}`;

		return;
	}

	// Store the last element
	previousElement = currentIndex;

	// Update the current Index
	currentIndex = (currentIndex + 1) % size;

	// Add the class to the new child
	dots.children[currentIndex].classList.add("white-dot");
	item.innerHTML = `${images[currentIndex]}`;

	dots.children[previousElement].classList.remove("white-dot");
};

const init = () => {
	const item = document.getElementById("carousel-item");

	const dots = document.getElementById("dots");
	for (let i = 0; i < size; i++) {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dot.id = `dot-${i}`;
		dots.appendChild(dot);
	}

	// Run the function immediately
	updateChangeOfIndex(item, dots);

	// Then run after every interval
	setInterval(updateChangeOfIndex, timeDelay, item, dots);
};

init();
