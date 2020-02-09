import "./dropdown.scss";

class DropDown {
  constructor(mp, list) {
    this.list = list;
    this.mountPoint = mp;
  }
  init() {
    this.render();
    this.renderList();
  }

  render() {
    this.btn = document.createElement("button");
    this.dropdown = document.createElement("div");
    this.btn.innerHTML = "Dropdown";
    this.btn.classList.add("btn");
    this.dropdown.style.position = "absolute";
    this.dropdown.classList.add("dropdownClass");
    this.mountPoint.appendChild(this.btn);
    this.btn.appendChild(this.dropdown);
    this.btn.onclick = () => {
      this.dropdown.style.visibility = "visible";
    };
  }
  renderList() {
    for (let item of this.list) {
      this.renderItem(item);
    }
  }
  renderItem(list) {
    this.list = document.createElement("a");
    this.dropdown.appendChild(this.list);
    this.list.innerHTML = list.title;
    this.list.href = list.href;
    this.list.style.display = "flex";
    this.list.style.flexDirection = "column";
    this.list.classList.add("listClass");
    this.list.onclick = () => {
      this.btn.innerHTML = this.list.innerHTML;
    };
  }
}

export { DropDown };
