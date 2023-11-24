document.getElementById("createNewBoardBtn").addEventListener("click", createNewBoard);

function createNewBoard() { 
   var newBtn = document.createElement("button");
   newBtn.innerHTML = "New Button!";
   newBtn.id = "newBtn"

   document.getElementById("newBoardsDiv").appendChild(newBtn);
}