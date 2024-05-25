<template>
  <div class="card">
    <div class="input-group">
      <label for="titulo">Título:</label>
      <input type="text" id="titulo" name="titulo" v-model="titulo" />
    </div>
    <div class="input-group">
      <label for="emoji">Emoji:</label>

      <select id="emoji" name="emoji" v-model="emoji">
        <option value="👨‍🎓">👨‍🎓</option>
        <option value="😎">😎</option>
        <option value="💻">💻</option>
      </select>
    </div>

    <div class="saltolinea"></div>

    <div class="">
      <label>Apreciación:</label><br />

      <label for="apreciacion1">Regular</label><input type="radio" id="apreciacion1" value="Regular"
        v-model="apreciacion" />
      <label for="apreciacion2">Bien</label>
      <input type="radio" id="apreciacion2" value="Bien" v-model="apreciacion" />
      <label for="apreciacion3">Muy Bien</label>
      <input type="radio" id="apreciacion3" value="Muy Bien" v-model="apreciacion" />
      <label for="apreciacion4">Increible</label>
      <input type="radio" id="apreciacion4" value="Increible" v-model="apreciacion" />
    </div>
    <div class="saltolinea"></div>

    <div class="">
      <label>Competencias:</label><br />
      <input type="checkbox" id="competencia1" value="Morfología de un componente" v-model="competencias" /><label
        for="competencia1">Morfología de un componente</label><br />
      <input type="checkbox" id="competencia2" value="Directivas" v-model="competencias" /><label
        for="competencia2">Directivas</label><br />
      <input type="checkbox" id="competencia3" value="One-way y two-way" v-model="competencias" /><label
        for="competencia3">One-way y two-way</label><br />
      <input type="checkbox" id="competencia4" name="competencia4" value="Estado" v-model="competencias" /><label
        for="competencia4">Estado</label><br />
      <input type="checkbox" id="competencia5" value="Patrón de diseño  MVVM" v-model="competencias" /><label
        for="competencia5">Patrón de diseño MVVM</label><br />
    </div>

    <div class="saltolinea"></div>

    <div class="input-group">
      <label for="opinion">Opinión:</label>

      <textarea id="opinion" name="opinion" v-model="opinion" style="resize: none"></textarea>
    </div>
  </div>

  <div class="result">
    <div class="emoji">{{ emoji }}</div>
    <h1>{{ titulo }}</h1>
    <h3>y me parece {{ apreciacion }}</h3>
    <p>He Aprendido</p>
    {{ competencias }}
    <p>Mi Opinión hasta ahora del framework es:</p>
    <h3>{{ opinion }}</h3>

    <p>Ahora podré desarrollar aplicaciones más cómodamente!!!!</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      titulo: "Estoy Aprendiendo Vue",
      emoji: "",
      apreciacion: "",
      competencias: [],
      opinion: "",
    };
  },
};
</script>

<style>
.card {
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  background: linear-gradient(to right,
      rgb(19, 62, 136),
      rgb(65, 127, 219),
      rgb(0, 1, 17));
  color: beige;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input,
.input-group select,
.input-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.result {
  justify-content: center;
  text-align: center;
}

.saltolinea {
  padding-bottom: 2rem;
}

.emoji {
  font-size: 5rem;
}
</style>
