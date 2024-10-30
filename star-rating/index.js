const MAX_RATING = 5;
let selectedStars = -1;
const stars = document.getElementById("stars");

stars.addEventListener("click", (e) => {
	const id = e.target.getAttribute("star-id");
	selectedStars = id;
	renderStars();
});

const createStar = (idx, golden = false) => {
	let star = document.createElement("span");
	if (golden) {
		star.innerHTML = `&#9733;`;
		star.classList.add("filled");
	} else {
		star.innerHTML = `&#9734;`;
	}

	star.setAttribute("star-id", idx);
	return star;
};

const renderStars = () => {
	stars.innerHTML = "";
	for (let i = 0; i < MAX_RATING; i++) {
		let golden = false;
		if (i <= selectedStars) {
			golden = true;
		}
		let star = createStar(i, golden);
		stars.appendChild(star);
	}
};

renderStars();
