<template>
    <!-- Botón para eliminar el libro -->
    <button @click="deleteBook">Eliminar</button>
  </template>
  
  <script>
  export default {
    // Propiedades recibidas del componente padre
    props: {
      bookID: {
        type: String, // Tipo de la propiedad: String
        required: true, // Es requerido
      },
    },
    methods: {
      // Método para eliminar el libro
      async deleteBook() {
        try {
          // Emite el evento 'book-delete' al padre con el ID del libro
          this.$emit("book-delete", this.bookID);
        } catch (error) {
          // Muestra un mensaje de error en la consola si falla la eliminación
          console.error("No pudimos eliminar el Libro: ", error);
        }
      },
    },
  };
  </script>
  

<style scoped>
button {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #e71b04;
  border: 1px solid transparent;

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button:hover {
  color: #fff;
  background-color: #c50d0d;
  border-color: #fe0202;
  text-decoration: none;
}
</style>
