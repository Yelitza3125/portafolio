
$(document).ready(function() {

  var altura = $('.back-gray').offset().top;
	
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > altura) {
      $('.nav-scroll').removeClass('hide');
      $('.nav-scroll').addClass('frame');
      $('.menu-fixed-scroll').addClass('menu')
      $('.menu-fixed-scroll').addClass('menu-fixed')  
    } else {
      $('.nav-scroll').addClass('hide');
    }
  });
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

  /* Redirección del footer */
  $('.github').click(function() {
    window.open('https://github.com/Yelitza3125');
  });

  $('.linkedin').click(function() {
    window.open('https://www.linkedin.com/in/yelitza-cisneros/');
  });
  
  $('.work').click(function() {
    window.location.href = '../views/work.html'; 
  });

  $('.about').click(function() {
    window.location.href = '../index.html'; 
  });
  
  $('.contact').click(function() {
    window.location.href = '../views/contact.html'; 
  });
});