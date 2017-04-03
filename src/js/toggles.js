(function () {
  var carouselCreated = false;

  function createCarousel() {
    if (!carouselCreated) {
      $('#lawyers-carousel').slick({
        prevArrow: '<span class="slick-prev fa fa-angle-left"></span>',
        nextArrow: '<span class="slick-next fa fa-angle-right"></span>'
      }).rezise();
    }
  }

  $('#careers-top-button').click(function () {
    $('#careers-top').slideUp(300);
    $('#careers-form').slideDown(300);
  });

  $('.lawyers__item').click(function () {
    $('#lawyers-list-div').slideUp(300);
    $('#lawyers-carousel-div').slideDown(300);
    createCarousel();
  });

  $('#lawyers-button').click(function () {
    $('#lawyers-carousel-div').slideUp(300);
    $('#lawyers-list-div').slideDown(300);
  })
})();