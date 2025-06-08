
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
  const iframe = document.getElementById('faq-frame');
  iframe.src = "acessofaq.html";
  container.style.display = 'block';
}

// Ouvinte para lidar com mensagens do iframe (faq.html ou acessofaq.html)
window.addEventListener("message", function(event) {
  const iframe = document.getElementById("faq-frame");
  const container = document.getElementById("faq-container");

  if (event.data === "abrirFAQCompleta") {
    iframe.src = "faq.html";
  } else if (event.data === "fecharFAQ") {
    iframe.src = "";
    container.style.display = "none";
  }
});
