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
    var popupDiv = document.createElement("div");
    popupDiv.id = "popupDiv";
    document.getElementById("popupContainer").appendChild(popupDiv)

    var newTaskForm = document.createElement("form");
    newTaskForm.id = "newTaskForm";
    document.getElementById("popupDiv").appendChild(newTaskForm);

    var ntfCloseBtn = document.createElement("button");
    ntfCloseBtn.innerHTML = "Close"
    ntfCloseBtn.id = "ntfCloseBtn";

    var ntfTitle = document.createElement("h3");
    ntfTitle.innerHTML = "Add New Task"
    ntfTitle.id = "ntfTitle";

    var ntfInputTitle = document.createElement("input");
    ntfInputTitle.id = "ntfInputTitle";
    var ntfInputTitleLabel = document.createElement("label");
    ntfInputTitleLabel.htmlFor = "ntfInputTitle";
    ntfInputTitleLabel.innerHTML = "Test1";

    var ntfInputDescription = document.createElement("input");
    ntfInputDescription.id = "ntfInputDescription";
    var ntfInputDescriptionLabel = document.createElement("label");
    ntfInputDescriptionLabel.htmlFor = "ntfInputDescription";
    ntfInputDescriptionLabel.innerHTML = "Test2";

    var ntfInputSubtasks = document.createElement("input");
    ntfInputSubtasks.id = "ntfInputSubtasks";
    var ntfInputSubtasksLabel = document.createElement("label");
    ntfInputSubtasksLabel.htmlFor = "ntfInputSubtasks";
    ntfInputSubtasksLabel.innerHTML = "Test3";

    var ntfAddNewSubtaskBtn = document.createElement("button");
    ntfAddNewSubtaskBtn.innerHTML = "Add New Subtask"
    ntfAddNewSubtaskBtn.id = "ntfAddNewSubtaskBtn";

    var ntfInputStatus = document.createElement("input");
    ntfInputStatus.id = "ntfInputStatus";
    var ntfInputStatusLabel = document.createElement("label");
    ntfInputStatusLabel.htmlFor = "ntfInputStatus";
    ntfInputStatusLabel.innerHTML = "Test4";

    var ntfCreateTaskBtn = document.createElement("button");
    ntfCreateTaskBtn.innerHTML = "Create Task Button"
    ntfCreateTaskBtn.id = "ntfCreateTaskBtn";

    newTaskForm.appendChild(ntfCloseBtn);
    newTaskForm.appendChild(ntfTitle);
    newTaskForm.appendChild(ntfInputTitleLabel);
    newTaskForm.appendChild(ntfInputTitle);
    newTaskForm.appendChild(ntfInputDescriptionLabel);
    newTaskForm.appendChild(ntfInputDescription);
    newTaskForm.appendChild(ntfInputSubtasksLabel);
    newTaskForm.appendChild(ntfInputSubtasks);
    newTaskForm.appendChild(ntfAddNewSubtaskBtn);
    newTaskForm.appendChild(ntfInputStatusLabel);
    newTaskForm.appendChild(ntfInputStatus);
    newTaskForm.appendChild(ntfCreateTaskBtn);
}



