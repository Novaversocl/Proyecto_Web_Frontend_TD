// Paso 1: Esperar a que la página HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  // Paso 2: Obtener una referencia al elemento con el id 'caja'
  const caja = document.getElementById("caja");

  // Paso 3: Obtener una referencia a cada botón por su id
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  const btn3 = document.getElementById("btn-3");
  const btn4 = document.getElementById("btn-4");
  const btn5 = document.getElementById("btn-5");
  const btn6 = document.getElementById("btn-6");

  // Paso 4: Agregar un evento de clic a cada botón
  btn1.addEventListener("click", function () {
    // Paso 5: Obtener el color de fondo del botón btn1
    const colorBoton1 = btn1.style.backgroundColor;
    // Paso 6: Establecer el color de fondo de la caja como el color del botón btn1
    caja.style.backgroundColor = colorBoton1;
  });

  btn2.addEventListener("click", function () {
    // Obtener el color de fondo del botón
    const colorBoton2 = btn2.style.backgroundColor;
    // Establecer el color de fondo de la caja como el color del botón
    caja.style.backgroundColor = colorBoton2;
  });

  btn3.addEventListener("click", function () {
    // Obtener el color de fondo del botón

    const colorBoton3 = btn3.style.backgroundColor;

    // Establecer el color de fondo de la caja como el color del botón

    caja.style.backgroundColor = colorBoton3;
  });

  btn4.addEventListener("click", function () {
    // Obtener el color de fondo del botón

    const colorBoton4 = btn4.style.backgroundColor;
    // Establecer el color de fondo de la caja como el color del botón

    caja.style.backgroundColor = colorBoton4;
  });

  btn5.addEventListener("click", function () {
    // Obtener el color de fondo del botón

    const colorBoton5 = btn5.style.backgroundColor;
    // Establecer el color de fondo de la caja como el color del botón

    caja.style.backgroundColor = colorBoton5;
  });

  btn6.addEventListener("click", function () {
    // Obtener el color de fondo del botón

    const colorBoton6 = btn6.style.backgroundColor;
    // Establecer el color de fondo de la caja como el color del botón

    caja.style.backgroundColor = colorBoton6;
  });

 
});
