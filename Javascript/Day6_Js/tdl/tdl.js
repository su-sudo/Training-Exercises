document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.querySelector('.task-list');

    addTaskBtn.addEventListener('click', addTask);
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') return;

    const taskList = document.querySelector('.task-list');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskTextSpan);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);

    taskInput.value = '';
}
