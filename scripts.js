
function toggleSubmenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('submenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function () {
  const menu = document.getElementById('submenu');
  if (menu) menu.style.display = 'none';
});

function mostrarFAQ() {
  const container = document.getElementById('faq-container');
  if (container.style.display === 'block') {
    container.style.display = 'none';
  } else {
    container.style.display = 'block';
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}

window.addEventListener('message', function(event) {
  if (event.data === 'fecharFAQ') {
    const container = document.getElementById('faq-container');
    if (container) container.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
