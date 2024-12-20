function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Create list item for the task
        const li = document.createElement("li");

        // Create text node for the task
        const taskNode = document.createTextNode(taskText);
        li.appendChild(taskNode);

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete");
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };
        li.appendChild(deleteButton);

        // Mark task as completed when clicked
        li.onclick = function (e) {
            if (e.target !== deleteButton) {
                li.classList.toggle("completed");
            }
        };

        // Add task item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}
