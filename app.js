let tasks = [];
        
const taskContainer = document.getElementById("taskContainer");
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskTable = document.getElementById("taskTable");


function renderTasks() {
    taskTable.innerHTML = '';
    tasks.forEach((task, index) => {
        const row = document.createElement("tr");
        row.classList.add("border-b", "border-b-stone-800", "text-[13px]", "hover:bg-neutral-700", "hover:text-white");
        
        row.innerHTML = `
            <td class="p-2">${index + 1}</td>
            <td>${task.name}</td>
            <td>
                <select onchange="updateStatus(${index})" class="border rounded px-2 text-black hover:text-black">
                    <option value="Todo" ${task.status === 'Todo' ? 'selected' : ''}>Todo</option>
                    <option value="In progress" ${task.status === 'In progress' ? 'selected' : ''}>In progress</option>
                    <option value="Complete" ${task.status === 'Complete' ? 'selected' : ''}>Complete</option>
                </select>
            </td>
            <td class="text-green-700 hover:text-sky-400" onclick="editTask(${index})"><i class="fa-solid fa-pen"></i></td>
            <td class="hover:text-red-700" onclick="removeTask(${index})"><i class="fa-regular fa-trash-can"></i></td>
        `;
        taskTable.appendChild(row);
    });
}


addTaskButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
        tasks.push({ name: taskName, status: "Todo" });
        taskInput.value = '';
        renderTasks();
    } else {
        alert("Task name cannot be empty.");
    }
});


function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


function editTask(index) {
    const newTaskName = prompt("Edit Task Name:", tasks[index].name);
    if (newTaskName !== null) {
        tasks[index].name = newTaskName;
        renderTasks();
    }
}


function updateStatus(index) {
    const statusSelect = event.target;
    tasks[index].status = statusSelect.value;
    renderTasks();
}


renderTasks();
