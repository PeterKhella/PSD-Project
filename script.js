const MENU_HEIGHT = 50;

const home = document.getElementById("logo");
const history = document.getElementById("history");
const team = document.getElementById("team");
const stickyLogo = document.getElementById("stickylogo");
const stickyHistory = document.getElementById("stickyhistory");
const stickyTeam = document.getElementById("stickyteam");
const mbtn1 = document.getElementById('mbtn1');
const mbtn2 = document.getElementById('mbtn2');
const tab = document.getElementById('tab');
const table1 = document.getElementById('table-schedule-one');
const table2 = document.getElementById('table-schedule-two');

mbtn1.addEventListener('click', function onClick(event) {
    mbtn1.setAttribute("style", "background:#b0b4be;color:#414f6b;text-decoration:underline;");
    mbtn2.removeAttribute("style");
    table1.setAttribute("style", "display:table");
    table2.setAttribute("style", "display:none");
    tab.style.backgroundImage = "url(./images/tab-one-photo.png)";

});

mbtn2.addEventListener('click', function onClick(event) {
    mbtn2.setAttribute("style", "background:#b0b4be;color:#414f6b;text-decoration:underline;");
    mbtn1.removeAttribute("style");
    table1.setAttribute("style", "display:none");
    table2.setAttribute("style", "display:table");
    tab.style.backgroundImage = "url(./images/tab-two-photo.png)";
});


// SCROLL MENU // 

function scrollToElement(id) {
    // get element by id 
    const el = document.getElementById(id);
    // make sure element exisits
    if (el) {
        // create offset
        const offset = el.offsetTop - MENU_HEIGHT;
        // scroll to setion
        window.scroll({
            top: offset,
            behavior: "smooth"
        });
    }

}

// event listeners for menu buttons
home.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("hero");
    console.log(this.id);
});
history.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("section-one");
    console.log(this.id);
});
team.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("section-two");
});
stickyLogo.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("hero");
    console.log(this.id);
});
stickyHistory.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("section-one");
    console.log(this.id);
});
stickyTeam.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("section-two");
});