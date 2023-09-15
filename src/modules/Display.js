export class Display {

  static init() {
    const navToggleBtn = document.querySelector(".nav-toggle");
    navToggleBtn.addEventListener("click", this.toggleNav);
  }

  static toggleNav() {
    const content = document.querySelector(".content");
    const navContent = document.querySelector(".nav-content");
    const navToggleBtn = document.querySelector(".nav-toggle");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-2xl");

    if (content.classList.contains("nav-expanded")) {
      content.classList.remove("nav-expanded");
      content.classList.add("nav-hidden");
      icon.classList.add("fa-caret-right");
      navToggleBtn.title = "Show navigation";
      navContent.style.display = "none";
    } else {
      content.classList.remove("nav-hidden");
      content.classList.add("nav-expanded");
      icon.classList.add("fa-caret-left");
      navToggleBtn.title = "Hide navigation";
      navContent.style.display = "grid";
    }

    navToggleBtn.textContent = "";
    navToggleBtn.appendChild(icon);
  }

  static displayCounterValue(counterValue) {
    const value = document.querySelector("#value");
    value.textContent = counterValue;
  }

}
