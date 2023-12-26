document.getElementById("addListBtn").addEventListener("click", addNewList);

function addNewList() {
    newListPopup();
}

function newListPopup() {
    console.log("add a new list...");

    var popupDiv =  document.createElement("div");
    popupDiv.id = "listPopupDiv";
    document.getElementById("popupContainer").appendChild(popupDiv);

    var newListForm = document.createElement("form");
    newListForm.id = "newListForm";
    document.getElementById("listPopupDiv").appendChild(newListForm);

    var nlfTitle = document.createElement("h3");
    nlfTitle.innerHTML = "Add New List";
    nlfTitle.id = "nlfTitle";

    var nlfInputListName = document.createElement("input");
    nlfInputListName.id = "nlfInput";
    var nlfInputListNameLabel = document.createElement("label");
    nlfInputListNameLabel.id = "nlfInputLabel";
    nlfInputListNameLabel.htmlFor = "nlfInput";
    nlfInputListNameLabel.innerHTML = "List Name";
    var nlfSaveBtn = document.createElement("button");
    nlfSaveBtn.innerHTML = "Save";
    nlfSaveBtn.id = "nlfSaveBtn";

    var nlfCloseBtn = document.createElement("button");
    nlfCloseBtn.innerHTML = "Close"
    nlfCloseBtn.id = "nlfCloseBtn";

    newListForm.appendChild(nlfTitle);
    newListForm.appendChild(nlfInputListNameLabel);
    newListForm.appendChild(nlfInputListName);
    newListForm.appendChild(nlfSaveBtn);
    newListForm.appendChild(nlfCloseBtn);

    addClickEventToListPopup("nlfSaveBtn", "nlfCloseBtn");
}

function addClickEventToListPopup(sBtnId, cBtnId) {
    var saveBtn = document.getElementById(sBtnId);
    var closeBtn = document.getElementById(cBtnId);

    saveBtn.addEventListener("click", saveListEvent);
    closeBtn.addEventListener("click", closeListPopup);
}

function saveListEvent(evt) {
    evt.preventDefault();

    //Get current board
    var curBoardId = window.localStorage.getItem("ActiveBoardId");
    var newListName = document.getElementById("nlfInput").value;
    if(curBoardId !== null) {
        var curBoard = JSON.parse(window.localStorage.getItem("Boards"))[curBoardId];
        console.log("Current board before list add: " + JSON.stringify(curBoard));
        var newListName = document.getElementById("nlfInput").value;
    
        var newListObj = {
            listName: newListName,
            listItemsObj: {},
            listOrder: 0
        }
    
        var curBoardNumLists = Object.keys(curBoard["boardLists"]).length;
        //console.log("current board, number of lists: " + curBoardNumLists + " - current board: " + JSON.stringify(curBoard["boardLists"]));
        
        //Update list order accordingly
        newListObj["listOrder"] = curBoardNumLists + 1;
    
        //Save list into current board
        var lists = {
            [newListName]: newListObj,
        }
        if(curBoardNumLists > 0) {
            //Lists already exist in board, append new list object to this board's lists object
            lists = curBoard["boardLists"];
            lists[newListName] = newListObj;
        }
        curBoard["boardLists"] = lists;
        //console.log(JSON.stringify(curBoard));
    
        //Save board back into Boards object in local storage
        var boards = JSON.parse(window.localStorage.getItem("Boards"));
        boards[curBoardId] = curBoard;
        window.localStorage.setItem("Boards", JSON.stringify(boards));
    } else if(newListName === "") {
        alert("Please choose the list name")
    } else {
       alert("Please select a board before adding a list");
    }
}

function closeListPopup(evt) {
    evt.preventDefault();
    console.log("close new list popup");
    var popup = document.getElementById("listPopupDiv");
    popup.remove();
}