document.getElementById("createNewBoardBtn").addEventListener("click", createNewBoard);

function createNewBoard() { 
    //Set up new data for this board
    var boardId = generateBoardId();
    window.localStorage.setItem("Boards", boardId);
    var newBtn = document.createElement("button");
    newBtn.innerHTML = "New Button!";
    newBtn.id = "newBtn"

    document.getElementById("newBoardsDiv").appendChild(newBtn);
}

function generateBoardId() {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
}