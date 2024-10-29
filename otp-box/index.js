const OTP_SIZE = 4;
const createInputBox = (id) => {
	const box = document.createElement("input");
	box.type = Number;
	box.maxLength = 1;
	box.max = 9;
	box.min = 0;
	box.required = true;
	box.setAttribute("data-id", id);
	box.classList.add("box");
	return box;
};

function init() {
	const inputContainer = document.getElementById("input-container");
	for (let i = 0; i < OTP_SIZE; i++) {
		const box = createInputBox(i);
		inputContainer.appendChild(box);
	}

	inputContainer.addEventListener("keydown", (e) => {
		e.preventDefault();
		const key = parseInt(e.key);

		if (e.key == "Backspace") {
			if (e.target.value) {
				e.target.value = "";
				return;
			}

			const boxId = parseInt(e.target.getAttribute("data-id"));
			const previousBox = boxId !== 0 ? e.target.previousSibling : e.target;

			previousBox.value = "";
			previousBox?.focus();
		}

		// handle if key is NaN or out of bounds
		if (key > 9 || key < 0 || isNaN(key)) {
			return;
		}

		const boxId = e.target.getAttribute("data-id");
		e.target.value = key;

		let element =
			parseInt(boxId) !== OTP_SIZE - 1
				? e.target.nextSibling
				: document.querySelector("[data-id='0']");

		while (element && element.value) {
			element = element.nextSibling;
		}

		element?.focus();
	});

	inputContainer.addEventListener("paste", (e) => {
		const data = e.clipboardData.getData("text").split("");

		data.forEach((num, idx) => {
			const box = document.querySelector(`[data-id='${idx}']`);
			box.value = num;
			box.focus();
		});
	});
}

init();
