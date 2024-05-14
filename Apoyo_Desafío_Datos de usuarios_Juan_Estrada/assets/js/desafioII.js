// Obtener el elemento con el id "user-data" del DOM
const container = document.getElementById("user-data");

// Definir una función asíncrona para obtener y mostrar datos
async function obtenerYMostrar() {
  try {
    // Realizar una solicitud a la API JSONPlaceholder para obtener los datos
    const respuesta = await fetch("https://randomuser.me/api/?results=20");

    // Convertir la respuesta en formato JSON
    const datos = await respuesta.json();

    // Mostrar información del primer usuario en la consola
    console.log(datos.results[0].picture.medium);
    console.log(datos.results[0].name.first);
    console.log(datos.results[0].email);
    console.log(datos.results[0].phone);

    // Construir la estructura HTML para mostrar los usuarios
    let html = "<h2>Usuarios</h2>";
    html += "<ul>";
    // Iterar sobre cada usuario y agregar su información al HTML
    datos.results.forEach((dato) => {
      html += `<p><br>  <img src="${dato.picture.medium}" alt=""> <br> <strong>${dato.name.first}</strong><br>${dato.email}<br>${dato.phone}</p>`;
    });
    html += "</ul>";

    // Mostrar la información en el contenedor del DOM
    container.innerHTML = html;
  } catch (error) {
    // Manejar errores en caso de que falle la obtención o el procesamiento de los datos
    console.error("Error al obtener o mostrar los datos:", error);
  }
}

// Función autoinvocada para ejecutar obtenerYMostrar
(function iffe() {
  obtenerYMostrar();
})();
