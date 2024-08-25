class MobileNavBar {
    constructor(mobileMenu, pages, pagesLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.pages = document.querySelector(pages);
        this.pagesLinks = document.querySelectorAll(pagesLinks);
        this.activeClass = "active";

        this.identificadorClick = this.identificadorClick.bind(this);
    }

    animacaoLinks() {
        this.pagesLinks.forEach( (link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    identificadorClick(){
        this.pages.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animacaoLinks();
    }

    addClickEvento() {
        this.mobileMenu.addEventListener("click", this.identificadorClick);
    }

    iniciar(){
        if (this.mobileMenu) {
            this.addClickEvento();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".pages",
    ".pages li",
);

mobileNavBar.iniciar();

    