<script>
import ButtonPaciente from './ButtonPaciente.vue'
export default {
    data() {
        return {
            nuevoPaciente: {
                id: '',
                paciente: '',
                fecha: '',
                hora: '',
                gravedad: '',
                motivo: ''
            },
            textButton: 'Agregar Paciente',
            typeButton: 'agregar'

        }
    },
    components: {
        ButtonPaciente
    },

    computed: {
        isFormValid() {
            return this.nuevoPaciente.id &&
                   this.nuevoPaciente.paciente &&
                   this.nuevoPaciente.fecha &&
                   this.nuevoPaciente.hora &&
                   this.nuevoPaciente.gravedad &&
                   this.nuevoPaciente.motivo;
        }
    },

    methods: {
        agregarPaciente() {
            if (this.isFormValid) {
                this.$emit('agregar-paciente', { ...this.nuevoPaciente });
                this.nuevoPaciente.id = '';
                this.nuevoPaciente.paciente = '';
                this.nuevoPaciente.fecha = '';
                this.nuevoPaciente.hora = '';
                this.nuevoPaciente.gravedad = '';
                this.nuevoPaciente.motivo = '';
            } else {
                alert('Favor ingresar todos los datos');
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <section class="Formulario">
            <div class="form-row">
                <label :class="{'empty-field': !nuevoPaciente.id}" for="Rut">Rut</label>
                <label :class="{'empty-field': !nuevoPaciente.paciente}" for="paciente">Paciente</label>
                <label :class="{'empty-field': !nuevoPaciente.fecha}" for="fecha">Fecha</label>
                <label :class="{'empty-field': !nuevoPaciente.hora}" for="Hora">Hora</label>
                <label :class="{'empty-field': !nuevoPaciente.gravedad}" for="Gravedad">Gravedad</label>
                <label :class="{'empty-field': !nuevoPaciente.motivo}" for="Motivo">Motivo</label>
            </div>

            <div class="form-row salto">
                <input type="text" v-model="nuevoPaciente.id" placeholder="Ingrese el Rut">
                <input type="text" v-model="nuevoPaciente.paciente" placeholder="Ingrese el nombre del paciente">
                <input type="date" v-model="nuevoPaciente.fecha">
                <input type="time" v-model="nuevoPaciente.hora">
                <select v-model="nuevoPaciente.gravedad">
                    <option disabled value="">Seleccione la gravedad</option>
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                </select>
                <input type="text" v-model="nuevoPaciente.motivo" placeholder="Ingrese el motivo">
            </div>

            <div class="button-group">
                <ButtonPaciente 
                    :textButton="textButton" 
                    :typeButton="typeButton" 
                    @accion-button="agregarPaciente" 
                    :disabled="!isFormValid" 
                />
            
            </div>
        </section>
    </div>
</template>


<style scoped>
.form-row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
}

.Formulario {

    width: 60rem;
    padding: 1rem;
    background: linear-gradient(to bottom left,
            rgb(39, 6, 66),
            rgb(28, 28, 155));
    background-size: 100% 100vh;
    /* Ajusta el tamaño del degradado al 100% del ancho y 100vh de alto */
    background-repeat: repeat-y;
    /* Repite el degradado verticalmente */
    color: aliceblue;
    border-radius: 1rem;
    border: 1px solid rgba(16, 3, 33, 0.566);
}

label {
   font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: rgb(80, 197, 102);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}

.empty-field {
    color: rgb(240, 75, 75);
}

input,
select {
    
  width: 100%;
  margin: 0.2rem;
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

input:focus,
select:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>