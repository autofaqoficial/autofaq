
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


function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");
  if (menu && hamburger && !menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.style.display = "none";
  }
});

document.querySelector(".highlight.noticias").addEventListener("click", function () {
  const container = document.getElementById("noticias-container");
  if (container) {
    container.style.display = (container.style.display === "none") ? "block" : "none";
  }
});

document.addEventListener("click", function (event) {
  const noticiasContainer = document.getElementById("noticias-container");
  const noticiasBotao = document.querySelector(".highlight.noticias");
  if (
    noticiasContainer &&
    noticiasBotao &&
    noticiasContainer.style.display === "block" &&
    !noticiasContainer.contains(event.target) &&
    !noticiasBotao.contains(event.target)
  ) {
    noticiasContainer.style.display = "none";
  }
});

document.querySelector(".highlight.servicos").addEventListener("click", function () {
  const container = document.getElementById("servicos-container");
  if (container) {
    container.style.display = (container.style.display === "none") ? "block" : "none";
  }
});

document.addEventListener("click", function (event) {
  const servicosContainer = document.getElementById("servicos-container");
  const servicosBotao = document.querySelector(".highlight.servicos");
  if (
    servicosContainer &&
    servicosBotao &&
    servicosContainer.style.display === "block" &&
    !servicosContainer.contains(event.target) &&
    !servicosBotao.contains(event.target)
  ) {
    servicosContainer.style.display = "none";
  }
});

document.querySelector(".highlight.servicos").addEventListener("click", function (e) {
  e.stopPropagation();
  const submenu = document.getElementById("submenu-servicos");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
});

document.addEventListener("click", function (e) {
  const submenu = document.getElementById("submenu-servicos");
  const botaoServicos = document.querySelector(".highlight.servicos");
  if (submenu && botaoServicos &&
      !submenu.contains(e.target) &&
      !botaoServicos.contains(e.target)) {
    submenu.style.display = "none";
  }
});

function abrirServicosCategoria(categoria) {
  if (categoria === 'suspensao') {
    const container = document.getElementById("servicos-container");
    if (container) {
      container.style.display = "block";
    }
  }
}

function abrirServicosCategoria(categoria) {
  const ids = [
    "container-suspensao",
    "container-troca-oleo",
    "container-troca-oleo-cambio",
    "container-mecanica",
    "container-lanternagem",
    "container-ar"
  ];

  // Ocultar todos
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  // Mostrar o escolhido
  const alvo = document.getElementById("container-" + categoria);
  if (alvo) alvo.style.display = "block";
}

let fecharSubmenuTimer;

const submenuServicos = document.getElementById("submenu-servicos");

if (submenuServicos) {
  submenuServicos.addEventListener("mouseleave", () => {
    fecharSubmenuTimer = setTimeout(() => {
      submenuServicos.style.display = "none";
    }, 3000);
  });

  submenuServicos.addEventListener("mouseenter", () => {
    clearTimeout(fecharSubmenuTimer);
  });
}