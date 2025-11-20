if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

// toggle menu sidebar
const sidebar = document.querySelector("aside div.container");
const btnOpen = document.getElementById("btn-toggler");
const btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click", () => {
    sidebar.classList.add("open");
});

btnClose.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
