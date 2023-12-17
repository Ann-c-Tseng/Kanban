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
    nlfInputListName.id = "nlfInputTitle";
    var nlfInputListNameLabel = document.createElement("label");
    nlfInputListNameLabel.id = "nlfInputListNameLabel";
    nlfInputListNameLabel.htmlFor = "nlfInputListName";
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

    saveBtn.addEventListener("click", saveEvent);
    closeBtn.addEventListener("click", closeEvent);
}

function saveEvent(evt) {
    evt.preventDefault();
}

function closeEvent(evt) {
    evt.preventDefault();
}