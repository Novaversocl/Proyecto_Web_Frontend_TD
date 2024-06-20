<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Games-component',
    computed: {
        ...mapGetters(['getGames'])

    },
    methods: {
        ...mapActions(['fetchGames', 'updateStock']), // Agregar 'updateStock' como acción de Vuex
        loadGames() {
            this.fetchGames();
        },
        incrementStock(game) {
            // Convertir cadena a número y luego incrementar
            const updatedStock = parseInt(game.stock) + 1;
            // Convertir número de nuevo a cadena
            const updatedGame = { ...game, stock: updatedStock.toString() };
            this.updateStock(updatedGame);
        },
        decrementStock(game) {
            if (game.stock > 0) {
                const updatedGame = { ...game, stock: game.stock - 1 };
                this.updateStock(updatedGame);
            }
        },
        formatPrice(precio) {
            // Formato específico para pesos chilenos
            return Number(precio).toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP',
                minimumFractionDigits: 0  // Sin decimales para pesos enteros
            });
        }


    },
    mounted() {
        this.loadGames()
    }

}

</script>


<template>
    <section class="container">
        <h1>Tienda 32 Bits</h1>
        <h2>Listado de Juegos</h2>

        <table class="table" v-if="getGames.length">
            <thead class="thead-dark">
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in getGames" :key="game.codigo">
                    <td>{{ game.codigo }}</td>
                    <td>{{ game.nombre }}</td>
                    <td>{{ game.stock }}</td>
                    <td>{{ formatPrice(game.precio) }}</td>

                    <td style="text-align: center;"> <!-- Añadir estilo de centrado -->
                        <button @click="incrementStock(game)" class="btn btn-success btn-sm">+</button>
                        <button @click="decrementStock(game)" class="btn btn-danger btn-sm">-</button>
                    </td>
                    
                </tr>
            </tbody>
        </table>

        <div v-else>
            <p>No hay juegos disponibles.</p>
        </div>
    </section>
</template>


<style>
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}

.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
}

.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

.btn:hover {
    opacity: 0.8;
}

.btn:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    outline: none;
}

.btn:active {
    background-color: #0056b3;
    border-color: #0056b3;
}

.container {

    padding: 3rem;

}
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;

}

.table th {
  background-color: #1d00fa;
  color: #ffffff;
}

.table td {
  background-color: #fff;
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

</style>
