const btn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");

// Open modal
function openModal() {
	modal.classList.add("show");
	overlay.classList.add("show");
	modal.setAttribute("aria-hidden", "false");
	btn.setAttribute("aria-expanded", "true");
	modal.focus();
}

// Close modal
function closeModal() {
	modal.classList.remove("show");
	overlay.classList.remove("show");
	modal.setAttribute("aria-hidden", "true");
	btn.setAttribute("aria-expanded", "false");
}

// Toggle modal on button click
btn.addEventListener("click", () => {
	if (modal.classList.contains("show")) {
		closeModal();
	} else {
		openModal();
	}
});

overlay.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && modal.classList.contains("show")) {
		closeModal();
	}
});
