$(document).ready(function(){

  // SET HEADER IMG TO WINDOW SIZE
  var wH = $(window).height();

  $(".header").css("height", $(window).height());


  //TRANSPARENT NAV BAR AT SCROLL 0
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css({
      'transition': '0.30s',
      'background':'#0c0c0c'
    });
    } else {
    $('.navbar').css('background','transparent');
    }
  });


  //SCROLL SLOW TO ANCHOR TARGET
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });

  });

  //CAROUSEL HEIGHT FIX MATCH HIGHEST SIBLING
  $('.carousel').ready(function(){
  var Hs = $('#highestsibbling').height();
    $('#carouselheight').css('height', Hs);
  });

  //collapse navbar after link click

  $(".navbar-nav a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

});
