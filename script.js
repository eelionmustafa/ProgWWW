document.addEventListener("DOMContentLoaded", () => {
  const menus = document.querySelectorAll(".menu");

  menus.forEach(menu => {
    menu.addEventListener("click", () => {
      menus.forEach(item => item.classList.remove("active"));
      menu.classList.add("active");
    });
  });
});
