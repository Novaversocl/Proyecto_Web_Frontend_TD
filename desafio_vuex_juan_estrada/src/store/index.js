import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
  state: {
    // games: {},
    // Si games es un objeto, pero en el archivo JSON los datos son un array de juegos,
    games: [],  
  },
  getters: {
    getGames: (state) => state.games,
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    updateGame(state, updatedGame) {
        // Busca el índice del juego que coincide con el código del juego actualizado
      const index = state.games.findIndex(game => game.codigo === updatedGame.codigo);
        // Verifica si se encontró el juego en el estado
      if (index !== -1) {
          // Reemplaza el juego en el índice encontrado con el juego actualizado
        state.games.splice(index, 1, updatedGame);
      }
    },
    
  },



  actions: {



    async fetchGames({ commit }) {
      try {
        const { data } = await axios.get("/api/productos.json");
        commit("setGames", data);
      } catch (error) {
        console.error('Error al obtener los productos', error);
        throw new Error("Error al obtener los productos");  // Sin segundo argumento        
      }
    },

    async updateStock({ commit }, updatedGame) {
      try {
        // Aquí deberías implementar la lógica para actualizar el stock en tu servidor o base de datos
        // En este ejemplo, simplemente actualizamos el juego en el estado local
        commit('updateGame', updatedGame);
      } catch (error) {
        console.error('Error updating stock', error);
        throw new Error('Error al actualizar el stock del juego');
      }
    },



  },
 

  modules: {},
});
