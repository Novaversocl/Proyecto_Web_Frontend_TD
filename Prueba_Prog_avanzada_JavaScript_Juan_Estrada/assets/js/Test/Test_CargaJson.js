// Función asíncrona que carga la imagen en respuesta al evento de cambio del input 'animal'
export async function cargarTodasImg() {
  // Obtiene el elemento del DOM correspondiente al input 'animal'
  const inputAnimal = document.getElementById("animal");
  // Obtiene el elemento del DOM correspondiente al contenedor de imagen
  const container = document.getElementById("Animales");

  // Función interna asíncrona que obtiene los datos de imagen JSON
  async function getImagenJson() {
    // Realiza una solicitud fetch para obtener los datos de la imagen JSON desde el servidor local
    const response = await fetch("http://127.0.0.1:5500/tabla_animales.json");
    // Convierte la respuesta en formato JSON
    const datos = await response.json();

    // Retorna los datos obtenidos
    return datos;
  }

  // Obtiene los datos de imagen JSON
  const imagenesJson = await getImagenJson();
  let html = "";

  //   console.log("todas las imagenes",imagenesJson.animales[0].imagen)
  // Construimos la etiqueta de la imagen y la agregamos a la variable HTML
  imagenesJson.animales.forEach((imagen, index) => {
    console.log("imagen", index + 1, ":", imagen.imagen);

    html += `<img src="assets/imgs/${imagen.imagen}" alt="" class="contenedor_img_todos">`;
  });
  // Una vez que hemos construido todas las etiquetas de imagen, las agregamos al contenedor
  container.innerHTML = html;
}
