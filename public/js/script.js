/*---------------------------------------------------------------*/
/*============================Sidebar============================*/
/*---------------------------------------------------------------*/

const sidebarBtn = document.getElementById("sidebar-button");
const sidebar = document.querySelector(".sidebar");

console.log("script loaded");

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

/*---------------------------------------------------------------*/
/*=============================Scroll============================*/
/*---------------------------------------------------------------*/

document.getElementById("next").addEventListener("click", () => {
    const el = document.getElementById("scroll-target");
    const headerHeight = 50;

    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;

    const centeredPosition =
        absoluteTop - (window.innerHeight / 2) + (rect.height / 2) - (headerHeight / 2);

    window.scrollTo({
        top: centeredPosition,
        behavior: "smooth"
    });
});