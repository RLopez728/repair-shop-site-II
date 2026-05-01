/*---------------------------------------------------------------*/
/*============================Sidebar============================*/
/*---------------------------------------------------------------*/

const sidebarBtn = document.getElementById("sidebar-button");
const sidebar = document.querySelector(".sidebar");

console.log("script loaded");

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});