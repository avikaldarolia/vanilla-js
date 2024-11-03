const STEPS_COUNT = 5;
let activeIndex = 0;

const colors = ["#FF5733", "#3498DB", "#27AE60", "#8E44AD", "#F1C40F"];

const steps = document.getElementById("steps");
const stepContainer = document.getElementById("step-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const generateSteps = (parent, count) => {
	for (let i = 0; i < count; i++) {
		const step = document.createElement("span");
		step.setAttribute("step-id", i);
		step.textContent = i + 1;
		step.classList.add("step");

		// HORIZONTAL RULE
		const horizontalRule = document.createElement("span");
		horizontalRule.classList.add("line");
		horizontalRule.setAttribute("line-id", i);

		step.addEventListener("click", () => {
			activeIndex = i;
			handleStepChange(prevBtn, nextBtn, stepContainer);
		});
		parent.appendChild(step);
		if (i !== count - 1) {
			parent.appendChild(horizontalRule);
		}
	}
};

const handleStepChange = (prev, next, container) => {
	prev.disabled = activeIndex === 0;
	next.disabled = activeIndex === STEPS_COUNT - 1;
	container.style.backgroundColor = colors[activeIndex];
	prev.disabled = activeIndex === 0;
	next.disabled = activeIndex === STEPS_COUNT - 1;
	container.style.backgroundColor = colors[activeIndex];

	document.querySelectorAll(".step").forEach((step, index) => {
		step.classList.toggle("active", index === activeIndex);
	});

	const lines = document.querySelectorAll(".line");
	lines.forEach((line) => {
		const id = line.getAttribute("line-id");
		line.classList.toggle("lineActive", id < activeIndex);
	});
};

const init = () => {
	stepContainer.style.backgroundColor = colors[activeIndex];
	prevBtn.disabled = true;

	prevBtn.addEventListener("click", () => {
		activeIndex = Math.max(activeIndex - 1, 0);
		handleStepChange(prevBtn, nextBtn, stepContainer);
	});

	nextBtn.addEventListener("click", () => {
		activeIndex = Math.min(activeIndex + 1, STEPS_COUNT - 1);
		handleStepChange(prevBtn, nextBtn, stepContainer);
	});

	generateSteps(steps, STEPS_COUNT);
};

init();
