const addButton = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("task-container");
const taskField = document.getElementById("new-task-input");
let deleteBtns = document.getElementsByClassName('delete-btn')


addButton.addEventListener("click", addTask);
taskField.addEventListener("keydown", (event) => {
    if(event.key == 'Enter') {
        addTask();
    }
});

function addTask() {
    if(taskField.value != '') {
        let taskText = taskField.value;
        newTaskDiv = document.createElement('div');
        newTaskDiv.innerHTML = `
         <div class="task-div">
            <label class="text-label" for="checkbox"><input class="checkbox" type="checkbox">${taskText}</label>
            <button class="delete-btn" onclick="deleteTask(this)">x</button>
        </div>
    </div>
            `
        taskContainer.prepend(newTaskDiv);
        taskField.value = ``;
    } else {
        alert(`Task field can't be empty!`)
    }
};

function deleteTask(element) {
    let parentElement = element.parentElement;
    parentElement.remove();
}
