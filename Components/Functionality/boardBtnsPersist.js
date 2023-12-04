persistBoardsBtnDisplay();

function persistBoardsBtnDisplay() {
    if(window.localStorage.length !== 0) {
        displayBtnsExisting();
    }
}

function displayBtnsExisting() {
    var localStorageBoardInfo = JSON.parse(window.localStorage.getItem("Boards"));

    //For each board object, make the button and append to the div
    for(const e of Object.keys(localStorageBoardInfo)) {
        var boardObj = localStorageBoardInfo[e];
        var boardKeys = Object.keys(boardObj);
        var boardId = boardObj[boardKeys[0]];
        var boardName = boardObj[boardKeys[1]];
        var boardColour = boardObj[boardKeys[2]];

        //Each board btn has the following: boardName, boardId, className (boardBtn), style = "--boardBtn-colour: " + boardColour
        var newBtn = document.createElement("button");
        newBtn.innerHTML = boardName;
        newBtn.id = boardId;
        newBtn.className = 'boardBtn';
        newBtn.style = "--boardBtn-colour: " + boardColour;
        document.getElementById("newBoardsDiv").appendChild(newBtn);
    };
}