
// Preencher automaticamente o campo tipo de serviço e abrir formulário
function abrirFormularioParceiroPorTipo(tipo) {
  document.getElementById('tipo').value = tipo;
  document.getElementById('container-parceiro').style.display = 'block';
}


function closeAll() {
  const ids = [
    'faq-container',
    'noticias-container',
    'servicos-container',
    'submenu-servicos',
    'container-suspensao',
    'container-troca-oleo',
    'container-troca-oleo-cambio',
    'container-mecanica',
    'container-lanternagem',
    'container-ar'
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

function fecharTodosContainersPrincipais() {
  const ids = [
    "faq-container",
    "noticias-container",
    "servicos-container",
    "container-suspensao",
    "container-troca-oleo",
    "container-troca-oleo-cambio",
    "container-mecanica",
    "container-lanternagem",
    "container-ar"
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

function ocultarContainersPrincipais() {
  const ids = ['servicos-container', 'noticias-container', 'faq-container'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}


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
  fecharTodosContainersPrincipais();
  const container = document.getElementById("faq-container");
  const iframe = document.getElementById("faq-frame");
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

document.querySelector(".highlight.noticias").addEventListener("click", function(e) {
  e.stopPropagation();
  closeAll();

// SERVICES button opens only the submenu
document.querySelector('.highlight.servicos').addEventListener('click', function(e) {
  e.stopPropagation();
  closeAll();
  document.getElementById('submenu-servicos').style.display = 'block';
});

  const container = document.getElementById("noticias-container");
  if (container) container.style.display = "block";
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

document.querySelector(".highlight.servicos").addEventListener("click", function(e) {
  e.stopPropagation();
  closeAll();
  document.getElementById("submenu-servicos").style.display = "block";
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

document.querySelector(".highlight.servicos").addEventListener("click", function(e) {
  e.stopPropagation();
  closeAll();
  document.getElementById("submenu-servicos").style.display = "block";
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
  fecharTodosContainersPrincipais();
  const submenu = document.getElementById("submenu-servicos");
  if (submenu) submenu.style.display = "none";
  const alvo = document.getElementById("container-" + categoria);
  if (alvo) alvo.style.display = "block";
}
function fecharContainer(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// Touch feedback for submenu and mobile menu items
document.querySelectorAll('.submenu-servicos .submenu-item, .mobile-menu .menu-item').forEach(item => {
  item.addEventListener('touchstart', function() {
    this.classList.add('touch-active');
  });
  item.addEventListener('touchmove', function() {
    this.classList.add('touch-active');
  });
  item.addEventListener('touchend', function() {
    this.classList.remove('touch-active');
  });
  item.addEventListener('touchcancel', function() {
    this.classList.remove('touch-active');
  });
});

document.querySelectorAll(".menu-item").forEach(item => {
  if (item.textContent.includes("Seja um Parceiro")) {
    item.addEventListener("click", function () {
      solicitarSenhaFirebaseParceiro(() => {
        document.getElementById("container-parceiro").style.display = "block";
      });
    });
  }

  if (item.textContent.includes("Área Adm")) {
    item.addEventListener("click", function () {
      solicitarSenhaFirebase(() => {
        document.getElementById("container-admin").style.display = "block";
      });
    });
  }
});) {
    item.addEventListener("click", function () {
      solicitarSenhaFirebase(() => {
        document.getElementById("container-admin").style.display = "block";
      });
    });
  }
});

function salvarSenhasAdm() {
  const novaSenhaAdm = document.getElementById("senhaAdm").value;
  if (novaSenhaAdm) {
    db.ref("senhas/adm").set(novaSenhaAdm).then(() => {
      alert("✅ Senha da Área Adm atualizada!");
      document.getElementById("senhaAdm").disabled = true;
    });
  }
}

function salvarSenhaParceiro() {
  const novaSenhaParceiro = document.getElementById("senhaParceiro").value;
  if (novaSenhaParceiro) {
    db.ref("senhas/parceiro").set(novaSenhaParceiro).then(() => {
      alert("✅ Senha de parceiro atualizada!");
      document.getElementById("senhaParceiro").disabled = true;
    });
  }
}
  const novaSenhaAdm = document.getElementById("senhaAdm").value;
  const novaSenhaParceiro = document.getElementById("senhaParceiro").value;
  if (novaSenhaAdm) db.ref("senhas/adm").set(novaSenhaAdm);
  if (novaSenhaParceiro) db.ref("senhas/parceiro").set(novaSenhaParceiro);
  alert("✅ Senhas atualizadas com sucesso!");
}

function salvarNoticias() {
  const noticias = document.getElementById("noticias").value;
  db.ref("conteudo/noticias").set(noticias);
  alert("📰 Notícias salvas.");
}

function salvarServicos() {
  const servicos = document.getElementById("servicos").value;
  db.ref("conteudo/servicos").set(servicos);
  alert("🛠️ Serviços salvos.");
}

function sairAdm() {
  document.getElementById("container-admin").style.display = "none";
}

function habilitarCampo(id) {
  const campo = document.getElementById(id);
  campo.disabled = false;
  campo.focus();
}



// Controle de exibição do menu hamburguer no desktop
let exibirHamburguerDesktop = false;

window.addEventListener("load", () => {
  const hamburguer = document.querySelector(".hamburger");
  if (!hamburguer) return;
  if (window.innerWidth <= 768 || exibirHamburguerDesktop) {
    hamburguer.style.display = "block";
  } else {
    hamburguer.style.display = "none";
  }
});

  }
});


function solicitarSenhaFirebaseParceiro(callback) {
  const entrada = prompt("Digite a senha de parceiro:");
  if (!entrada) return;
  db.ref("senhas/parceiro").once("value").then(snapshot => {
    const senhaCorreta = snapshot.val();
    if (entrada === senhaCorreta) {
      callback();
    } else {
      alert("❌ Senha incorreta.");
    }
  }).catch(err => {
    alert("Erro ao verificar senha: " + err.message);
  });
}
