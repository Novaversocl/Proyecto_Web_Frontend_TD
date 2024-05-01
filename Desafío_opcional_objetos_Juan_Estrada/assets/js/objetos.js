// Definir la función constructora para la clase Consultorio
function Consultorio(nombre) {
    this.nombre = nombre;
    this.pacientes = []; // Inicializar un array para almacenar los pacientes
}

// Método para agregar un paciente al consultorio
Consultorio.prototype.agregarPaciente = function(paciente) {
    this.pacientes.push(paciente);
}

// Método para buscar un paciente por nombre
Consultorio.prototype.buscarPacientePorNombre = function(nombre) {
    return this.pacientes.find(paciente => paciente.nombre === nombre);
}

// Método para mostrar todos los pacientes registrados
Consultorio.prototype.mostrarTodosLosPacientes = function() {
    this.pacientes.forEach(paciente => console.log(paciente));
}

// Definir la función constructora para la clase Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre; // Usamos _nombre para almacenar el nombre del paciente
    this._edad = edad; // Usamos _edad para almacenar la edad del paciente
    this._rut = rut; // Usamos _rut para almacenar el rut del paciente
    this._diagnostico = diagnostico; // Usamos _diagnostico para almacenar el diagnóstico del paciente
}

// Utilizar propiedades de acceso para definir los getters y setters de Paciente
Object.defineProperties(Paciente.prototype, {
    nombre: {
        get: function() {
            return this._nombre;
        },
        set: function(value) {
            this._nombre = value;
        }
    },
    edad: {
        get: function() {
            return this._edad;
        },
        set: function(value) {
            this._edad = value;
        }
    },
    rut: {
        get: function() {
            return this._rut;
        },
        set: function(value) {
            this._rut = value;
        }
    },
    diagnostico: {
        get: function() {
            return this._diagnostico;
        },
        set: function(value) {
            this._diagnostico = value;
        }
    }
});

// Instanciar objetos utilizando la instrucción new
let consultorio = new Consultorio("Consultorio Central");

let paciente1 = new Paciente("Juan", 30, "123456789", "Gripe");

// Crear una instancia de la clase Paciente y modificar el nombre del segundo paciente
let paciente2 = new Paciente("María", 25, "987654321", "Fractura");

// Cambiar el nombre del paciente utilizando el setter correspondiente
paciente2.nombre = "MaríaJose";

// Agregar pacientes al consultorio
consultorio.agregarPaciente(paciente1);
consultorio.agregarPaciente(paciente2);

// Mostrar todos los pacientes registrados
console.log("Pacientes registrados:");
consultorio.mostrarTodosLosPacientes();

// Buscar paciente por nombre
let pacienteEncontrado = consultorio.buscarPacientePorNombre("Juan");
console.log("Paciente encontrado:", pacienteEncontrado);
