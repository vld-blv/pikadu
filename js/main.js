const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".sidebar");

menuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("visible");
});
