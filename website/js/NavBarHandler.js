class NavBarHandler {
    constructor(navbarID) {
        this._navbar = document.getElementById(navbarID);

        window.onscroll = () => this.scrollEvent();
        this.scrollEvent();
    }

    scrollEvent() {
        if (window.scrollY > window.innerHeight) {
            this._navbar.classList.add("fixed");
        } else {
            this._navbar.classList.remove("fixed");
        }
    }

    scrollDown() {
        window.scrollTo({
            top: window.innerHeight + 3,
            left: 0,
            behavior: "smooth"
        });
    }
}