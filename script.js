let images = [1, 2, 3, 4];
let currentIndex = 0;
let timeDelay = 3000;
let size = 4;
let previousElement = -1;

let dots = Array(size);

const updateCarousel = (item, dots, index) => {
	// A bit of fix required here
	if (previousElement !== -1) {
		previousElement = currentIndex;
	}

	// updating the current index
	currentIndex = index;
	dots.children[currentIndex].classList.add("white-dot");
	item.innerHTML = `${images[currentIndex]}`;

	// Remove the highlight from the previous dot
	if (previousElement !== -1) {
		dots.children[previousElement].classList.remove("white-dot");
	} else {
		previousElement = currentIndex;
	}
};

const handleIndexChange = (item, dots) => {
	setInterval(() => {
		const nextIndex = (currentIndex + 1) % size;
		updateCarousel(item, dots, nextIndex);
	}, timeDelay);
};

const init = () => {
	const item = document.getElementById("carousel-item");

	const dots = document.getElementById("dots");
	for (let i = 0; i < size; i++) {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dot.id = `dot-${i}`;
		dots.appendChild(dot);

		// Add event listeners to jump to the index
		dot.addEventListener("click", () => {
			updateCarousel(item, dots, i);
		});
	}

	// Run the function immediately
	updateCarousel(item, dots, currentIndex);

	// Start the automatic sliding
	handleIndexChange(item, dots);
};

init();
