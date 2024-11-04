const diameter = 100;
let coords = [];

const findOverlaps = (x1, y1) => {
	let overlaps = 0;

	coords.map((coord) => {
		const { x, y } = coord;

		const distanceBetweenTwoPoints = Math.sqrt(
			Math.pow(x - x1, 2) + Math.pow(y - y1, 2)
		);

		if (distanceBetweenTwoPoints < diameter) {
			overlaps++;
		}
	});

	return overlaps;
};

const generateCircle = (e) => {
	const { clientX, clientY } = e;
	const overlaps = findOverlaps(clientX, clientY);

	coords.push({ x: clientX, y: clientY });

	const circle = document.createElement("span");
	circle.innerText = overlaps;
	circle.classList.add("circle");
	circle.style.position = "absolute";
	circle.style.left = `calc(${clientX}px - ${diameter / 2}px)`;
	circle.style.top = `calc(${clientY}px - ${diameter / 2}px)`;
	circle.style.backgroundColor = `#${Math.trunc(Math.random() * 1000000)}`;

	document.body.appendChild(circle);
};

document.addEventListener("click", generateCircle);
