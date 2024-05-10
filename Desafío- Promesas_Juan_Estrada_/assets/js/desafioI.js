// Función asíncrona para obtener los primeros 20 títulos de los datos recibidos
async function obtenerYMostrarPosts() {
  try {
    // Realizar una solicitud a la API JSONPlaceholder para obtener los datos
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );

    // Convertir la respuesta en formato JSON
    const posts = await respuesta.json();

    // Mostrar los primeros 20 títulos de los datos recibidos
    mostrarPrimeros20Titulos(posts);

    // Retornar un mensaje después de tres segundos
    const mensaje = await retornarMensajeDespuesDeTresSegundos();

    // Mostrar el mensaje en la consola del navegador
    console.log(mensaje);
  } catch (error) {
    // Manejar errores en caso de que falle la obtención o el procesamiento de los datos
    console.error("Error al obtener o mostrar los posts:", error);
  }
}

// Función para mostrar los primeros 20 títulos de los datos recibidos
function mostrarPrimeros20Titulos(posts) {
  // Obtener los primeros 20 posts
  const primeros20Posts = posts.slice(0, 20);
  // Mostrar los primeros 20 posts en la consola
  console.log(primeros20Posts);
}

// Función para retornar una promesa después de tres segundos
function retornarMensajeDespuesDeTresSegundos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolver la promesa con el mensaje después de tres segundos
      resolve("Información Enviada");
    }, 3000);
  });
}

// Llamar a la función principal para obtener y mostrar los posts
obtenerYMostrarPosts();
