function OverMouse(elemento, rota){
    elemento.src = rota;
}

document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarMenu = document.querySelector(".navbar-collapse");
  
    navbarMenu.addEventListener("click", function() {
      navbarToggler.click(); 
    });
  });
