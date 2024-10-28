let images = [1, 2, 3, 4];
let currentIndex = 0;
let timeDelay = 3000;
let size = 4;
let previousElement = -1;
let interval;

const fetchImages = async () => {
	console.log("check");

	for (let i = 0; i < size; i++) {
		const res = await fetch(`https://picsum.photos/200/300?random=${i}`);
		const img = res.url;
		images.push(img);
	}
};

const updateCarousel = (item, dots, index) => {
	if (previousElement !== -1) {
		previousElement = currentIndex;
	}

	// updating the current index
	currentIndex = index;
	dots.children[currentIndex].classList.add("white-dot");
	item.textContent = images[currentIndex];
	// item.style.backgroundImage = `url(${images[currentIndex]})`;

	// Remove the highlight from the previous dot
	if (previousElement !== -1) {
		dots.children[previousElement].classList.remove("white-dot");
	} else {
		previousElement = currentIndex;
	}
};

const handleIndexChange = (item, dots) => {
	clearInterval(interval);

	interval = setInterval(() => {
		const nextIndex = (currentIndex + 1) % size;
		updateCarousel(item, dots, nextIndex);
	}, timeDelay);
};

const init = async () => {
	const item = document.getElementById("carousel-item");
	const dots = document.getElementById("dots");

	// await fetchImages();

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

	// Pause on Hover
	item.addEventListener("mouseenter", () => {
		clearInterval(interval);
	});

	// Restart when mouse leaves
	item.addEventListener("mouseleave", () => {
		handleIndexChange(item, dots);
	});

	const nextButton = document.getElementById("next-btn");
	const prevButton = document.getElementById("prev-btn");

	nextButton.addEventListener("click", () => {
		clearInterval(interval);
		const nextIndex = (currentIndex + 1) % size;
		updateCarousel(item, dots, nextIndex);
		handleIndexChange(item, dots);
	});

	prevButton.addEventListener("click", () => {
		clearInterval(interval);
		const prevIndex = (currentIndex - 1 + size) % size;
		updateCarousel(item, dots, prevIndex);
		handleIndexChange(item, dots);
	});

	// Run the function immediately
	updateCarousel(item, dots, currentIndex);

	// Start the automatic sliding
	handleIndexChange(item, dots);
};

init();
