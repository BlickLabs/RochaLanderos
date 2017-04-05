!function(){$.extend($.validator.messages,{required:"Este campo es obligatorio",remote:"Please fix this field",email:"Ingresa una dirección de correo válida",url:"Ingresa una URL válida",date:"Ingresa una fecha válida",dateISO:"Ingresa una fecha válida (ISO)",number:"Ingresa un número válido",digits:"Solo se permiten números dígitos",creditcard:"Ingresa un número de tarjeta válido",equalTo:"Los valores deben coincidir",accept:"Please enter a value with a valid extension",maxlength:$.validator.format("No ingreses más de {0} caracteres"),minlength:$.validator.format("Ingresa al menos {0} caracteres"),rangelength:$.validator.format("El texto debe tener entre {0} y {1} caracteres"),range:$.validator.format("Ingresa un valor entre {0} y {1}"),max:$.validator.format("Ingresa un valor menor o igual que {0}"),min:$.validator.format("Ingresa un valor mayor o igual que {0}")}),$.validator.setDefaults({invalidHandler:function(e,a){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var a=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),s=$(e).find(".form-message"),r=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),o=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),t=function(e){var a=e?r:o;n.removeAttr("disabled"),s.removeClass(e?"error":"success"),s.addClass(e?"success":"error"),s.html(a)};n.attr("disabled","disabled"),s.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:a}).done(function(a){t(1===parseInt(a)),e.reset()}).fail(function(){t(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),function(){function e(e){$(e.target).is("nav .menu-trigger")||$(e.target).is("nav .menu-container")||$(e.target).closest("nav .menu-container").length||!$("nav .menu-container").hasClass("show-menu")||(e.preventDefault(),$("nav .menu-container").removeClass("show-menu"),$("body").removeClass("noscroll"))}function a(){$("nav .menu-container").hasClass("show-menu")?($("nav .menu-container").removeClass("show-menu"),$("body").removeClass("noscroll")):($("nav .menu-container").addClass("show-menu"),$("body").addClass("noscroll"))}var n=window.matchMedia("(max-width: 767px)");n.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$("nav .menu-trigger").click(a)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll"),$("nav .menu-container").removeClass("show-menu"),n.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$("nav .menu-trigger").click(a))}),$("nav").hasClass("sections-nav")||$(window).scroll(function(){$(this).scrollTop()>20?$("nav").addClass("fixed"):$("nav").removeClass("fixed")})}(),function(){function e(){null===a&&(a=$("#lawyers-carousel").slick({prevArrow:'<span class="slick-prev fa fa-angle-left"></span>',nextArrow:'<span class="slick-next fa fa-angle-right"></span>'}))}var a=null,n=null;!function(){null===n&&(n=$("#photos-carousel").slick({prevArrow:'<span class="slick-prev fa fa-angle-left"></span>',nextArrow:'<span class="slick-next fa fa-angle-right"></span>'}))}(),$("#careers-top-button").click(function(){$("#careers-top").slideUp(300),$("#careers-form").slideDown(300),$(window).scrollTop(0)}),$(".lawyers__item .site-button").click(function(){var n=parseInt($(this).parent().index());$("#lawyers-list-div").slideUp(300),$("#lawyers-carousel-div").slideDown(300),e(),a.slick("slickGoTo",n),$(window).scrollTop(0)}),$("#lawyers-button").click(function(){$("#lawyers-carousel-div").slideUp(300),$("#lawyers-list-div").slideDown(300),$(window).scrollTop(0)})}(),function(){$("#contact-form, #careers-form").validate({rules:{phone:{number:!0}}})}();