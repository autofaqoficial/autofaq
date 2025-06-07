function toggleSubmenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('submenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function () {
  const menu = document.getElementById('submenu');
  if (menu) menu.style.display = 'none';
});
