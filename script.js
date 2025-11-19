const sidebar = document.querySelector("aside div.container");
const btnOpen = document.getElementById("btn-toggler");
const btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click", () => {
    sidebar.classList.add("open");
});

btnClose.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
