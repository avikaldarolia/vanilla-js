function createTaskElement(taskContent) {
	const newTask = document.createElement("p");
	newTask.textContent = taskContent;
	newTask.setAttribute("draggable", true);
	newTask.classList.add("task");
	newTask.id = "task-" + Date.now();

	newTask.addEventListener("dragstart", dragStart);
	return newTask;
}

function addtask() {
	const inputValue = document.getElementById("task-input").value.trim();

	if (inputValue === "") {
		alert("Please enter a task.");
		return;
	}

	const newTask = createTaskElement(inputValue);

	// Adding to the Backlog section
	const backlogRow = document.querySelector(".row:first-child");
	backlogRow.appendChild(newTask);

	document.getElementById("task-input").value = "";
}

function dragStart(event) {
	event.dataTransfer.setData("text/plain", event.target.textContent);
	event.dataTransfer.setData("taskId", event.target.id);
}

function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();

	const taskContent = event.dataTransfer.getData("text/plain");

	// Check if the drop target is valid (row body, not the row header)
	if (event.target.classList.contains("row-header")) {
		return; // Prevent adding tasks to the header
	}

	const newTask = createTaskElement(taskContent);
	event.target.appendChild(newTask);

	const taskId = event.dataTransfer.getData("taskId");
	const oldTask = document.getElementById(taskId);
	if (oldTask) {
		oldTask.remove();
	}
}
