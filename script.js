const addButton = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("task-container");
const taskField = document.getElementById("new-task-input");

addButton.addEventListener("click", () => {
    let taskText = taskField.value;
    newTaskDiv = document.createElement('div');
    newTaskDiv.innerHTML = `
    <div class="task-div">
            <label for="task-checkbox"><input id="task-checkbox" type="checkbox">${taskText}</label>
            <button id="button1">x</button>
    </div>
        `
    taskContainer.prepend(newTaskDiv);
})