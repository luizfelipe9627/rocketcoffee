// Responsável por abrir e fechar o menu e trocar o ícone.
window.onload = function () {
  document.querySelector(".menu-mobile").addEventListener("click", function () {
    if (document.querySelector(".menu nav").style.display == "flex") {
      document.querySelector(".menu nav").style.display = "none";
      document.querySelector(".menu-mobile").src = "https://luizfelipe9627.github.io/rocketcoffee/assets/image/menu-hamburguer-open.svg"
    } else {
      document.querySelector(".menu nav").style.display = "flex";
      document.querySelector(".menu-mobile").src = "https://luizfelipe9627.github.io/rocketcoffee/assets/image/menu-hamburguer-close.svg"
    }
  });
};
