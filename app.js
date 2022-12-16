let input = document.querySelector(".new-todo-list");
let todoList = document.querySelector(".todo-list");
input.addEventListener("keypress", addTask);
input.addEventListener("keypress", findCountOfUncheckedTasks);

let count = 0;
function addTask(e) {
	if (e.keyCode == 13) {
		e.preventDefault();
		count++;
		let newDiv = document.createElement("div");
		newDiv.classList.add("taskDiv" + count);
		todoList.appendChild(newDiv);
		let newInput = document.createElement("input");
		newInput.type = "checkbox";
		newInput.name = "task" + count;
		newInput.id = "task";
		newDiv.appendChild(newInput);
		let newLabel = document.createElement("label");
		newLabel.htmlFor = "task" + count;
		newLabel.id = "task";
		newLabel.innerText = input.value;

		newDiv.append(newLabel);
		let newButton = document.createElement("button");
		newButton.classList.add("delete");
		newButton.id = "delete" + count;
		newButton.innerText = "delete";
		newDiv.appendChild(newButton);

		if (newLabel.innerText === "") {
			newLabel.parentElement.remove();
		}
		input.value = "";
	}
}

let toggleAllInput = document.querySelector(".toggle-all");
toggleAllInput.addEventListener("change", toggleAllInputFn);
toggleAllInput.addEventListener("change", findCountOfUncheckedTasks);
toggleAllInput.addEventListener("change", clearCompletedButtonDisplayFn);
function toggleAllInputFn(e) {
	let newInputs = document.querySelectorAll("input#task");
	//	console.log(newInputs);
	if (this.checked) {
		newInputs.forEach((input) => (input.checked = true));
	} else {
		newInputs.forEach((input) => (input.checked = false));
	}
}

let todolist = document.querySelector(".todo-list");
//capturing the delete button click event when it bubbles up to the <div class="todo-list">

todolist.addEventListener("click", deleteTask);
todolist.addEventListener("click", findCountOfUncheckedTasks);
todolist.addEventListener("click", clearCompletedButtonDisplayFn);

function deleteTask(e) {
	//console.log(e.target.nodeName);
	if (e.target.nodeName === "BUTTON") {
		let taskline = e.target.parentElement;
		taskline.remove();
	}
}

function findCountOfUncheckedTasks(e) {
	let noOfUncheckedTasks = document.querySelector(".items-left");
	let countOfUncheckedTasks = 0;
	newInputs = document.querySelectorAll("input#task");

	newInputs.forEach((input) => {
		if (input.checked === false) {
			countOfUncheckedTasks++;
		}
	});
	noOfUncheckedTasks.innerText = countOfUncheckedTasks + " tasks left";
}

//clear completed button
function clearCompletedButtonDisplayFn(e) {
	if (e.target.nodeName === "INPUT") {
		newInputs = document.querySelectorAll("input#task");
		let countOfUncheckedTasks = 0;
		newInputs.forEach((input) => {
			if (input.checked) {
				countOfUncheckedTasks++;
			}
			if (countOfUncheckedTasks > 0) {
				document.querySelector(".clear-completed").style.display =
					"inline-block";
			} else {
				document.querySelector(".clear-completed").style.display = "none";
			}
		});
	}
}
let clearCompletedButton = document.querySelector(".clear-completed");
clearCompletedButton.addEventListener("click", clearCompletedButtonfn);
function clearCompletedButtonfn(e) {
	newInputs = document.querySelectorAll("input#task");
	newInputs.forEach((input) => {
		if (input.checked) {
			input.parentElement.remove();
		}
	});
}

let showAllBtn = document.querySelector(".all");
showAllBtn.addEventListener("click", showAllBtnFn);
function showAllBtnFn(e) {
	newInputs = document.querySelectorAll("input#task");
	newInputs.forEach((input) => {
		input.parentElement.style.display = "flex";
	});
}

let showActiveBtn = document.querySelector(".active");
showActiveBtn.addEventListener("click", showActiveBtnFn);
function showActiveBtnFn(e) {
	newInputs = document.querySelectorAll("input#task");
	newInputs.forEach((input) => {
		if (input.checked) {
			input.parentElement.style.display = "none";
		} else {
			input.parentElement.style.display = "flex";
		}
	});
}

let showCompletedBtn = document.querySelector(".completed");
showCompletedBtn.addEventListener("click", showCompletedBtnFn);
function showCompletedBtnFn(e) {
	newInputs = document.querySelectorAll("input#task");
	newInputs.forEach((input) => {
		if (!input.checked) {
			input.parentElement.style.display = "none";
		} else {
			input.parentElement.style.display = "flex";
		}
	});
}
