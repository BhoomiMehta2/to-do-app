// Step 1: Get references to elements
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Step 2: Add event listener to the Add button
addBtn.addEventListener("click", addTask);

// Step 3: Function to add a task
function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new <li> element
  const li = document.createElement("li");

  // Create a span for task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Step 4: Add click to mark as complete
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete-btn";

  // Step 5: Add event to delete button
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Add span and button to li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add li to the task list
  taskList.appendChild(li);

  // Clear input box
  input.value = "";
}

