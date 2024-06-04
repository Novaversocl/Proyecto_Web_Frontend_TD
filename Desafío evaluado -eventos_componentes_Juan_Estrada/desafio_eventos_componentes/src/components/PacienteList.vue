<script>
import ButtonPaciente from './ButtonPaciente.vue'

export default {
    props: {
        pacientes: {
            type: Array,
            required: true
        }

    },
    components: {
        ButtonPaciente
    },
    data() {
        return {
            textButton: 'Eliminar',
            typeButton: 'eliminar'
        }
    },
    methods: {

        eliminarPaciente(index) {
            this.$emit('eliminar-paciente', index)
        }


    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="(paciente, index) in pacientes" :key="paciente.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ paciente.paciente }}</h5>
                        <p class="card-text">Rut: {{ paciente.id }}</p>
                        <p class="card-text">Fecha: {{ paciente.fecha }}</p>
                        <p class="card-text">Hora: {{ paciente.hora }}</p>
                        <p class="card-text">Gravedad: {{ paciente.gravedad }}</p>
                        <p class="card-text">Motivo: {{ paciente.motivo }}</p>
                        <div class="button-container">
                            <ButtonPaciente :typeButton="'btn-danger'" :textButton="'Eliminar'"
                                @accion-button="eliminarPaciente(index)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    width: 100%;
    padding: 15px;
    margin: 20px auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    width: 100%;
    margin: 15px;
    box-sizing: border-box;
    border: none;
    border-radius: 1rem 0rem  1rem 0rem ;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
    transition: box-shadow 0.3s ease;

}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-body {
    padding: 20px;
}

.card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
}

.card-text {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #555;
}

.button-container {
    display: flex;
    justify-content: center;
}


@media (min-width: 576px) {
    .card {
        width: calc(50% - 30px);
    }
}

@media (min-width: 494px) {
    .card {
        width: calc(100% - 20px);
    }
}

@media (min-width: 768px) {
    .card {
        width: calc(100% - 30px);

    }
}

@media (min-width: 992px) {
    .card {
        width: calc(100% - 30px);

    }
}

@media (min-width: 1200px) {
    .card {
        width: calc(100% - 30px);
    }
}

@media (min-width: 1400px) {
    .card {
        width: calc(100% - 30px);
    }
}
</style>
