// ChatComponent.vue

<template>
  <div>
    <div v-for="(mensaje, index) in mensajes" :key="index" class="mensaje" :style="{ backgroundColor: mensaje.color }">
      <div class="texto-enviado">{{ mensaje.nombre }}:</div>
      <div class="texto-enviado">{{ mensaje.mensaje }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mensajes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.mensaje {
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
}

.texto-enviado {
  display: inline-block;
  margin-right: 10px;
}
</style>
