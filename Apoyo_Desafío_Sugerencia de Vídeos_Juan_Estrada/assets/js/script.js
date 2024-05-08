
// 1. Definición de la clase Multimedia
class Multimedia {
    // 2. Constructor de la clase Multimedia que recibe la URL del video
    constructor(url) {
        this._url = url; // Inicializa la URL del video
    }

    // 3. Método para obtener la URL del video
    getUrl() {
        return this._url;
    }

    // 4. Método para establecer una nueva URL del video
    setUrl(nuevaUrl) {
        this._url = nuevaUrl;
    }

    // 5. Método para establecer el tiempo de inicio del video
    setInicio(tiempo) {
        const url = `${this.getUrl()}&start=${tiempo}`; // Concatena el tiempo al final de la URL
        this.setUrl(url); // Actualiza la URL del video con el tiempo de inicio
    }
}

// 6. Definición de la clase Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
    // 7. Constructor de la clase Reproductor que recibe la URL del video y el ID del reproductor
    constructor(url, id) {
        super(url); // Llama al constructor de la clase Multimedia
        this._id = id; // Inicializa el ID del reproductor
    }

    // 8. Método para reproducir el video
    playMultimedia() {
        const url = this.getUrl(); // Obtiene la URL del video
        const id = this._id; // Obtiene el ID del reproductor
        VideoModule.mostrarVideo(url, id); // Llama a la función mostrarVideo del módulo VideoModule
    }
}

// 9. Definición del módulo VideoModule
const VideoModule = (() => {
    // 10. Función privada para insertar el video en el documento HTML
    const insertarVideo = (url, id) => {
        const iframe = document.getElementById(id); // Obtiene el elemento iframe por su ID
        iframe.setAttribute('src', url); // Establece la URL del video en el atributo src del iframe
    };

    // 11. Función pública que recibe la URL y el ID y llama a la función interna para insertar el video
    const mostrarVideo = (url, id) => {
        insertarVideo(url, id); // Llama a la función insertarVideo para mostrar el video en el iframe
    };

    // 12. Retorna solo las funciones públicas
    return {
        mostrarVideo: mostrarVideo
    };
})();

// 13. Crear instancias para música, película y serie
const reproductorMusica = new Reproductor('https://www.youtube.com/embed/0KFDWqRZJaQ?si=yRzbBZHp3ZlTdlgK', 'reproductorMusica');
const reproductorPelicula = new Reproductor('https://www.youtube.com/embed/adSczblg-4k?si=IliyVKLaZfW6BCiY', 'reproductorPelicula');
const reproductorSerie = new Reproductor('https://www.youtube.com/embed/tHC-VTmLlpU?si=1sYIHMOdw5t5VkqE', 'reproductorSerie');

// 14. Configurar el inicio del video en el segundo 10 para cada reproductor
reproductorMusica.setInicio(10);
reproductorPelicula.setInicio(10);
reproductorSerie.setInicio(10);

// 15. Invocar al método playMultimedia para cada instancia
reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();
