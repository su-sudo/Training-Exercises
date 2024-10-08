document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.querySelector('.task-list');

    addTaskBtn.addEventListener('click', addTask);

    taskList.addEventListener("click",(event)=>{
        
        if (event.target.classList.contains("delete-btn")){
            const taskDiv = event.target.closest(".task");
            taskList.removeChild(taskDiv);
        }
        else if( event.target.type ==="checkbox"){

            const taskTextSpan = event.target.nextElementSibling;
            if(event.target.checked){
                taskTextSpan.style.textDecoration ="line-through";
            }
            else{
                taskTextSpan.style.textDecoration ="none";
            }
        }
    });


});

function addTask() {

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value;

    if(taskText === "")
        return;

    const taskList = document.querySelector(".task-list");
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("task");

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = String.fromCharCode("&#128465;");

    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskTextSpan);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);

    

}
