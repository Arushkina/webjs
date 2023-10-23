// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // If the input is empty, do nothing

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="checkmark">&#10004;</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        <button class="complete-button" onclick="completeTask(this)">Complete</button>
    `;

    document.getElementById("taskList").appendChild(li); // Append the new task to the list
    taskInput.value = ""; // Clear the input field
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove(); // Remove the task's parent element (the entire li)
}

// Function to mark a task as complete or incomplete
function completeTask(button) {
    const span = button.previousElementSibling.previousElementSibling; // Get the task's text element
    span.classList.toggle("completed"); // Toggle the 'completed' class to add/remove line-through styling
}
