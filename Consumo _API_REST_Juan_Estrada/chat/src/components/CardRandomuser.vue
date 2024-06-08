<script>
export default {
  props: {
    randomuser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      nombre: "",
      mensaje: "",
      // color: "#000000", // Color por defecto

    };
  },
  methods: {
    enviarMensaje() {
  this.$emit("mensaje-enviado", { 
    nombre: this.randomuser.name.first,
    mensaje: this.mensaje,
    color: this.color 
  });
  this.nombre = "";
  this.mensaje = "";
  // this.color = "#000000";
}
  },
};
</script>




<template>
  <section>
    <div class="card">
      <div class="card_img">
        <img :src="randomuser.picture.large" :alt="displayName" />
      </div>

      <div class="card_title">
        <h2>{{ randomuser.name.first }}</h2>
      </div>

      <div class="card_content">
        <input type="color" v-model="color" style="width: 11rem" />       
         <textarea
          v-model="mensaje"
          name=""
          id=""
          style="max-height: 100px; resize: none"
        ></textarea>
        <button @click="enviarMensaje">Enviar</button>

      </div>
    </div>
  </section>
</template>



<style scoped>
.card_content {
  display: flex;
  flex-direction: column;
}
.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column; /* Cambia la dirección del contenedor a vertical */
  align-items: center; /* Centra los elementos horizontalmente */
  padding: 1rem;
  max-width: 18rem;
}
.card_img {
  margin-bottom: 1rem; /* Espacio entre la imagen y el nombre */
}

.card_title {
  text-align: center; /* Centra el texto horizontalmente */
}

.card_content input[type="color"],
.card_content textarea {
  margin-bottom: 0.5rem;
}

.card_content textarea {
  resize: vertical;
}

.card_content button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.card_content button:hover {
  background-color: #0056b3;
}
</style>