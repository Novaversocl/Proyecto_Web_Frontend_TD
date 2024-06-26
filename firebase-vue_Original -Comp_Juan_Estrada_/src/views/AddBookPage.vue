<script>
// Importa el componente AddBookForm.vue y mapActions de Vuex
import AddBookForm from '../components/AddBookForm.vue'
import { mapActions } from 'vuex'

export default {
    // Define el componente AddBookPage
    components: {
        AddBookForm  // Componente hijo para el formulario de agregar libro
    },
    // Datos locales del componente
    data() {
        return {
            // Objeto book inicializado con valores por defecto
            book: {
                nombre: '',        // Nombre del libro
                descripcion: '',   // Descripción del libro
                precio: 0,         // Precio del libro
                stock: 0           // Stock disponible del libro
            }
        }
    },
    // Métodos del componente
    methods: {
        // Mapea la acción 'addBook' de Vuex al método addBookToFirestore
        ...mapActions(['addBook']),

        // Método asincrónico para agregar un nuevo libro a Firestore
        async addBookToFirestore(newBook) {
            try {
                // Llama a la acción 'addBook' de Vuex con el nuevo libro
                await this.addBook(newBook);
                // Navega de vuelta a la página principal después de agregar el libro
                this.$router.push('/');
            } catch (error) {
                console.error('Error al agregar libro:', error);
            }
        }
    }
}
</script>


<template>
    <h1>Añade un Nuevo Libro</h1>
    <div class="form-container">
        
        <AddBookForm :book="book" @add-book="addBookToFirestore" />


    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    margin-top: 2rem; /* Ajusta el margen superior del título */
}

.form-container {
    width: 70%;
    max-width: 600px; /* Ajusta el ancho máximo del contenedor del formulario */
    margin: auto; /* Centra horizontalmente */

}
</style>