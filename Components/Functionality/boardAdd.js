import {boardBtnEvent} from './selectActiveBoard.js';

document.getElementById("createNewBoardBtn").addEventListener("click", createNewBoard);

function createNewBoard() { 

    var boardId = generateBoardId();
    var boardOrder = getOrder();
    var boardName = "Board - " + boardOrder;
    var boardColour = hexGenerator();

    var boardObj = {     
        boardId: boardId,
        boardName: boardName, 
        boardColour: boardColour,
        boardOrder: boardOrder,
        boardLists: {},
    }

    var boardArr = {
        [boardId]: boardObj
    }

    if(window.localStorage.length !== 0) {
        //Boards already existing in memory, add new board to list.
        boardArr = JSON.parse(window.localStorage.getItem("Boards"));

        boardArr[boardId] = boardObj;
    }

    boardArr = JSON.stringify(boardArr);

    window.localStorage.setItem("Boards", boardArr);

    generateBoardBtn(boardName, boardId, boardColour);
}

function generateBoardId() {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
}

function hexGenerator() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

function generateBoardBtn(boardName, boardId, boardColour) {
    var newBtn = document.createElement("button");
    newBtn.innerHTML = boardName;
    newBtn.id = boardId;
    newBtn.className = 'boardBtn';
    newBtn.style = "--boardBtn-colour: " + boardColour;

    newBtn.addEventListener("click", boardBtnEvent);
    document.getElementById("newBoardsDiv").appendChild(newBtn);
}

function getOrder() {
    if(window.localStorage.length === 0) {
        return 1;
    } else {
        var CurStorageLength = Object.keys(window.JSON.parse(window.localStorage.getItem("Boards"))).length;
        return CurStorageLength + 1;
    }
}