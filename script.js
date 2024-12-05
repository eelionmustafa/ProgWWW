const menuItems = document.querySelectorAll('.menu');

menuItems.forEach(menu => {
  menu.addEventListener('click', () => {
    menuItems.forEach(item => {
      item.querySelector('.name').style.display = 'none';
    });
    const nameElement = menu.querySelector('.name');
    if (nameElement.style.display === 'none' || nameElement.style.display === '') {
      nameElement.style.display = 'inline-block';
    } else {
      nameElement.style.display = 'none';
    }
  });
});
