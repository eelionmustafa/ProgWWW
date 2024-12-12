document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");
  
    setTimeout(() => {
      elements.forEach(element => {
        element.classList.add("show");
      });
    }, 500); // Delay for animation to look natural
  });
  