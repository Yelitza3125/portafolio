
$(document).ready(function() {
  var altura = $('.figure-container').offset().top;
	
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > altura) {
      $('.figure-container').addClass('hide');
      $('.menu').addClass('menu-fixed');
      $('.nav-home').removeClass('frame');
      $('.nav-home').addClass('frame-fixed');
      
    } else {
      $('.figure-container').removeClass('hide');
      $('.menu').removeClass('menu-fixed');
      $('.nav-home').removeClass('frame-fixed');
      $('.nav-home').addClass('frame');
    }
  });

  $('.col-one').addClass('animated slideInLeft');
  $('.deya').addClass('animated slideInLeft');
  $('.col-two').addClass('animated slideInRight'),
  $('.nira').addClass('animated slideInRight');
  $('.display-flex li').addClass('animated slideInUp');


  setInterval(function() { 
    $('.col-one').addClass('animated slideOutLeft'); 
    $('.col-two').addClass('animated slideOutRight');
  }, 2000);

  setInterval(function() { 
    $('.block-gray').removeClass('hide');
    $('.block-gray').addClass('animated fadeInDown');
  }, 4000);

  setInterval(function() {
    $('main').addClass('invisible');
    $('body').removeClass('scroll');
  }, 2700);


  setInterval(function changeFormDarkBlue() {
    var sizeChange = ['20%', '10%', '25%', '30%'];
    var heightChange = ['10vh', '20vh', '25vh', '18vh'];
   
    $('.blue-soft').animate(
      {width: sizeChange[Math.floor(Math.random() * 4)],
        height: heightChange[Math.floor(Math.random() * 4)]});
    $('.blue-soft').toggleClass('pink-one');  
  }, 3000);
  
  setInterval(function changeFormSoftBlue() {
    var sizeChangeTwo = ['25%', '15%', '28%', '18%'];
    var heightChange = ['10vh', '18vh', '15vh', '22vh'];
     
    $('.dark-blue').animate(
      {width: sizeChangeTwo[Math.floor(Math.random() * 4)],
        height: heightChange[Math.floor(Math.random() * 4)]});
    $('.dark-blue').toggleClass('pink-soft');     
  }, 5000);
  
  setInterval(function changeFormPinkDark() {
    var sizeChangeThree = ['21%', '19%', '23%', '30%'];
    var heightChange = ['12vh', '22vh', '18vh', '15vh'];
    $('.pink-one').animate(
      {width: sizeChangeThree[Math.floor(Math.random() * 4)],
        height: heightChange[Math.floor(Math.random() * 4)]}); 
    $('.pink-one').toggleClass('dark-blue');  
  }, 9000);    
  
  setInterval(function changeFormPinkSoft() {
    var sizeChangeFour = ['22%', '24%', '15%', '31%'];
    var heightChange = ['17vh', '20vh', '25vh', '10vh'];
    $('.soft-pink').animate(
      {width: sizeChangeFour[Math.floor(Math.random() * 4)],
        height: heightChange[Math.floor(Math.random() * 4)]});  
    $('.soft-pink').toggleClass('blue-soft');   
  }, 12000);
  

  /* Funcionalidad del navbar */

  $('.menu-icon').bind('click', function() {
    $('.menu-icon').removeClass('paused').addClass('active');
    $('.menu-icon').addClass('hide');
    $('.menu').removeClass('paused').addClass('active');
  });

  $('.menu').bind('click', function() {
    $('.menu-icon').removeClass('active');
    $('.menu').removeClass('active');
  });


  /* Redireccionando a la siguiente vista*/
  $('.work').click(function() {
    window.location.href = 'views/work.html'; 
  });

  $('.about').click(function() {
    window.location.href = 'index.html'; 
  });

  $('.contact').click(function() {
    window.location.href = 'views/contact.html'; 
  });
});