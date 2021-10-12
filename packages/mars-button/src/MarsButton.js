let myTemplate = `
<style>
    button {
        border: none;
        background-color: #5f3993;
        cursor: pointer;
        outline: none;
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 1rem;
    }

    button:hover {
        background-color: ##9f7fcd;
    }

    button:active, button:focus {
        background-color: #472b6e;
    }
</style>

<button>
    <slot></slot>
</button>
`;

export class MarsButton extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }

  constructor() {
    super();
    let template = document.createElement("template");
    template.innerHTML = myTemplate;
    // attach to the Shadow DOM
    const root = this.attachShadow({ mode: "open" });
    root.appendChild(template.content.cloneNode(true));
    this.element = root.querySelector("button");
    this.slotNode = this.element.querySelector("slot");
  }

  connectedCallback() {
    this.element.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("on-click", {
          bubbles: true,
          composed: true,
          detail: {
            value: this.value || this.innerHTML,
          },
        })
      );
    });
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(data) {
    this.setAttribute("value", data);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal) {
      return;
    }

    if (name === "value") {
      this.value = newVal;
      this.updateValue();
    }
  }

  updateValue() {
    if (this.slotNode) {
      this.slotNode.innerHTML = this.value;
    }
  }
}
