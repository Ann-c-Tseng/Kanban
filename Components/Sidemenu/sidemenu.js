// Define a class for the sidemenu element
class Sidemenu extends HTLElement {
    static get observedAttributes() {
        return ["filler", "filler2"]
    }

    constructor() {
        //Always call super first in constructor
        super();

        // Create a shadow root
        this.attachShadow({ mode: "open" });

        // Create a template for the sidemenu 
        const template = document.createElement("template");
        template.innerHTML = `
            /* Style the sidemenu */
            .sidemenu {
                background-color: black;
                height: 100px;
                width: 100px;
            }
        `;

        //Append the template to the shadow root
        
    }
}