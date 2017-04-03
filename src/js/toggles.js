(function () {
  var carousel = null;

  function createCarousel() {
    if (carousel === null) {
      carousel = $('#lawyers-carousel').slick({
        prevArrow: '<span class="slick-prev fa fa-angle-left"></span>',
        nextArrow: '<span class="slick-next fa fa-angle-right"></span>'
      });
    }
  }

  $('#careers-top-button').click(function () {
    $('#careers-top').slideUp(300);
    $('#careers-form').slideDown(300);
  });

  $('.lawyers__item').click(function () {
    var index = parseInt($(this).index());
    $('#lawyers-list-div').slideUp(300);
    $('#lawyers-carousel-div').slideDown(300);
    createCarousel();
    carousel.slick('slickGoTo', index);
  });

  $('#lawyers-button').click(function () {
    $('#lawyers-carousel-div').slideUp(300);
    $('#lawyers-list-div').slideDown(300);
  })
})();