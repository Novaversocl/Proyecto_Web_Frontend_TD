document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar el botón y el contenedor de posts
    const button = document.getElementById("ver");
    const container = document.getElementById("post-data");
  
    // Agregar un event listener al botón
    button.addEventListener("click", async () => {
      try {
        // Obtener los posts desde la API JSONPlaceholder
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await respuesta.json();
  
        // Construir el HTML para mostrar los posts
        let html = "<h2>Posts</h2>";
        html += "<ul>";
        posts.forEach((post) => {
          html += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
        });
        html += "</ul>";
  
        // Mostrar los posts en el contenedor
        container.innerHTML = html;
      } catch (error) {
        // Manejar errores en caso de que falle la obtención o el procesamiento de los posts
        console.error("Error al obtener o mostrar los posts:", error);
      }
    });
  });
  