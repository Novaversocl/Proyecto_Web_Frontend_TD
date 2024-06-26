<!-- Vista: EditBookPage.vue -->
<template>
  <div>
    <!-- Componente EditBookForm que muestra el formulario de edición -->
    <EditBookForm :book="book" @submit="editBook" @cancel="cancelEdit" />
  </div>
</template>

<script>
// Importaciones necesarias
import EditBookForm from '@/components/EditBookForm.vue';  // Importa el componente de formulario de edición
import { mapActions, mapState } from 'vuex';  // Importa funciones de Vuex para mapeo de acciones y estado

export default {
  components: {
    EditBookForm  // Componente hijo: EditBookForm
  },
  data() {
    return {
      bookId: this.$route.params.id  // Captura el ID del libro desde los parámetros de la ruta
    };
  },
  computed: {
    // Mapea el estado de Vuex para obtener el libro actual basado en el ID almacenado en state.currentBookId
    ...mapState({
      book: state => state.books.find(book => book.id === state.currentBookId)
    })
  },
  methods: {
    // Mapea las acciones de Vuex necesarias
    ...mapActions(['fetchBookById', 'updateBook']),
    
    // Método para obtener el libro específico por su ID
    async fetchBook() {
      try {
        await this.fetchBookById(this.bookId);  // Llama a la acción fetchBookById de Vuex para obtener el libro
      } catch (error) {
        console.error('Error al obtener el libro:', error);  // Maneja errores si no se puede obtener el libro
      }
    },

    // Método para editar el libro
    async editBook(updatedBook) {
      try {
        await this.updateBook(updatedBook);  // Llama a la acción updateBook de Vuex para actualizar el libro
        this.$router.push('/');  // Redirige al usuario de vuelta a la página principal después de editar el libro
      } catch (error) {
        console.error('Error al actualizar el libro:', error);  // Maneja errores si ocurre algún problema al actualizar el libro
      }
    },

    // Método para cancelar la edición y volver a la página principal
    cancelEdit() {
      this.$router.push('/');  // Redirige al usuario de vuelta a la página principal
    }
  },

  // Método montado: se llama automáticamente cuando el componente se carga
  mounted() {
    this.fetchBook();  // Llama al método fetchBook para obtener el libro al cargar el componente
  }
};
</script>

