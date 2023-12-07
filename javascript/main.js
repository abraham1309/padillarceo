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
addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.p-numero');
    const velocidad = 450;
    const retrasoInicial = 750; // Retraso

    const animarContador = (contador, cantidadMaxima) => {
        const actualizarContador = () => {
            let valorActual = +contador.innerText,
                incremento = 1;

            if (valorActual < cantidadMaxima) {
                contador.innerHTML = Math.ceil(valorActual + incremento);
                setTimeout(actualizarContador, velocidad);
            } else {
                contador.innerText = cantidadMaxima;
            }
        };

        actualizarContador();
    };

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                const contador = elemento.target;
                const cantidadMaxima = +contador.dataset.cantidadTotal;

                // Agregar retraso inicial antes de iniciar la animación del contador
                setTimeout(() => {
                    animarContador(contador, cantidadMaxima);
                }, retrasoInicial);
            }
        });
    };

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75
    });

    const elementosHTML = document.querySelectorAll('.p-numero');
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML);
    });
});