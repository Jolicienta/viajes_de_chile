$(document).ready(function() {
    $(window).scroll(function() {
        // Efecto de agregar color de fondo al navbar cuando se hace scroll
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("nav").addClass("navbar_dark");
        } else {
            $("nav").removeClass("navbar_dark");
        }
    });

    // Efecto de cambio de color a la barra al hacer hover en la 1ra columna
    $(".plane").hover(function() {
        $(".barra_1").css("background-color", "#9EAFA7");
    }, function() {
        $(".barra_1").css("background-color", "#DB3A1E");
    });
    // Efecto de cambio de color a la barra al hacer hover en la 2da columna
    $(".mountain").hover(function() {
        $(".barra_2").css("background-color", "#9EAFA7");
    }, function() {
        $(".barra_2").css("background-color", "#DB3A1E");
    });
    // Efecto de cambio de color a la barra al hacer hover en la 3ra columna
    $(".route").hover(function() {
        $(".barra_3").css("background-color", "#9EAFA7");
    }, function() {
        $(".barra_3").css("background-color", "#DB3A1E");
    });

});

// JS del tooltip que da el ejemplo en el input "nombre" del formulario de la sección CONTACTO.
//También se usó para describir las columnas de QUIÉNES SOMOS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});
