// Menu ativo
function handleMenu() {
  const links = document.querySelectorAll(".header-menu a");

  function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
      link.classList.add("ativo");
    }
  }

  links.forEach(ativarLink);
}
handleMenu();

// Ativar itens orçamento
function handleOrcamento() {
  const parametros = new URLSearchParams(location.search);

  function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    elemento.checked = true;
  }

  parametros.forEach(ativarProduto);
}

handleOrcamento();

// Perguntas frequentes accordion list
function initAccordion() {
  const perguntas = document.querySelectorAll(".perguntas button");

  function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");
    const ativo = resposta.classList.contains("ativo");
    pergunta.setAttribute("aria-expanded", ativo);
  }

  function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
  }

  perguntas.forEach(eventosPerguntas);
}

initAccordion();

// Galeria de Bicicletas
function handleGaleria() {
  const galeria = document.querySelectorAll(".bicicleta-imagens img");
  const galeriaContainer = document.querySelector(".bicicleta-imagens");

  function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  }

  function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
  }

  galeria.forEach(eventosGaleria);
}
handleGaleria();

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

// mudar o tema do site
// 1. Seleciona o botão
const botaoTema = document.querySelector(".btn-theme");

const navegacao = performance.getEntriesByType("navigation")[0];
if (navegacao && navegacao.type === "reload") {
  sessionStorage.removeItem("temaAtivo");
}

// 2. Função que verifica o sessionStorage ao mudar de página
function verificarTema() {
  const temaSalvo = sessionStorage.getItem("temaAtivo");

  if (temaSalvo === "sim") {
    document.body.classList.add("ativo");
  }
}

// Executa a checagem assim que a página carrega
verificarTema();

// 3. Evento de clique no botão
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("ativo");

  if (document.body.classList.contains("ativo")) {
    // Salva na sessão atual
    sessionStorage.setItem("temaAtivo", "sim");
  } else {
    // Remove se o usuário desativar manualmente
    sessionStorage.removeItem("temaAtivo");
  }
});
