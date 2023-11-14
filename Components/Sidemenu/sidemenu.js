// Define a class for the sidemenu element
class Sidemenu extends HTMLElement {
    constructor() {
        super();

        //Create a shadow root to encapsulate the style + content of the component
        this.attachShadow({ mode: "open" });

        //Create a template for the sidemenu 
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                /* Style the sidemenu */
                .sidemenu {
                    background-color: lightblue;
                    height: 100vh;
                    width: 150px;
                }
            </style>
            <div class="sidemenu">
                <h4>All boards (1)</h4>
                <button class="sidemenuButton" type="button">Test Board</button>
                <button class="createNewBoardButton" type="button">+ Create New Board</button>
            </div>
        `;

        //Append the template to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        //Select the elements from the shadow root
        this.sidemenu = this.shadowRoot.querySelector(".sidemenu");
        this.sidemenuButton = this.shadowRoot.querySelector(".sidemenuButton");
        this.createNewBoardButton = this.shadowRoot.querySelector(".createNewBoardButton");

        //Set basic empty board data array structure (board id, board name, todolist array, doinglist array, donelist array)
        var todoList = [];
        var doingList = [];
        var doneList = []; 

        function generateId() {
            var boardId = "";
            boardId = Math.random().toString(20).substring(2, 10);
            return boardId;
        }

        function addBoard() {
            var currentBoards = JSON.parse(localStorage.getItem('boards'));

            var id = generateId();

            //Create board object
            var theBoard = {         
                bId: id,
                name: '<' + id + '>',
                todoL: todoList,
                doingL: doingList,
                doneL: doneList
                
            };

            //Add the new board to already existing currentBoards
            currentBoards[id] = theBoard;

            //Stringify boards object
            var bString = JSON.stringify(currentBoards);

            //Save to local storage
            localStorage.setItem("boards", bString);
        }

        function createBoard() {
            if(window.localStorage.length !== 0) {
                addBoard();
            } else { 
                var id = generateId();

                //Create board object
                var b = {
                    bId: id,
                    name: '<' + id + '>',
                    todoL: todoList,
                    doingL: doingList,
                    doneL: doneList
                };

                //Set the object within the new localStorage object "boards"
                var boards = {[b.bId]:b};

                //Stringify boards object
                var bString = JSON.stringify(boards);
    
                //Save to local storage
                localStorage.setItem("boards", bString);
            }
        }

        this.createNewBoardButton.addEventListener("click", createBoard);
    }
}

//Register the custom element with the browser
customElements.define("side-menu", Sidemenu);