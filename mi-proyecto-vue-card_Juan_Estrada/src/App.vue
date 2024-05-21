<template>
  <div id="app">
    <div class="card">
      <div class="card-header">

        <!-- <h2>Carnet de Cazador</h2> -->
        <br>
        <br>
        <div class="card-section image-section">
          <img src="https://i.postimg.cc/ZK6rFhCk/Screenshot-1.jpg" alt="Imagen del Carnet" class="card-image">
        </div>

        <div class="card-section barcode-section">
          <p class="barcode">{{ formattedNumeroDocumento }}</p>
        </div>
      </div>
      <div class="card-body">

        <div class="card-section">
          <div><img src="https://i.postimg.cc/y8B0LrZD/Screenshot-2.jpg" alt=""></div>

          <p><strong>RUN:</strong> {{ run }}</p>
        </div>
        <div class="card-section">
          <p><strong>Apellidos:</strong> {{ apellidos }}</p>
          <p><strong>Nombres:</strong> {{ nombres }}</p>
        </div>
        <div class="card-section">
          <p><strong>Nacionalidad:</strong> {{ nacionalidad }}</p>
          <p><strong>Sexo:</strong> {{ sexo }}</p>
          <p><strong>Fecha de nacimiento:</strong> {{ fechaNacimiento }}</p>
        </div>
        <div class="card-section">
          <p><strong>Número de documento:</strong> {{ numeroDocumento }}</p>
          <p><strong>Fecha de emisión:</strong> {{ fechaEmision }}</p>
          <p><strong>Fecha de vencimiento:</strong> {{ fechaVencimiento }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      run: '12345678-9',
      apellidos: 'Estrada',
      nombres: 'Juan',
      nacionalidad: 'Chilena',
      sexo: 'Masculino',
      fechaNacimiento: '01/01/1990',
      numeroDocumento: 'A1234567',
      fechaEmision: '01/01/2020',
      fechaVencimiento: '01/01/2030'
    }
  },
  computed: {
    formattedNumeroDocumento() {
      return `*${this.numeroDocumento}*`;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+128&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card {
  max-width: 400px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #f0f0f0;
}

.card-header {
  background-color: #0c0c0c;
  color: white;
  padding: 10px;
  text-align: center;
}

.card-header h2 {
  margin: 0;
  font-size: 1.8em;
}

.card-body {
  padding: 20px;
}

.card-section {
  margin-bottom: 10px;
}

.card-section p {
  margin: 5px 0;
}

.card-section p strong {
  display: inline-block;
  width: 150px;
  text-align: left;
}

.card-body {
  background-color: #68BBE7;
}

.card-section {
  border-bottom: 1px solid #ddd;
  /* padding-bottom: 10px; */
}

.card-section:last-child {
  border-bottom: none;
}

.barcode-section {
  color: #ddd;
  text-align: center;
  margin-top: 20px;
  background-color: #000000;


}

.barcode {
  font-family: 'Libre Barcode 128', cursive;
  font-size: 10rem;


}

</style>
