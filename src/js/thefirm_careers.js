(function () {
  var lawyersCarousel = null,
    photosCarousel = null;

  function createLawyersCarousel() {
    if (lawyersCarousel === null) {
      lawyersCarousel = $('#lawyers-carousel').slick({
        prevArrow: '<span class="slick-prev fa fa-angle-left"></span>',
        nextArrow: '<span class="slick-next fa fa-angle-right"></span>'
      });
    }
  }

  function createImagesCarousel() {
    if (photosCarousel === null) {
      photosCarousel = $('#photos-carousel').slick({
        prevArrow: '<span class="slick-prev fa fa-angle-left"></span>',
        nextArrow: '<span class="slick-next fa fa-angle-right"></span>'
      });
    }
  }
  createImagesCarousel();

  $('#careers-top-button').click(function () {
    $('#careers-top').slideUp(300);
    $('#careers-form').slideDown(300);
    $(window).scrollTop(0);
  });

  $('.lawyers__item .site-button').click(function () {
    var index = parseInt($(this).parent().index());
    $('#lawyers-list-div').slideUp(300);
    $('#lawyers-carousel-div').slideDown(300);
    createLawyersCarousel();
    lawyersCarousel.slick('slickGoTo', index);
    $(window).scrollTop(0);
  });

  $('#lawyers-button').click(function () {
    $('#lawyers-carousel-div').slideUp(300);
    $('#lawyers-list-div').slideDown(300);
    $(window).scrollTop(0);
  })
})();