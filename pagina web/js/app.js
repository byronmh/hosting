let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//Menu de navegacion

btnMenu.addEventListener('click', () => {

if(activador){
    menu.style.left = '0';
    menu.style.transition = '0.5s';

    activador = false;
}else{
    activador = false;
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;
}

});

//intercalar active

let enlaces = document.querySelectorAll('.list li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

// Efectos scroll

let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    containerMenu.style.top = '0px';
    containerMenu.style.transition = '0.5s';
  }else{
    containerMenu.style.top = "-60px";
    containerMenu.style.transition = "0.5s";
  }
  prevScrollPos = currentScrollPos;

  //Mostrar y ocultar scroll estilos

  let arriba = window.pageXOffset;
  if (arriba <= 600){
      containerMenu.style.borderBottom = "none";

      goTop.style.right = "-100%"

  }else{
    containerMenu.style.borderBottom = "3px solid #08d9d6";

    goTop.style.right = "0";
    goTop.style.transition = "0.5s";
  }
}

goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
});