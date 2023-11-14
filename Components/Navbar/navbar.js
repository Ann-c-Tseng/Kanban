class ResponsiveNavbar extends HTMLElement {    
    constructor() {
        super();

        //Create a shadow root to encapsulate the style + content of the component
        this.attachShadow({ mode: "open" });

        //Create a template for the navbar
        const template = document.createElement("template");
        template.innerHTML =   `
            <style>
                /* Style the navbar */
                .navbar {
                    background-color: pink;
                    height: auto;
                    width: 100vw;
                }
            </style>
            <div class="navbar">
                <button class="navButton" type="button">+ Add New Task</button>
            </div>
        `;

        //Append the template to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        //Select the elements from the shadow root
        this.navbar = this.shadowRoot.querySelector(".navbar");
        this.navButton = this.shadowRoot.querySelector(".navButton");

        function popupTaskForm() {
            alert("You clicked the button!");
        }

        this.navButton.addEventListener("click", popupTaskForm);
    }



}

//Register the custom element with the browser
customElements.define("nav-bar", ResponsiveNavbar);