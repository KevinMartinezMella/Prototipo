$(document).ready(function(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    fecha = new Date();
    diaHoy = fecha.getDate();
    mesHoy = fecha.getMonth();
    $('.nombreMes').html(meses[mesHoy]);
    $('.circulo').fadeIn("slow");
    $('.formulario').fadeIn("slow");
    $('.titulo').fadeIn("slow");
    $('.calendario').fadeIn("slow");
    $('.radio-2').click(function(){
        $('.contenido-2').fadeIn("slow");
        $('.radio-2').removeClass('btn-danger');
        $(this).addClass('btn-danger');
        $('.resumen').html(`Día ${$(this).text()} de ${meses[mesHoy]}`);
    })
    $('.radio-2').each(function(i) {
        if(parseInt($(this).text()) < diaHoy){
            $(this).prop("disabled", true);
        }
    });
});

$(function(){
    var reservar = 'reservar.html';
    var grabaciones = 'grabaciones.html';
    var camaras = 'camaras.html';
    var profesionales = 'profesionales.html';
    var ficha = 'ficha.html';
    var menu = 'menu.html';
    $('#ingresar').click(function(){
        cargador();
        setTimeout(function(){ redireccionar(menu) }, 1500);
    });
    $('.reservar').click(function(){
        cargador();
        setTimeout(function(){ redireccionar(reservar) }, 1000);
    });
})