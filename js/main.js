document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector("ul");
  
    // Obsługa kliknięcia przycisku menu
    menuIcon.addEventListener("click", function () {
      navList.classList.toggle("show");
      menuIcon.classList.add("show");
    });
  
    // Zamykanie po kliknięciu na przycisk
    navList.addEventListener("click", function () {
      navList.classList.remove("show");
      menuIcon.classList.remove("show");
    });
  
    // Zamykanie menu przy przewijaniu
    window.addEventListener("scroll", function () {
      navList.classList.remove("show");
      menuIcon.classList.remove("show");
    });
});
  