
$( document ).ready(function() {
  $('.col-one').addClass('animated slideInLeft');
  $('.deya').addClass('animated slideInLeft');
  $('.col-two').addClass('animated slideInRight'),
  $('.nira').addClass('animated slideInRight');
  $('.display-flex li').addClass('animated slideInUp');


  setInterval(function(){ 
    $('.col-one').addClass('animated slideOutLeft'); 
    $('.col-two').addClass('animated slideOutRight');
    
  }, 2000);

  setInterval(function() {
    $('main').addClass('invisible');
    $('body').removeClass('.scroll');
  }, 2700);



  setInterval(function changeFormDarkBlue() {
    var sizeChange = ['20%', '10%','25%', '30%'];
    var heightChange = ['10vh', '20vh','30vh', '40vh'];
   
    $('.blue-soft').animate(
      {width: sizeChange[Math.floor(Math.random()*4)],
      height: heightChange[Math.floor(Math.random()*4)]})
    $('.blue-soft').toggleClass('pink-one');  
    }, 2000);
  
    setInterval(function changeFormSoftBlue() {
      var sizeChangeTwo = ['25%', '15%','28%', '18%'];
      var heightChange = ['10vh', '20vh','30vh', '40vh'];
     
        $('.dark-blue').animate(
          {width: sizeChangeTwo[Math.floor(Math.random()*4)],
            height: heightChange[Math.floor(Math.random()*4)]})
        $('.dark-blue').toggleClass('pink-soft');     
      }, 3000);
  
  setInterval(function changeFormPinkDark() {
    var sizeChangeThree = ['21%', '19%','23%', '30%'];
    var heightChange = ['10vh', '20vh','30vh', '40vh'];
    $('.pink-one').animate(
      {width: sizeChangeThree[Math.floor(Math.random()*4)],
        height: heightChange[Math.floor(Math.random()*4)]}) 
  $('.pink-one').toggleClass('dark-blue');  
  }, 2000);    
  
  setInterval(function changeFormPinkSoft() {
    var sizeChangeFour = ['22%', '24%','15%', '31%'];
    var heightChange = ['10vh', '20vh','30vh', '40vh'];
  $('.soft-pink').animate(
    {width: sizeChangeFour[Math.floor(Math.random()*4)],
      height: heightChange[Math.floor(Math.random()*4)]})  
  $('.soft-pink').toggleClass('blue-soft');   
  }, 3000);

/*
setInterval(function() {
  $('.figure-container').toggleClass('style-figure');
},10000); */
});




/*
$('#animar-2').on('click', function() {
    $('#animable')
      .animate({left: '50%'}, 'slow')
      .animate({left: '40%'}, 'slow')
      .animate({width: 200}, 'fast')
      .animate({'font-size': '3rem'}, 1000);
  })
}*/