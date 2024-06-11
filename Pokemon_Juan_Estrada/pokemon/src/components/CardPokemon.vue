<script>
export default {
    
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            nombreIngresado: "",
            mostrarDescubrir: false,
            coincidencia: false,
            mostrarDescubierto: false,
            // contadorDescubiertos: 0, // Contador de Pokémon descubiertos
        };
    },
    
    methods: {
        descubrirPokemon() {
            this.mostrarDescubrir = true;
            this.coincidencia = this.nombreIngresado === this.pokemon.name;
            if (this.coincidencia) {
                this.mostrarDescubierto = true; // Mostrar el nombre descubierto
                this.$emit('incrementar-contador'); // Emitir evento para incrementar contador en App.vue
                this.playAudio(); // Llamar al método para reproducir el audio
                setTimeout(() => {
          this.speak(this.pokemon.name); // Llamar a la función speak después de 5 segundos
        }, 5000); // 5000 milisegundos = 5 segundos
            
            
            }
            if (!this.coincidencia) {
                this.nombreIngresado = ""; // Limpiar el campo si el nombre no coincide
            }
        },

        speak(text) {
      const message = `Es el pokemon ${text}`;
      const utterance = new SpeechSynthesisUtterance(message);
      speechSynthesis.speak(utterance);
    },

        playAudio() {
            
    //         this.$refs.audioPlayer2.play();
    //   setTimeout(() => {
    //     this.$refs.audioPlayer2.pause();
    //   }, 15000);


            this.$refs.audioPlayer.play();
        },

        
    },
};
</script>

<template>
            
    
    <section>
        <div class="card">
            <div class="card__img" :class="{ 'sin-filtro': coincidencia }">
                <img :src="pokemon.image" alt="Imagen del Pokémon" />
            </div>

<!-- <h1>{{ pokemon.name }}</h1> -->


            <div class="card__title">
                <h2 v-if="mostrarDescubierto || coincidencia">{{ pokemon.name }}</h2>
            </div>

            <div class="card__content">
                <input type="text" v-model="nombreIngresado" v-if="!mostrarDescubierto">
                <div class="salto"></div>
                <button @click="descubrirPokemon" v-if="!mostrarDescubierto">Descubrir</button>

                <div>

                    <audio ref="audioPlayer2" src="intro.mp3"></audio> <!-- Audio de introducción -->
                     <audio ref="audioPlayer" src="audio.mp3"></audio>
  </div>


            </div>

            <!-- Mensaje para cuando se presiona el botón "Descubrir" -->
            <div v-if="mostrarDescubrir">
                <p v-if="coincidencia"></p>
            </div>

            <!-- Mostrar contador de Pokémon descubiertos -->


        </div>
    </section>
</template>



<style scoped>
/* Estilos */
.card__img {
    margin-bottom: 1rem; /* Espacio entre la imagen y el nombre */
    width: 200px; /* Ancho fijo */
    height: 200px; /* Alto fijo */
    display: flex;
    justify-content: center;
    align-items: center;
  
    
}

.card__img img {
   /* Flotar el contenido a la izquierda */
    width: 100%;
    height: auto;
    border-radius: 0.25rem;
    filter: blur(5px) grayscale(0%); /* Aplicar filtro por defecto */
   
    
}

.sin-filtro img {
    filter: none; /* Eliminar el filtro cuando la clase sin-filtro esté presente */
}

.salto{
    padding-bottom:1rem;
}

.card__content {
    display: flex;
    flex-direction: column;

}

.card {
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 20px 0px 20px 0px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column; /* Cambia la dirección del contenedor a vertical */
    align-items: center; /* Centra los elementos horizontalmente */
    padding: 1rem;
    max-width: 18rem;
    background-image: url('/public/fondo.jpg');
    background-size: 100% 100%; /* Ajustar la imagen al tamaño del contenedor */
    background-position: center;
}



.card__title {
    text-align: center; /* Centra el texto horizontalmente */
    font-size: 1.5rem; /* Tamaño de la fuente */
    font-family: Arial, sans-serif; /* Fuente del texto */
    font-weight: bold; /* Grosor de la fuente */
    color: transparent; /* Hacer transparente el color del texto */
    -webkit-text-stroke:0.5px black; /* Grosor y color del borde del texto */
    background: linear-gradient(90deg, #ff0000, #dc5907, #e5d017); /* Degradado de colores */
    -webkit-background-clip: text; /* Aplicar el gradiente al texto */

}

.card__content input[type="color"],
.card__content textarea {
    margin-bottom: 0.5rem;
}

.card__content textarea {
    resize: vertical;
}

.card__content button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

.card__content button:hover {
    background-color: #0056b3;
}
</style>