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
            <a href="reservar.html" class="btn btn-primary btn-block">Aceptar</a>`);
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
            <a href="reservar.html" class="btn btn-primary btn-block">Aceptar</a>`);
        }
        $('.formFicha').fadeOut()
        setTimeout(function(){ $('.ninoAgregado').fadeIn(); }, 500);

    });

    $('#btnConfirmar').click(function(){
        $('#btnConfirmar').fadeOut();
        $('#btnAnular').fadeOut();
        $('#tdEstado').text('');
        setTimeout(function(){ $('#btnConfirmado').fadeIn("slow"),$('#tdEstado').text('Confirmado')}, 500);
    });
    $('#btnAnular').click(function(){
        $('#btnConfirmar').fadeOut();
        $('#btnAnular').fadeOut();
        $('#tdEstado').text('');
        $('#btnConfirmado').prop("disabled", true);
        setTimeout(function(){ $('#btnConfirmado').fadeIn("slow"),$('#tdEstado').text('Anulada'), $('#trOpcion').addClass("bg-danger-light")}, 500);
    })

    $('.agregarB').click(function(){
        $('.agregarB').fadeOut();
        setTimeout(function(){ $('.formFicha').fadeIn(); }, 500);
    })
    $('#cara-sad').click(function(){
        $('#cara-sad').addClass('btn-danger');
        $('#cara-sad').addClass('text-light');
        $('#cara-normal').removeClass('amarillo');
        $('#cara-feliz').removeClass('btn-success');
        $('#cara-feliz').removeClass('text-light');
    });
    $('#cara-normal').click(function(){
        $('#cara-normal').addClass('amarillo');
        $('#cara-feliz').removeClass('btn-success');
        $('#cara-feliz').removeClass('text-light');
        $('#cara-sad').removeClass('btn-danger');
        $('#cara-sad').removeClass('text-light');
    });
    $('#cara-feliz').click(function(){
        $('#cara-feliz').addClass('btn-success');
        $('#cara-feliz').addClass('text-light');
        $('#cara-normal').removeClass('amarillo');
        $('#cara-sad').removeClass('btn-danger');
        $('#cara-sad').removeClass('text-light');
    });
    $('#enviarMejora').click(function(){
        $('#enviarMejora').prop("disabled", true);
        $('.desaparece').fadeOut();
        setTimeout(function(){$('.aparece').fadeIn()},500);
        setTimeout(function(){$('#modalMejora').modal("hide")}, 2500)
    })
    $('.whatsapp').click(function(){
        $('.mensajes').slideToggle();
    })
    $('#enviarChat').click(function(){
        $('.chat-mensaje-mio').text($('#chatinput').val());
        $('#chatinput').val("");
        $('.chat-respuesta').fadeIn("slow");
        setTimeout(function(){$('#escondidoduoc').fadeIn()},1500);
    })
    $('.whatsapp').fadeIn("slow");
    $('.aparecedor').fadeIn("slow");
});

$(function(){
    var reservar = 'reservar.html';
    var horas = 'mishoras.html';
    var camaras = 'camaras.html';
    var profesionales = 'cuidadores.html';
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
    $('.mishoras').click(function(){
        cargador();
        setTimeout(function(){ redireccionar(horas) }, 1000);
    });
    $('.camaras').click(function(){
        cargador();
        setTimeout(function(){ redireccionar(camaras) }, 1000);
    });
    $('.profesionales').click(function(){
        cargador();
        setTimeout(function(){ redireccionar(profesionales) }, 1000);
    });
})