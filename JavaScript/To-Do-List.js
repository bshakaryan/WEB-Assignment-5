const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Task cannot be empty! Please enter a valid task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-success btn-sm';
    completeBtn.textContent = 'Complete';

    completeBtn.onclick = () => {
        taskSpan.classList.toggle('text-decoration-line-through');
        taskSpan.classList.toggle('text-muted');
        completeBtn.textContent = taskSpan.classList.contains('text-decoration-line-through') ? 'Undo' : 'Complete';
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';

    deleteBtn.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = '';
}
