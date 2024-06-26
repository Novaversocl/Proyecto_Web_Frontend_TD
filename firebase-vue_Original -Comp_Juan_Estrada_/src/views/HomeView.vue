<template>
  <div class="container">
    <h1>Lista de Libros</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <!-- Itera sobre la lista de libros obtenida mediante v-for -->
        <tr v-for="book in getBooks" :key="book.id">
          <td>{{ book.codigo }}</td>
          <td>{{ book.nombre }}</td>
          <td>$ {{ book.precio }}</td>
          <td> {{ book.stock }}</td>
          <td>
            <!-- Botón para editar un libro específico -->
            <button class="btn btn-primary" @click="editBook(book.id)">Editar</button>
            <!-- Componente DeleteButton para eliminar un libro -->
            <DeleteButton :bookID="book.id" @book-delete="deleteBook" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// Importaciones necesarias
import DeleteButton from '../components/DeleteButton.vue';  // Componente para el botón de eliminar
import { mapGetters, mapActions } from 'vuex';  // Funciones de Vuex para mapeo de getters y acciones

export default {
  name: 'HomeView',  // Nombre del componente
  components: {
    DeleteButton  // Componente hijo: DeleteButton
  },
  computed: {
    ...mapGetters(['getBooks'])  // Mapea el getter getBooks de Vuex para obtener la lista de libros
  },
  methods: {
    ...mapActions(['fetchBooks', 'deleteBook']),  // Mapea las acciones fetchBooks y deleteBook de Vuex

    // Método para redirigir a la página de edición de libros con el ID del libro seleccionado
    editBook(bookId) {
      this.$router.push({ name: 'edit-book', params: { id: bookId } });
    }
  },
  mounted() {
    this.fetchBooks();  // Llama a la acción fetchBooks de Vuex al cargar el componente para obtener la lista de libros
  }
};
</script>





<style scoped>
/* Estilos específicos para la tabla */
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  background-color: #f8f9fa;
}

/* Estilo para los botones de acción */
.btn {
  margin: 0.5rem;
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #007bff;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  text-decoration: none;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

</style>

