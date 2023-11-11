class Todolist extends HTMLElement {
    constructor() {
        super();

        //Create a shadow root to encapsulate the style + component
        this.attachShadow({ mode: "open" });

        //Create a template for the todolist
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                /* Style the todolist */
                .todolist {
                    background-color: lightgreen;
                    height: 100vh;
                    width: 25vw;
                }
            </style>
            <div class="todolist">
                <h4>Todo (0)</h4>
                <p> testing ...</p>
            </div>
        `;

        //Append the template to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        //Select the elements from the shadow root
        this.todolist = this.shadowRoot.querySelector(".todolist")
    }
}

//Register the custom element with the browser
customElements.define("todo-list", Todolist);