class NavBarHandler {
  constructor(navbarID) {
    this._navbar = document.getElementById(navbarID);

    window.onscroll = () => this.scrollEvent();
    this.scrollEvent();

    window.addEventListener("hashchange", () => this.shiftWindow());

    for (const elem of document.getElementsByTagName("a"))
      elem.onclick = () => this.hasBeenAClick();
  }

  hasBeenAClick() {
    this._needShifting = true;
  }

  scrollEvent() {
    if (window.scrollY > window.innerHeight) {
      this._navbar.classList.add("fixed");
    } else {
      this._navbar.classList.remove("fixed");
    }

    this.shiftWindow();
  }

  shiftWindow() {
    if (this._needShifting) {
      scrollBy(0, -this._navbar.clientHeight - 20);
      this._needShifting = false;
    }
  }
}
