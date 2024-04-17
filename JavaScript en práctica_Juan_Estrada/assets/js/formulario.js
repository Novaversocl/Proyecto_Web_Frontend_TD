const form = document.querySelector('#form');

//  declarar las variables que se utilizarán por id solo los errores

const errorNombre = document.getElementById("errorNombre");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");

// mensaje final de enviado
const resultado = document.getElementById("resultado");


// expresiones para la validación

const PATRON_NOMBRE = /[A-Za-zÑñÁáÉéÍíÓóÚúÜü]/gm;
const PATRON_ASUNTO = /[A-Za-zÑñÁáÉéÍíÓóÚúÜü]/gm;
const PATRON_MENSAJE = /[A-Za-zÑñÁáÉéÍíÓóÚúÜü]/gm;




function validarFormulario(patron, cadena, errorHTML) {
    if (!patron.test(cadena)) {
        errorHTML.innerHTML = `Por favor, ingresa un valor válido para este campo`;
        return false;
    } else {
        errorHTML.innerHTML = '';
        return true;
    }
}





form.addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById("textNombre").value;
    let asunto = document.getElementById("textAsunto").value;
    let mensaje = document.getElementById("textMensaje").value;

    const nombreValido = validarFormulario(PATRON_NOMBRE, nombre, errorNombre);
    const asuntoValido = validarFormulario(PATRON_ASUNTO, asunto, errorAsunto);
    const mensajeValido = validarFormulario(PATRON_MENSAJE, mensaje, errorMensaje);

    if (nombreValido && asuntoValido && mensajeValido) {
        resultado.textContent = 'Mensaje enviado con éxito !!!';
        resultado.style.color = 'green';
        form.reset();
    } else {
        // resultado.textContent = 'Error al enviar el mensaje';
        // resultado.style.color = 'red';
    }
});
