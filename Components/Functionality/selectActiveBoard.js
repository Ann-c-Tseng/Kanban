// attachClickToBoards();

// //If local storage is not empty for the Boards object, then attach click event to all board buttons
// function attachClickToBoards() {
//     var boardsObj = JSON.parse(window.localStorage.getItem("Boards"));
//     var numBoards = Object.keys(boardsObj).length;
    
//     window.onload = function() {
//         Object.entries(boardsObj).map(b => {
//             var btn = document.getElementById(b[0]);
//             btn.addEventListener("click", boardClickFunction);
//         });
//     }
// }
// function boardClickFunction(evt) {
//     alert("You just clicked on a board btn " + evt.currentTarget.id);

// }


export function attachClickToBoards() {
    alert("hello");
}