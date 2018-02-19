
$(document).ready(function() {
  /* Funcionalidad del navbar */

  /*
  $('.menu-icon').bind('click', function() {
    $('.menu-icon').removeClass('paused').addClass('active');
    $('.menu-icon').addClass('hide');
    $('.menu').removeClass('paused').addClass('active');
  });

  $('.menu').bind('click', function() {
    $('.menu-icon').removeClass('active');
    $('.menu').removeClass('active');
  });

  setInterval(function () {
    $('.text-animated').addClass('animated hinge');
  },5000); */

  
  /* Redireccionando a la siguiente vista*/
  $('.work').click(function() {
    window.location.href = 'views/work.html'; 
  });
});