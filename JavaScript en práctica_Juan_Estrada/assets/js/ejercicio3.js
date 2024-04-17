// Esperar a que la página HTML se cargue completamente
document.addEventListener('DOMContentLoaded', function() {

    // Obtener referencia a los elementos necesarios del DOM
    const valor1Input = document.getElementById('valor1');
    const valor2Input = document.getElementById('valor2');
    const resultado = document.getElementById('resultado');
    const btnSumar = document.getElementById('btn-sumar');
    const btnRestar = document.getElementById('btn-restar');

    // Función para realizar la suma
    function sumar() {
        // Obtener los valores ingresados y convertirlos a números
        const valor1 = parseInt(valor1Input.value);
        const valor2 = parseInt(valor2Input.value);
        // Calcular la suma
        const suma = valor1 + valor2;
        // Mostrar el resultado en el elemento de resultado
        resultado.innerHTML = suma;
    }

    // Función para realizar la resta
    function restar() {
        // Obtener los valores ingresados y convertirlos a números
        const valor1 = parseInt(valor1Input.value);
        const valor2 = parseInt(valor2Input.value);
        // Calcular la resta, asegurándose de que el resultado no sea negativo
        let resta = valor1 - valor2;
        if (resta < 0) {
            console.log("El resultado es negativo");
            resta = 0;
        }
        // Mostrar el resultado en el elemento de resultado
        resultado.innerHTML = resta;
    }

    // Agregar evento de clic al botón de suma
    btnSumar.addEventListener('click', sumar);

    // Agregar evento de clic al botón de resta
    btnRestar.addEventListener('click', restar);
});
