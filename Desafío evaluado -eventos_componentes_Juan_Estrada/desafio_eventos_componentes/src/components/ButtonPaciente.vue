<script>
export default {
    props: {
        textButton: {
            type: String,
            required: true
        },
        typeButton: {
            type: String,
            required: true
        }
    },
    methods: {
        accionButton () {
            this.$emit('accion-button')
        }
    }
}
</script>

<template>
    <div>

        <button :class="[typeButton, 'btn success']" @click="accionButton">{{ textButton }}</button>
    </div>
</template>

<style>

    .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .success {
    background-color: #28a745;
    color: #fff;
  }
  .success:hover {
    background-color: #218838;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-danger:hover {
    background-color: #c82333;
}

.btn-danger:focus {
    outline: none;
}

  .btn:hover {
    filter: brightness(90%);
  }


</style>