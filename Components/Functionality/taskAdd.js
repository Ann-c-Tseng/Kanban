var navBarBtnElement = document.getElementById("navBarBtn");

navBarBtnElement.addEventListener("click", createNewTask);

function createNewTask() {
    //Create new tasks if boards exist, if not throw warning
    if(window.localStorage.length !== 0 && window.localStorage.getItem("ActiveBoardId") !== null) {
        newTaskCreation();
    } else {
        alert("Please make sure your current board exists with lists, before adding a task.");
    }
}

function newTaskCreation() {
    console.log("task creation");
    newTaskPopup();
}

function newTaskPopup() {
    var popupDiv = document.createElement("div");
    popupDiv.id = "taskPopupDiv";
    document.getElementById("popupContainer").appendChild(popupDiv);

    var newTaskForm = document.createElement("form");
    newTaskForm.id = "newTaskForm";
    document.getElementById("taskPopupDiv").appendChild(newTaskForm);

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
    ntfInputTitleLabel.innerHTML = "Title";

    var ntfInputDescription = document.createElement("input");
    ntfInputDescription.id = "ntfInputDescription";
    var ntfInputDescriptionLabel = document.createElement("label");
    ntfInputDescriptionLabel.htmlFor = "ntfInputDescription";
    ntfInputDescriptionLabel.innerHTML = "Description";

    var subtaskDiv = document.createElement("div");
    subtaskDiv.class = "subtaskDiv";
    var ntfInputSubtasks = document.createElement("input");
    ntfInputSubtasks.id = "ntfInputSubtasks";
    var ntfInputSubtasksDelBtn = document.createElement("button");
    ntfInputSubtasksDelBtn.id = "ntfInputSubtasksDelBtn";
    ntfInputSubtasksDelBtn.innerHTML = "x";
    subtaskDiv.appendChild(ntfInputSubtasks);
    subtaskDiv.appendChild(ntfInputSubtasksDelBtn);
    var ntfInputSubtasksLabel = document.createElement("label");
    ntfInputSubtasksLabel.htmlFor = "ntfInputSubtasks";
    ntfInputSubtasksLabel.innerHTML = "Subtasks";

    var ntfAddNewSubtaskBtn = document.createElement("button");
    ntfAddNewSubtaskBtn.innerHTML = "Add New Subtask"
    ntfAddNewSubtaskBtn.id = "ntfAddNewSubtaskBtn";

    var ntfInputStatus = document.createElement("select");
    ntfInputStatus.id = "ntfInputStatus";
    //TODO: Grab the dropdown list options for select element and populate ntfInputStatus element
    var ntfInputStatusLabel = document.createElement("label");
    ntfInputStatusLabel.htmlFor = "ntfInputStatus";
    ntfInputStatusLabel.innerHTML = "Status";

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
    newTaskForm.appendChild(subtaskDiv);
    newTaskForm.appendChild(ntfAddNewSubtaskBtn);
    newTaskForm.appendChild(ntfInputStatusLabel);
    newTaskForm.appendChild(ntfInputStatus);
    newTaskForm.appendChild(ntfCreateTaskBtn);
}



