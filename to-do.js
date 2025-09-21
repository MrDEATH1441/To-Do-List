const inpt = document.getElementById("newTask");
const list = document.getElementById("inner-list");
const button = document.getElementById("btn1");
let tasks = [];

button.addEventListener("click", () => {
    inpt.value = "";
    inpt.focus();
});

inpt.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});


function addNewTask(newtask){
    tasks.push(newtask);
}

function addTasksToList(){
    tasks.forEach(task => {
    // Check if a checkbox already exists
    if (!task.querySelector("input[type='checkbox']")) {
        const tick = document.createElement("input");
        tick.type = "checkbox";
        tick.className = "donzo";
        task.appendChild(tick);
    }

    // Append to the list (you may want to clear first)
    list.appendChild(task);
    });
}

function newtaskinput(){
    let newtask = document.createElement("li");
    newtask.textContent = inpt.value;
    addNewTask(newtask);
    addTasksToList();
}

function checkStatus() {
    const checkboxes = Array.from(document.getElementsByClassName("donzo"));
    checkboxes.forEach(cb => {
        if (cb.checked) {
            const taskElement = cb.parentElement;
            taskElement.remove();
            tasks = tasks.filter(task => task !== taskElement);
        }
    });
}
