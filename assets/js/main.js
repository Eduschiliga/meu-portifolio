/* Mostrar Menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Validar se a constante existe */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Fechar Menu */
/* Validar se a constante existe */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remover Menu Mobile */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Quando clicar em cada nav__link, remover a classe show-menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Adicionar BLUR no HEADER */
const blurHeader = () => {
  const header = document.getElementById("header");
  // Quando a rolagem é maior que 100 na altura da janela de visualização, adicione a classe blur-header à tag de cabeçalho
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);
