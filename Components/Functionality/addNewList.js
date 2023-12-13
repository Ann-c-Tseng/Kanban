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

    var nlfCloseBtn = document.createElement("button");
    nlfCloseBtn.innerHTML = "Close"
    nlfCloseBtn.id = "nlfCloseBtn";

    newListForm.appendChild(nlfCloseBtn);
}