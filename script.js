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


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const alertBox = document.querySelector('.form-alert');
  const alertText = alertBox.querySelector('p');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default page reload

    // Show success alert
    alertBox.classList.add('show');

    // Hide alert after 3 seconds
    setTimeout(() => {
      alertBox.classList.remove('show');
    }, 3000);

    // Reset the form
    form.reset();
  });
});

