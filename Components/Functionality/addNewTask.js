var navBarBtnElement = document.getElementById("navBarBtn");

navBarBtnElement.addEventListener("click", createNewTask);

function createNewTask() {
    //Create new tasks if current board exist with list(s), if not throw warning
    if(currentBoardHasLists()) {
        newTaskCreation();
    } else {
        alert("Please make sure the board you are currently on has at least one list.");
    }
}

function currentBoardHasLists() {
    var boards = JSON.parse(window.localStorage.getItem("Boards"));
    var curBoardId = JSON.parse(window.localStorage.getItem("ActiveBoardId"));

    if(boards !== null && JSON.stringify(curBoardId) !== null) {
        var curBoard = boards[JSON.stringify(curBoardId)];
        
        var bListsLength = Object.keys(curBoard["boardLists"]).length;

        if(bListsLength === 0) {
            alert("no lists available on this board");
            return bListsLength;
        }

        return bListsLength;
    } else {
        alert("return false in currentboardhaslists");
        return false;
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
    ntfTitle.innerHTML = "Add New Task";
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
    subtaskDiv.id = "subtaskDiv";

    var ntfInputSubtasks = document.createElement("input");
    ntfInputSubtasks.id = "ntfInputSubtasks";
    var ntfInputSubtasksDelBtn = document.createElement("button");
    ntfInputSubtasksDelBtn.id = "ntfInputSubtasksDelBtn1";
    ntfInputSubtasksDelBtn.innerHTML = "x";
    subtaskDiv.appendChild(ntfInputSubtasks);
    subtaskDiv.appendChild(ntfInputSubtasksDelBtn);
    var ntfInputSubtasksLabel = document.createElement("label");
    ntfInputSubtasksLabel.htmlFor = "ntfInputSubtasks";
    ntfInputSubtasksLabel.innerHTML = "Subtasks";

    var ntfAddNewSubtaskBtn = document.createElement("button");
    ntfAddNewSubtaskBtn.innerHTML = "Add New Subtask"
    ntfAddNewSubtaskBtn.id = "ntfAddNewSubtaskBtn";

    // var ntfInputStatus = document.createElement("select");
    // ntfInputStatus.id = "ntfInputStatus";
    // var ntfInputStatusLabel = document.createElement("label");
    // ntfInputStatusLabel.htmlFor = "ntfInputStatus";
    // ntfInputStatusLabel.innerHTML = "Status";

    const listNamesArr = grabCurrentBoardListNames();
    console.log(listNamesArr);

    const ntfSelect = document.createElement('select');
    for (let i = 0; i < listNamesArr.length; i++) {
        const option = document.createElement('option');
        option.value = listNamesArr[i].value;
        option.text = listNamesArr[i].text;
        ntfSelect.appendChild(option);
    }

    console.log("hello")

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

    //newTaskForm.appendChild(ntfInputStatusLabel);
    //newTaskForm.appendChild(ntfInputStatus);
    newTaskForm.appendChild(ntfSelect);

    newTaskForm.appendChild(ntfCreateTaskBtn);

    //Click events list
    ntfCloseBtn.addEventListener('click', closeTaskPopup);
    ntfInputSubtasksDelBtn.addEventListener('click', subtaskDelete);
    ntfAddNewSubtaskBtn.addEventListener('click', subtaskAdd);
    //ntfInputStatus.addEventListener('click', selectStatus);
    ntfCreateTaskBtn.addEventListener('click', createTask);
}

function grabCurrentBoardListNames() {
    var curBoard = JSON.parse(window.localStorage.getItem("Boards"))[JSON.parse(window.localStorage.getItem("ActiveBoardId"))];
    var curBoardListNames = Object.keys(curBoard["boardLists"]);
    var listNameArr = [];
    for(var i = 0; i < curBoardListNames.length; i++) {
        listNameArr.push({value: 'option'+(i+1), text: curBoardListNames[i]})
    }
    return listNameArr;
}


function closeTaskPopup(Event) {
    Event.preventDefault();
    var popup = document.getElementById("taskPopupDiv");
    popup.remove();
    console.log("close task popup");
}

function subtaskDelete(Event) {
    Event.preventDefault();
    console.log("subtask deleting...");
}

function subtaskAdd(Event) {
    Event.preventDefault();
    console.log("subtask adding...");
}

function selectStatus(Event) {
    Event.preventDefault();
    console.log("select status...");
}

function createTask(Event) {
    Event.preventDefault();
    console.log("create task...");
}






