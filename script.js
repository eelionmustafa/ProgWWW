document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu");
  const containers = document.querySelectorAll(".container1");

  function hideAllContainers() {
    containers.forEach(container => {
      container.style.display = "none";
    });
  }

  menuItems.forEach(menu => {
    menu.addEventListener("click", () => {
      hideAllContainers();
      menuItems.forEach(item => {
        const nameElement = item.querySelector(".name");
        if (nameElement) {
          nameElement.style.display = "none";
        }
      });
      const nameElement = menu.querySelector(".name");
      if (nameElement) {
        nameElement.style.display = "inline-block";
      }
      const targetId = menu.dataset.name.toLowerCase().replace(/ /g, "_");
      const targetContainer = document.getElementById(targetId);
      if (targetContainer) {
        targetContainer.style.display = "block";
      }
    });
  });

  hideAllContainers();
  if (containers.length > 0) {
    containers[0].style.display = "block";
  }
});


