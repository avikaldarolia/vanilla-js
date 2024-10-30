const MAX_RATING = 5;
let selectedStars = -1;
const stars = document.getElementById("stars");

const createStar = (idx, golden = false) => {
	let star = document.createElement("span");
	star.innerHTML = golden ? `&#9733;` : `&#9734;`;
	star.classList.toggle("filled", golden);
	star.setAttribute("star-id", idx);
	star.setAttribute("role", "radio");
	star.setAttribute("aria-checked", golden);
	return star;
};

const highlightStars = (id) => {
	const starsSpans = stars.children;
	for (let i = 0; i < MAX_RATING; i++) {
		starsSpans[i].classList.toggle("hovered", i <= id);
	}
};

stars.addEventListener("mouseover", (e) => {
	const id = e.target.getAttribute("star-id");
	if (id !== null) {
		highlightStars(id);
	}
});

stars.addEventListener("mouseleave", () => renderStars());

const renderStars = () => {
	stars.innerHTML = "";
	for (let i = 0; i < MAX_RATING; i++) {
		let golden = i <= selectedStars;
		let star = createStar(i, golden);
		stars.appendChild(star);
	}
};
renderStars();

stars.addEventListener("click", (e) => {
	const id = e.target.getAttribute("star-id");
	selectedStars = id;
	renderStars();
});
