<template>
  <div>
    <div class="salto"></div>
    <h1 class="texto-degradado centrar_texto ">.:NovaVerso:.</h1>
    <div class="salto"></div>
    <h2 class="centrar_texto texto_blanco">Administrador Citas</h2>
    <div class="salto"></div>
    <AddPaciente @agregar-paciente="agregarPaciente" />

    <div class="salto"></div>
    <div class="espacio"></div>
    <PacienteList :pacientes="pacientes" @eliminar-paciente="eliminarPaciente" />


  </div>
</template>

<script>
import PacienteList from './components/PacienteList.vue';
import AddPaciente from './components/AddPaciente.vue'


export default {
  name: 'App',
  components: {
    PacienteList,
    AddPaciente
  },
  data() {
    return {
      pacientes: [
                { id: "15877254-5", paciente: 'Rosa Espinoza', fecha: "2024-06-03", hora: "24:00", gravedad: "Alta", motivo: "Fiebre" },
                { id: "18655245-5", paciente: 'Armando Casas', fecha: "2024-06-03", hora: "24:00", gravedad: "Alta", motivo: "Fiebre" },
                { id: "12345678-9", paciente: 'Juan Pérez', fecha: "2024-06-03", hora: "10:00", gravedad: "Media", motivo: "Dolor de cabeza" },
                { id: "98765432-1", paciente: 'María González', fecha: "2024-06-03", hora: "11:00", gravedad: "Baja", motivo: "Tos" },
                { id: "11223344-5", paciente: 'Carlos Martínez', fecha: "2024-06-03", hora: "12:00", gravedad: "Alta", motivo: "Dolor de estómago" },
                { id: "55667788-9", paciente: 'Laura Fernández', fecha: "2024-06-03", hora: "13:00", gravedad: "Media", motivo: "Migraña" },
                { id: "66554433-2", paciente: 'Pedro López', fecha: "2024-06-03", hora: "14:00", gravedad: "Baja", motivo: "Resfriado" },
                { id: "99887766-1", paciente: 'Ana Rodríguez', fecha: "2024-06-03", hora: "15:00", gravedad: "Alta", motivo: "Fractura" },
                { id: "77665544-3", paciente: 'Marta Sánchez', fecha: "2024-06-03", hora: "16:00", gravedad: "Media", motivo: "Dolor de espalda" },
 
            ],

    }
  },
  methods: {

    eliminarPaciente(index) {
      this.pacientes.splice(index, 1)
    },
    agregarPaciente(paciente) {
      this.pacientes.push(paciente)
    }
  },
  mounted() {
  },
}
</script>

<style>
.salto {
  padding-bottom: 1rem;
}

.espacio{

margin-bottom: 3rem;

}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
background-color: rgb(1, 1, 26);

}

.texto_blanco {
  color: rgb(245, 245, 245);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.centrar_texto {
  text-align: center;
}

.texto-degradado {
    background: linear-gradient(to right, rgb(229, 245, 8) 45%, rgb(249, 157, 9) 55%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

</style>