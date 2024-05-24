<template>
  <div class="espacioabajo">
    <form>
      <div>
        <label>Título de la tarjeta: </label>
        <input type="text" v-model="Titulo" placeholder="Nombre de la tarjeta">
      </div>

      <div>
        <label>Chip SRC: </label>
        <input type="text" v-model="Chip" placeholder="Chip">
      </div>

      <div>
        <label>Número: </label>
        <input type="text" v-model="Numero" placeholder="Número tarjeta">
      </div>

      <div>
        <label>Fecha de expiración: </label>
        <input type="text" v-model="Fecha" placeholder="Fecha">
      </div>

      <div>
        <label>Propietario: </label>
        <input type="text" v-model="Propietario" placeholder="Nombre de la persona">
      </div>

      <div>
        <label>Tipo de tarjeta SRC: </label>
        <input type="text" v-model="Tipo" placeholder="Ruta Tipo">
      </div>
    </form>

    <div class="espacio">
      <div class="carnet">
        <h3>{{ Titulo }}</h3>
        <img width="40" :src="Chip" alt="Chip Image" />
        <!-- <img width="20" alt="Vue logo" src="./assets/chip.png"> -->
        <div>
          <h2>{{ Numero }}</h2>
          <span>Fecha Exp: <b>{{ Fecha }}</b></span>
        </div>
        <footer>
          <span>{{ Propietario }}</span>
          <img :src="Tipo" width="60" alt="Tipo Image" />
          <!-- <img width="20" alt="Vue logo" src="./assets/visa.png"> -->

          Tipo
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      Titulo: 'Visa Classic Crédito', // Valor por defecto
      Chip: 'chip.png',
      
      Numero: "400 500 600 707",
      Fecha: "01/50",
      Propietario: "Juan Luis Estrada",
      Tipo: 'visa.png'
    };
  }
};
</script>

<style>
* {
  margin: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 10px;
  font-family: sans-serif;
}

#app {
  display: flex;
  gap: 40px;
}
form {
  padding: 18px;
  border-radius: 20px;
  border: ridge 1px;
  box-shadow: 1px 1px 1px 1px gray;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
}
form div {
  display: grid;
  grid-template-columns: 100px 200px;
  align-items: center;
  gap: 5px;
}

form div label {
  text-align: right;
}

.espacioabajo {
  padding-top: 10rem;
}
.espacio {
  padding-top: 3rem;
}
.carnet {
  width: 400px;
  height: 230px;
  background: #1c1a1e;
  color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px 2px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  font-size: 20px;
}

h2 {
  font-size: 30px;
  letter-spacing: 10px;
  margin-bottom: 15px;
  text-shadow: 0px 0px 1px gold;
  font-family: Times;
}

b {
  font-size: 16px;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  font-style: italic;
}
</style>
