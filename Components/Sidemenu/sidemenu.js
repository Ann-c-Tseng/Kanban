// Define a class for the sidemenu element
class Sidemenu extends HTMLElement {
    constructor() {
        //Always call super first in constructor
        super();

        // Create a shadow root to encapsulate the style + content of the component
        this.attachShadow({ mode: "open" });

        // Create a template for the sidemenu 
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                /* Style the sidemenu */
                .sidemenu {
                    background-color: green;
                    height: 300px;
                    width: 300px;
                }
            </style>
            <div class="sidemenu">
                <h1 class="h1hello">hello</h1>
                <h2 class="h2howareyou"> how are you? </h2>
            </div>
        `;

        //Append the template to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Select the elements from the shadow root
        this.sidemenu = this.shadowRoot.querySelector(".sidemenu");
        this.h1hello = this.shadowRoot.querySelector(".h1hello")
        this.h2howareyou = this.shadowRoot.querySelector(".h2howareyou")
    }
}

//Register the custom element with the browser
customElements.define("side-menu", Sidemenu);