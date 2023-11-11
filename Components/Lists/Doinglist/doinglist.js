class Doinglist extends HTMLElement {
    constructor() {
        super();

        //Create a shadow root to encapsulate the style + component
        this.attachShadow({ mode: "open" });

        //Create a template for the doinglist
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                /* Style the doinglist */
                .doinglist {
                    background-color: lightgreen;
                    height: 100vh;
                    width: 25vw;
                }
            </style>
            <div class="doinglist">
                <h4>Doing (0)</h4>
                <p> testing ...</p>
            </div>
        `;

        //Append the template to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        //Select the elements from the shadow root
        this.doinglist = this.shadowRoot.querySelector(".doinglist")
    }
}

//Register the custom element with the browser
customElements.define("doing-list", Doinglist);