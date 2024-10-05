const addButton = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("task-container");
const taskField = document.getElementById("new-task-input");
const clearTaskButton = document.getElementById("clear-tasks-btn");
let deleteBtns = document.getElementsByClassName('delete-btn');
let checkboxes = document.getElementsByClassName('checkbox');


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
        deleteBtns = document.getElementsByClassName('delete-btn');
        checkboxes = document.getElementsByClassName('checkbox');
        addLineThrough();
    } else {
        alert(`Task field can't be empty!`)
    }
};

clearTaskButton.addEventListener("click", (event) => {
    taskContainer.innerHTML = '';
})

function deleteTask(element) {
    let parentElement = element.parentElement;
    parentElement.remove();
}

function addLineThrough() {
    
Array.from(checkboxes).forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if(checkbox.checked) {
            checkbox.parentElement.classList.add('line-through');
        } else {
            checkbox.parentElement.classList.remove('line-through');
        }
     })
    })
}