//  Global Variables 
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

/* 
    Dynamical Navbar And When Clicking A Link Scroll To Section
*/
function createNavbar() {
    for (let section of sections) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navbarList.appendChild(listItem);
    };
};
createNavbar();

/* 
    When Scroll To Sections, Scrolling It Smooth 
*/
let linksList = document.querySelectorAll("a");
linksList.forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.target.attributes.href.value;
        let sec = document.querySelector(id);
        sec.scrollIntoView({
            behavior: "smooth",
        });
    });
});

/* 
    Sections As Active 
*/
let activeSection = new IntersectionObserver((entries) => {
    entries.map((active) => {
        if (active.isIntersecting === true) {
            active.target.classList.add("your-active-class");
        } else {
            active.target.classList.remove("your-active-class");
        };
    });
},{threshold: 0.5});
// Declare Observe To Loop On Sections
sections.forEach((el) => activeSection.observe(el));

/* 
    Button To Scroll Top 
*/
let btn = document.querySelector(".btn");
onscroll = () => {
    this.scrollY >= 1646? btn.classList.add("show") : btn.classList.remove("show");
};

//  When click On Button Page Scroll To Top And Smooth 
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// When Scrolling Apear Navbar 
let navbarMenu = document.querySelector("nav");
let isScrolling;
window.addEventListener("scroll", () => {
    window.clearTimeout(isScrolling);
    navbarMenu.classList.remove("none");
    isScrolling = setTimeout(() => {
        navbarMenu.classList.add("none");
    }, 3000);
});