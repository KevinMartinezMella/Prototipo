$(document).ready(function(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    fecha = new Date();
    // alertar();
    diaHoy = fecha.getDate();
    mesHoy = fecha.getMonth();
    $('#continuarReserva').prop("disabled", true);
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
        $('#diaReserva').text(`Dia: ${$(this).text()} de ${meses[mesHoy]}`);
    })
    $('.radio-2').each(function(i) {
        if(parseInt($(this).text()) < diaHoy){
            $(this).prop("disabled", true);
        }
    });
    $('#horario').change(function(){
        if($('#horario').val() != 0){
            $('#continuarReserva').prop("disabled", false);
            $('#horarioReserva').text(`Horario: ${$('#horario').val()}`);
        } else {
            $('#continuarReserva').prop("disabled", true); 
        }
    });
    $('#continuarReserva').click(function(){
        $('.contenido-2').fadeOut();
        $('.calendario').fadeOut();
        $('.contenido').fadeOut();
        setTimeout(function(){ $('.resumenFinal').fadeIn("slow"); }, 1000);
    })

    $('#registrarNino').click(function(){
        var nombreNino = $('#nombreNino').val();
        var edadNino = $('#edadNino').val();
        var generoNino = $('#generoNino').val();
        var fechaNino = $('#fechaNino').val();
        if(generoNino == 'Niño'){
            $('.ninoAgregado').html(`
            <center>
                <img class="imgNino" src="archivos/img/nino.jpg" alt="">
            </center>
            <br>
            <p class="azul"><b>Nombre: ${nombreNino}</b></p>
            <p class="azul"><b>Edad: ${edadNino} años</b></p>
            <p class="azul"><b>Género: ${generoNino}</b></p>
            <p class="azul"><b>Nacimiento: ${fechaNino}</b></p>
            <a href="menu.html" class="btn btn-primary btn-block">Aceptar</a>`);
        } else {
            $('.ninoAgregado').html(`
            <center>
                <img class="imgNino" src="archivos/img/nina.jpg" alt="">
            </center>
            <br>
            <p class="azul"><b>Nombre: ${nombreNino}</b></p>
            <p class="azul"><b>Edad: ${edadNino} años</b></p>
            <p class="azul"><b>Género: ${generoNino}</b></p>
            <p class="azul"><b>Nacimiento: ${fechaNino}</b></p>
            <a href="menu.html" class="btn btn-primary btn-block">Aceptar</a>`);
        }
        $('.formFicha').fadeOut()
        setTimeout(function(){ $('.ninoAgregado').fadeIn(); }, 500);

    });

    $('.agregarB').click(function(){
        $('.agregarB').fadeOut();
        setTimeout(function(){ $('.formFicha').fadeIn(); }, 500);
    })
});

$(function(){
    var reservar = 'reservar.html';
    var horas = 'horas.html';
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
    $('.ficha').click(function(){
        cargador();
        setTimeout(function(){ redireccionar(ficha) }, 1000);
    });
})