const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function completeTask(button) {
  const li = button.parentElement;
  li.classList.add("complete");
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}
