<script>
import CardPokemon from "./components/CardPokemon.vue";
import { getPokemonPerPage } from "./helpers/fetchPokemon.js";

export default {
  name: 'App',
  components: {
    CardPokemon,
  },
  data() {
    return {
      pokemonList: [],
      contadorDescubiertos: 0, // Contador de Pokémon descubiertos
    };
  },
  methods: {
    async setPokemonList() {
      const pokemonListData = await getPokemonPerPage();
      this.pokemonList = pokemonListData;
    },
    incrementarContador() {
      this.contadorDescubiertos++;
    }
  },
  mounted() {
    this.setPokemonList();
  },

};
</script>


<template>
  <h1 class="titulo">Pokemon API</h1>
  <div>
                <p class="titulo">Pokémons descubiertos: {{ contadorDescubiertos }}</p>
            </div>

  <div v-if="pokemonList.length === 0">No hay Pokemon en la lista</div>
  <div v-else class="container">
    <div
      class="card"
      v-for="pokemon in pokemonList"
      :key="pokemon.name">
      <CardPokemon :pokemon="pokemon" @incrementar-contador="incrementarContador"/>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
@media (min-width: 992px) {
  /* Pantallas lg (≥ 992px) */
  .container {
    grid-template-columns: repeat(4, 1fr); /* Máximo 4 columnas */
  }
}


.titulo{

font-family: Arial, sans-serif; /* Fuente del texto */
font-weight: bold; /* Grosor de la fuente */
background: linear-gradient(90deg, #9f8c8c, #ee5e04, #1114dc); /* Degradado de colores */
-webkit-background-clip: text; /* Aplicar el gradiente al texto */
-webkit-text-fill-color: transparent; /* Hacer transparente el color del texto */



}
</style>
