<!-- Componente: EditBookForm.vue -->
<template>
    <!-- Contenedor principal con clase 'container' -->
    <div class="container">
      <!-- Título de la página de edición -->
      <h1>Editar Libro</h1>
      <!-- Formulario para editar el libro -->
      <form @submit.prevent="$emit('submit', localBook)" class="form">
        <!-- Grupo de entrada para el nombre -->
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre:</label>
          <input
            type="text"
            v-model="localBook.nombre"
            class="form-control"
            id="nombre"
            required
          />
        </div>
        <!-- Grupo de entrada para la descripción -->
        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción:</label>
          <textarea
            v-model="localBook.descripcion"
            class="form-control"
            id="descripcion"
          ></textarea>
        </div>
        <!-- Grupo de entrada para el precio -->
        <div class="mb-3">
          <label for="precio" class="form-label">Precio:</label>
          <input
            type="number"
            v-model.number="localBook.precio"
            class="form-control"
            id="precio"
            required
          />
        </div>
        <!-- Grupo de entrada para el stock -->
        <div class="mb-3">
          <label for="stock" class="form-label">Stock:</label>
          <input
            type="number"
            v-model.number="localBook.stock"
            class="form-control"
            id="stock"
            required
          />
        </div>
        <!-- Botón para enviar el formulario -->
        <button type="submit" class="btn btn-primary">Guardar cambios</button>
        <!-- Botón para cancelar la edición -->
        <button type="button" @click="$emit('cancel')" class="btn btn-secondary">
          Cancelar
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    // Propiedades recibidas del componente padre
    props: {
      book: {
        type: Object, // Tipo de la propiedad: Objeto
        required: true, // Es requerido
      },
    },
    data() {
      return {
        // Copia local del libro para editar
        localBook: { ...this.book },
      };
    },
    watch: {
      // Observador para la propiedad 'book'
      book: {
        handler(newBook) {
          // Actualiza la copia local cuando cambia la propiedad 'book'
          this.localBook = { ...newBook };
        },
        deep: true, // Observa cambios profundos
        immediate: true, // Ejecuta el handler inmediatamente
      },
    },
  };
  </script>
  





<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 30px;
}

.form {
  background-color: #ffffff;
  padding: 35px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn {
  margin: 1rem;
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn:hover {
  color: #fff;
  background-color: #0056b3;
  border-color: #0056b3;
  text-decoration: none;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
