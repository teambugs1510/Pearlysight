var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


$('.owl-1').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  center: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})



VanillaTilt.init(document.querySelectorAll(".card_glass"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
})