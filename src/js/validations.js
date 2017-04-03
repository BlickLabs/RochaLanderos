(function () {
  $('#contact-form, #careers-form').validate({
    rules: {
      phone: {
        number: true
      }
    }
  });
})();