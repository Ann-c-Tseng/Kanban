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
                    margin: 0;
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
    }
}

//Register the custom element with the browser
customElements.define("side-menu", Sidemenu);