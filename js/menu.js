// Responsável por abrir e fechar o menu.

window.onload = function() {
    document.querySelector(".menu-mobile"). addEventListener("click", function () {
        if(document.querySelector(".menu nav").style.display == 'flex') {
            document.querySelector(".menu nav").style.display = 'none';
        }   
        
        else {
            document.querySelector(".menu nav").style.display = 'flex';
        }
    });
};

// Responsável por mudar o ícone do menu clicável.

function clicou() {
    if(document.querySelector('.menu nav').style.display == 'flex') {
        document.querySelector('.menu-mobile').src="https://luizfelipe9627.github.io/rocketcoffee/assets/icons/menu-buguer-open.svg";
    } else if (document.querySelector('.menu nav').style.display = 'none') {
        document.querySelector('.menu-mobile').src="https://luizfelipe9627.github.io/rocketcoffee/assets/icons/menu-buguer-close.svg"
    }
    
}
