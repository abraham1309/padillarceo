/*Script para el navbar*/
jQuery(function($) {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 200) {
            $('.navbar').addClass('fixed-top');
        } else if ($(this).scrollTop() == 0) {
            $('.navbar').removeClass('fixed-top');
        }
    });

    function adjustNav() {
        var winWidth = $(window).width(),
            dropdown = $('.dropdown'),
            dropdownMenu = $('.dropdown-menu');

        if (winWidth >= 768) {
            dropdown.on('mouseenter', function() {
                $(this).addClass('show')
                    .children(dropdownMenu).addClass('show');
            });

            dropdown.on('mouseleave', function() {
                $(this).removeClass('show')
                    .children(dropdownMenu).removeClass('show');
            });
        } else {
            dropdown.off('mouseenter mouseleave');
        }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
});

/* Script para el contador */
/* Script para el contador */
const contadores = document.querySelectorAll('.p-numero');
const velocidad = 8000;
const retraso = 1000;

const animarContadores = () => {
    for (const contador of contadores) {
        const actualizarContador = () => {
            let cantidadMaxima = +contador.dataset.cantidadTotal,
                valorActual = +contador.innerText,
                incremento = cantidadMaxima / velocidad;

            if (valorActual < cantidadMaxima) {
                contador.innerHTML = Math.ceil(valorActual + incremento);
                setTimeout(actualizarContador, 300); // Ajusté el tiempo de espera para que vaya más lento
            } else {
                contador.innerText = cantidadMaxima;
            }
        };
        actualizarContador();
    }
};

function estaEnLaMitad(elemento) {
    var rect = elemento.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
}

window.addEventListener('scroll', function() {
    var miDiv = document.getElementById('seccionDiplomados');

    if (estaEnLaMitad(miDiv)) {
        setTimeout(animarContadores, retraso);
    }
});