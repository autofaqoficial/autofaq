
function toggleSubmenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('submenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function (e) {
  const menu = document.getElementById('submenu');
  if (menu) menu.style.display = 'none';

  const faqContainer = document.getElementById('faq-container');
  const iframe = document.getElementById('faq-frame');
  const faqButton = document.querySelector('.highlight.faq');

  // Só permitir clique-fora se estivermos na acessofaq.html
  if (faqContainer.style.display === 'block' &&
      iframe.src.includes("acessofaq.html") &&
      !faqButton.contains(e.target) &&
      !faqContainer.contains(e.target)) {
    iframe.src = "";
    faqContainer.style.display = "none";
  }
});

function mostrarFAQ() {
  const container = document.getElementById('faq-container');
  const iframe = document.getElementById('faq-frame');
  iframe.src = "acessofaq.html";
  container.style.display = 'block';
}

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
