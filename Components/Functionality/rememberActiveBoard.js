//Go into local memory
//Find out each board id that currently exist
//Select the board with boardOrder 1 if user has just reloaded the page, to have the first board selected
//Attach click event to each of the board buttons so that when a user selects a board, the active board is remembered in local memory, and the corresponding lists are brought up

//If local storage is not empty for the Boards object, then attach click event to all board buttons
function attachClickToBoards() {
    var boardsObj = JSON.parse(window.localStorage.getItem("Boards"));
    var numBoards = Object.keys(boardsObj).length;
    
    Object.entries(boardsObj).map(b => {
        console.log(b);
    });
}

attachClickToBoards();