<script>
import CardRandomuser from "./components/CardRandomuser.vue";
import ChatComponent from "./components/ChatComponent.vue";
import { getRandomuserPerPage } from "./helpers/fetchRandomuser.js";


export default {
  name: "App",
  components: {
    CardRandomuser,
    ChatComponent,
  },
  data() {
    return {
      randomuserList: [],
      mensajesChat: [],
    };
  },
  methods: {
    async setRandomuserList() {
      const randomuserListData = await getRandomuserPerPage();
      this.randomuserList = randomuserListData;
    },
    enviarMensajeChat(mensaje) {
      this.mensajesChat.push(mensaje);
    },
  },
  mounted() {
    this.setRandomuserList();
  },
};
</script>

<template>
  <h1>Randomuser API</h1>

  <div v-if="!randomuserList">No hay Usuarios en Linea</div>
  <div v-else class="container">
    <div
      class="card"
      v-for="randomuser in randomuserList"
      :key="randomuser.email"
    >
      <CardRandomuser
        :randomuser="randomuser"
        @mensaje-enviado="enviarMensajeChat"
      />
    </div>
    <div class="red-div">
      <ChatComponent :mensajes="mensajesChat" />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-around; /* Espacio entre las tarjetas */
  position: relative; /* Hace que el contenedor sea relativo */
}

.red-div {
  color: aliceblue;
  background-color: rgb(22, 206, 114); /* Color de fondo rojo */
  width: 200px; /* Ancho del div */
  height: 350px; /* Altura del div */
  position: absolute; /* Hace que el div sea absoluto */
  top: 50%; /* Lo posiciona verticalmente en el centro */
  left: 50%; /* Lo posiciona horizontalmente en el centro */
  transform: translate(-50%, -50%); /* Centra el div exactamente */
  z-index: 1; /* Para que esté encima de las tarjetas */
}
</style>
