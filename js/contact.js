$(document).ready(function() {
  /* Código del carrusel 
  setInterval(function() {
    $('.one, .six').addClass('animated fadeIn');  
  }, 5000);

  setInterval(function() {
    $('.three, .five').addClass('animated fadeIn');  
  }, 18000);

  setInterval(function() {
    $('.four, .eight').addClass('animated fadeIn');  
  }, 12000);

  setInterval(function() {
    $('.two, .seven').addClass('animated fadeIn');  
  }, 20000); */

  /* ¨Redirección a redes sociales*/
  
  $('.github').click(function() {
    window.open('https://github.com/Yelitza3125');
  });

  $('.linkedin').click(function() {
    window.open('https://www.linkedin.com/in/yelitza-cisneros/');
  });

  /* Redireccionando a la siguiente vista*/
  $('.work').click(function() {
    window.location.href = '../views/work.html'; 
  });

  $('.about').click(function() {
    window.location.href = '../index.html'; 
  });
  
  $('.contact-link').click(function() {
    window.location.href = '../views/contact.html'; 
  });
});