var navBarBtnElement = document.getElementById("navBarBtn");

navBarBtnElement.addEventListener("click", createNewTask);

function createNewTask() {
    //Create new tasks if boards exist, if not throw warning
    if(window.localStorage.length !== 0) {
        newTaskCreation();
    } else {
        alert("There are no boards currently, please add a board first before adding a task");
    }
}

function newTaskCreation() {
    console.log("task creation");
    newTaskPopup();
}

function newTaskPopup() {
    var newTaskForm = document.createElement("form");
    newTaskForm.id = "newTaskForm";
    document.getElementById("popupDiv").appendChild(newTaskForm);

    var ntfTitle = document.createElement("h3");
    ntfTitle.innerHTML = "Add New Task"
    ntfTitle.id = "ntfTitle";
    var ntfInputTitle = document.createElement("input");
    ntfInputTitle.id = "ntfInputTitle";
    var ntfInputDescription = document.createElement("input");
    ntfInputDescription.id = "ntfInputDescription";
    var ntfInputSubtasks = document.createElement("input");
    ntfInputSubtasks.id = "ntfInputSubtasks";
    var ntfAddNewSubtaskBtn = document.createElement("button");
    ntfAddNewSubtaskBtn.innerHTML = "Add New Subtask"
    ntfAddNewSubtaskBtn.id = "ntfAddNewSubtaskBtn";
    var ntfInputStatus = document.createElement("input");
    ntfInputStatus.id = "ntfInputStatus";
    var ntfCreateTaskBtn = document.createElement("button");
    ntfCreateTaskBtn.innerHTML = "Create Task Button"
    ntfCreateTaskBtn.id = "ntfCreateTaskBtn";

    newTaskForm.appendChild(ntfTitle);
    newTaskForm.appendChild(ntfInputTitle);
    newTaskForm.appendChild(ntfInputDescription);
    newTaskForm.appendChild(ntfInputSubtasks);
    newTaskForm.appendChild(ntfAddNewSubtaskBtn);
    newTaskForm.appendChild(ntfInputStatus);
    newTaskForm.appendChild(ntfCreateTaskBtn);
}



