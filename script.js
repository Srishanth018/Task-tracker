function addTask() {
    var taskInput = document.getElementById("taskInput");
    var todoList = document.getElementById("todoList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        li.remove();
    };

    var completeButton = document.createElement("button");
    completeButton.textContent = "Mark as Completed";
    completeButton.onclick = function() {
        li.remove();
        completedList.appendChild(li);
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    todoList.appendChild(li);

    taskInput.value = "";
}
