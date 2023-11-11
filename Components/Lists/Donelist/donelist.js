class Donelist extends HTMLElement {
    constructor() {
        super();

        //Create a shadow root to encapsulate the style + component
        this.attachShadow({ mode: "open" });

        //Create a template for the donelist
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                /* Style the donelist */
                .donelist {
                    background-color: lightgreen;
                    height: 100vh;
                    width: 25vw;
                }
            </style>
            <div class="donelist">
                <h4>Done (0)</h4>
                <p> testing ...</p>
            </div>
        `;

        //Append the template to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        //Select the elements from the shadow root
        this.donelist = this.shadowRoot.querySelector(".donelist")
    }
}

//Register the custom element with the browser
customElements.define("done-list", Donelist);