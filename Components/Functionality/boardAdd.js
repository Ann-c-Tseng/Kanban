document.getElementById("createNewBoardBtn").addEventListener("click", createNewBoard);

function createNewBoard() { 
    //Check in local storage is empty, meaning no boards are in record yet.
    if(window.localStorage.length === 0) {
        //If no boards were created, then we can create the "Boards" key value pair for the first time, and add a board Obj to it
        //Set up new board with boardId, boardName, boardLists (empty if new board)
        var boardId = generateBoardId();
        var boardName = "Board - " + boardId;
        var boardObj = {
            [boardId]: {
                boardId: boardId,
                boardName: boardName, 
                boardOrder: 1,
                boardLists: {}
            }
        }

        boardObj = JSON.stringify(boardObj);

        window.localStorage.setItem("Boards", boardObj);
        var newBtn = document.createElement("button");
        newBtn.innerHTML = boardName;
        newBtn.id = boardId;

        document.getElementById("newBoardsDiv").appendChild(newBtn);
    } else {
        //Otherwise, there's boards already existing in memory, add a new board to that list and save it
        var boardArr = JSON.parse(window.localStorage.getItem("Boards"));
        console.log(boardArr);
        var boardId = generateBoardId();
        var boardName = "Board - " + boardId;

        var boardObj = {     
            boardId: boardId,
            boardName: boardName, 
            boardOrder: Object.keys(boardArr).length + 1,
            boardLists: {}
        }

        boardArr[boardId] = boardObj;

        boardArr = JSON.stringify(boardArr);

        window.localStorage.setItem("Boards", boardArr);
        var newBtn = document.createElement("button");
        newBtn.innerHTML = boardName;
        newBtn.id = boardId;

        document.getElementById("newBoardsDiv").appendChild(newBtn);
    }
}

function generateBoardId() {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
}