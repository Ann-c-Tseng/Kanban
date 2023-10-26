// Define a class for the navbar element
class ResponsiveNavbar extends HTMLElement {
    // Specify the observed attributes for attributeChangedCallback
    static get observedAttributes() {
      return ["title", "links"];
    }
  
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      this.attachShadow({ mode: "open" });
  
      // Create a template for the navbar
      const template = document.createElement("template");
      template.innerHTML = `
        <style>
          /* Style the navbar */
          .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #333;
            color: white;
            padding: 10px;
          }
  
          /* Style the title */
          .navbar-title {
            font-size: 24px;
            font-weight: bold;
          }
  
          /* Style the links */
          .navbar-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }
  
          /* Style the link items */
          .navbar-link-item {
            margin: 0 10px;
          }
  
          /* Style the link anchors */
          .navbar-link-anchor {
            color: white;
            text-decoration: none;
          }
  
          /* Style the link anchors on hover */
          .navbar-link-anchor:hover {
            color: #04AA6D;
          }
  
          /* Style the toggle button */
          .navbar-toggle-button {
            display: none;
            width: 40px;
            height: 40px;
            border: none;
            background-color: transparent;
            cursor: pointer;
          }
  
          /* Style the toggle button icon */
          .navbar-toggle-icon {
            display: block;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
          }
  
          /* Hide the links on small screens */
          @media screen and (max-width: 600px) {
            .navbar-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background-color: #333;
              z-index: 1;
            }
  
            /* Show the toggle button on small screens */
            .navbar-toggle-button {
              display: block;
            }
            
            /* Show the links when the navbar is expanded */
            .navbar-expanded .navbar-links {
              display: flex;
            }
          }
        </style>
        <div class="navbar">
          <span class="navbar-title"></span>
          <ul class="navbar-links"></ul>
          <button class="navbar-toggle-button">
            <span class="navbar-toggle-icon"></span>
          </button>
        </div>
      `;
  
      // Append the template to the shadow root
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Select the elements from the shadow root
      this.navbar = this.shadowRoot.querySelector(".navbar");
      this.title = this.shadowRoot.querySelector(".navbar-title");
      this.links = this.shadowRoot.querySelector(".navbar-links");
      this.toggleButton = this.shadowRoot.querySelector(".navbar-toggle-button");
  
      // Add a click event listener to the toggle button
      this.toggleButton.addEventListener("click", () => {
        this.navbar.classList.toggle("navbar-expanded");
      });
    }
  
    // Get the title attribute value
    get titleValue() {
      return this.getAttribute("title");
    }
  
    // Set the title attribute value
    set titleValue(value) {
      this.setAttribute("title", value);
    }
  
    // Get the links attribute value
    get linksValue() {
      return this.getAttribute("links");
    }
  
    // Set the links attribute value
    set linksValue(value) {
      this.setAttribute("links", value);
    }
  
    // Called when the element is connected to the document
    connectedCallback() {
      // Set the title text content
      this.title.textContent = this.titleValue;
  
      // Parse the links attribute value as JSON
      const linksArray = JSON.parse(this.linksValue);
  
      // Loop through the links array and create list items and anchors
      for (let link of linksArray) {
        // Create a list item element
        const linkItem = document.createElement("li");
        linkItem.classList.add("navbar-link-item");
  
        // Create an anchor element
        const linkAnchor = document.createElement("a");
        linkAnchor.classList.add("navbar-link-anchor");
        linkAnchor.href = link.href;
        linkAnchor.textContent = link.text;
  
        // Append the anchor to the list item
        linkItem.appendChild(linkAnchor);
  
        // Append the list item to the links list
        this.links.appendChild(linkItem);
      }
    }
  
    // Called when the element is disconnected from the document
    disconnectedCallback() {
      // Remove the click event listener from the toggle button
      this.toggleButton.removeEventListener("click", () => {
        this.navbar.classList.toggle("navbar-expanded");
      });
    }
  
    // Called when an observed attribute is changed, added, removed, or replaced
    attributeChangedCallback(name, oldValue, newValue) {
      // Check which attribute is changed
      if (name === "title") {
        // Update the title text content
        this.title.textContent = newValue;
      } else if (name === "links") {
        // Remove all the existing list items from the links list
        while (this.links.firstChild) {
          this.links.removeChild(this.links.firstChild);
        }
  
        // Parse the new links attribute value as JSON
        const linksArray = JSON.parse(newValue);
  
        // Loop through the new links array and create list items and anchors
        for (let link of linksArray) {
          // Create a list item element
          const linkItem = document.createElement("li");
          linkItem.classList.add("navbar-link-item");
  
          // Create an anchor element
          const linkAnchor = document.createElement("a");
          linkAnchor.classList.add("navbar-link-anchor");
          linkAnchor.href = link.href;
          linkAnchor.textContent = link.text;
  
          // Append the anchor to the list item
          linkItem.appendChild(linkAnchor);
  
          // Append the list item to the links list
          this.links.appendChild(linkItem);
        }
      }
    }
  }
  
  // Register the custom element with the browser
  customElements.define("responsive-navbar", ResponsiveNavbar);