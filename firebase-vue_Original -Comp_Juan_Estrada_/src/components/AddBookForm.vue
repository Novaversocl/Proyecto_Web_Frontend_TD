<template>
  <!-- Formulario para agregar un libro -->
  <form @submit.prevent="addBook" class="form-container">
    <!-- Grupo de formulario para el código -->
    <div class="form-group">
      <!-- Etiqueta para el campo de código -->
      <label for="codigo">Código:</label>
      <!-- Campo de entrada para el código -->
      <input
        type="text"
        v-model="localBook.codigo"
        id="codigo"
        class="form-control"
        required
      />
    </div>
    <!-- Grupo de formulario para el nombre -->
    <div class="form-group">
      <!-- Etiqueta para el campo de nombre -->
      <label for="nombre">Nombre:</label>
      <!-- Campo de entrada para el nombre -->
      <input
        type="text"
        v-model="localBook.nombre"
        id="nombre"
        class="form-control"
        required
      />
    </div>
    <!-- Grupo de formulario para la descripción -->
    <div class="form-group">
      <!-- Etiqueta para el campo de descripción -->
      <label for="descripcion">Descripción:</label>
      <!-- Campo de entrada para la descripción -->
      <input
        type="text"
        v-model="localBook.descripcion"
        id="descripcion"
        class="form-control"
        required
      />
    </div>
    <!-- Grupo de formulario para el precio -->
    <div class="form-group">
      <!-- Etiqueta para el campo de precio -->
      <label for="precio">Precio:</label>
      <!-- Campo de entrada para el precio -->
      <input
        type="number"
        v-model="localBook.precio"
        id="precio"
        class="form-control"
        required
      />
    </div>
    <!-- Grupo de formulario para el stock -->
    <div class="form-group">
      <!-- Etiqueta para el campo de stock -->
      <label for="stock">Stock:</label>
      <!-- Campo de entrada para el stock -->
      <input
        type="number"
        v-model="localBook.stock"
        id="stock"
        class="form-control"
        required
      />
    </div>
    <!-- Botón para enviar el formulario -->
    <button type="submit" class="btn btn-primary">Agregar Libro</button>
  </form>
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
      // Inicializa localBook con una copia del libro recibido en las props
      localBook: { ...this.book },
    };
  },
  methods: {
    // Método para emitir el evento 'add-book' al padre con los datos del libro local
    addBook() {
      this.$emit("add-book", this.localBook);
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 33px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-primary:active {
  background-color: #0056b3;
}
</style>
