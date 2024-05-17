// Función asíncrona que carga la imagen en respuesta al evento de cambio del input 'animal'
export async function cargarRutaImg() {

  // Obtiene el elemento del DOM correspondiente al input 'animal'
  const inputAnimal = document.getElementById("animal");
  // Obtiene el elemento del DOM correspondiente al contenedor de imagen
  const container = document.getElementById("contenedor_imagen");

  // Función interna asíncrona que obtiene los datos de imagen JSON
  async function getImagenJson() {
    // Realiza una solicitud fetch para obtener los datos de la imagen JSON desde el servidor local
    const response = await fetch("http://127.0.0.1:5500/tabla_ruta.json");
    // Convierte la respuesta en formato JSON
    const datos = await response.json();
    // Retorna los datos obtenidos
    return datos;
  }

  // Agrega un escuchador de eventos para el cambio en el input 'animal'
  inputAnimal.addEventListener("change", async function () {
    // Obtiene los datos de imagen JSON
    const imagenesJson = await getImagenJson();
    // Filtra los datos de imagen JSON para encontrar la imagen correspondiente al valor seleccionado en el input 'animal'
    const imagenJson = imagenesJson.ruta.filter((imagen) => inputAnimal.value === imagen.name);
    // Imprime en la consola la URL de la imagen
    console.log(imagenJson[0].imagen);

   

    // Inicializa una cadena de HTML para mostrar la imagen
    let html = "";
    // Verifica si se encontró alguna imagen
    if (imagenJson.length > 0) {
      // Si se encontró una imagen, agrega un elemento de imagen al HTML con la URL de la imagen correspondiente
      // html += `<img src="assets/imgs/${imagenJson[0].imagen}" alt="" class="contenedor_img">`;
      html += `<img src="assets/imgs/${imagenJson[0].imagen}" alt="" class="contenedor_img" id="imagenAnimal">`;
    } else {
      // Si no se encontró ninguna imagen, agrega un mensaje indicando que la imagen no se encontró
      html += `<p>Imagen no encontrada</p>`;
    }
    // Actualiza el contenido del contenedor de imagen con la cadena de HTML generada
    container.innerHTML = html;
  });
}
