window.addEventListener('DOMContentLoaded', IniciarApp);

function IniciarApp(){
    SliderWorks();
    HeaderScroll();
    NavegacionSlide();
}

function SliderWorks(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 480px
            575: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 3,
              spaceBetween: 30
            }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function HeaderScroll(){
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function(){
    if(this.scrollY >= 25){
      header.classList.add('header-scroll');
    }
    else{
      header.classList.remove('header-scroll');
    }
  });
}

function NavegacionSlide(){
  const burger = document.querySelector('.burger');
  const navegacion = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.navegacion li a');
  
  // Abrir Slide
  burger.addEventListener('click', function(){
    burger.classList.toggle('burger-toggle')
    navegacion.classList.toggle('nav__slide');
  });

  // Cerrar Slide cuadno se hace click en enlace
  navLinks.forEach(navLink => navLink.addEventListener('click', function(){
    burger.classList.toggle('burger-toggle')
    navegacion.classList.toggle('nav__slide');
  }));
}