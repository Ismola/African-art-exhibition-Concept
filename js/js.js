// Es poquito, pero lo que hace lo hace muy bien (:
$(window).resize(function () {
    var ventana_ancho = $(window).width();
    if (ventana_ancho < 990) {
        $(".bola3").css({"display":"none"});
    }else{
        $(".bola3").css({"display":"block"});
    }

});
$(document).ready(function ($) {
    $(".targetas").mouseenter(function () {
        var ventana_ancho = $(window).width();
        if (ventana_ancho > 990) {
            $(".bola3").hide();
        } else {
            $(".bola3").css({ "display": "none" });
        }
    });
    $(".targetas").mouseleave(function () {
        var ventana_ancho = $(window).width();
        // alert(ventana_ancho);
        if (ventana_ancho > 990) {
            // alert("asd");
            $(".bola3").show();
        } else {
            $(".bola3").css({ "display": "none" });
        }
    });
});  