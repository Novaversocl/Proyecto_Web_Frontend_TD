
// Definición de la clase Propietario
class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  // Método para obtener los datos del propietario
  datosPropietario() {
    return `Dueño: ${this.nombre}, Teléfono: ${this.telefono}, Lugar de Residencia: ${this.direccion}`;
  }
}

// Definición de la clase Animal
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }

  // Método para obtener el tipo de animal
  getTipo() {
    return this.tipo;
  }
}

// Definición de la clase Mascota que hereda de Animal
class Mascota extends Animal {
  constructor(nombre, tipo, propietario, enfermedad) {
    super(tipo);
    this._nombre = nombre;
    this.propietario = propietario;
    this._enfermedad = enfermedad;
  }

  // Getter para obtener el nombre de la mascota
  get nombre() {
    return this._nombre;
  }

  // Setter para actualizar el nombre de la mascota
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // Getter para obtener la enfermedad de la mascota
  get enfermedad() {
    return this._enfermedad;
  }

  // Setter para actualizar la enfermedad de la mascota
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}



// Escuchador de eventos para el envío del formulario
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

  // Captura de los valores del formulario
  const propietarioNombre = document.getElementById('propietario').value.trim();
  const propietarioDireccion = document.getElementById('direccion').value.trim();
  const propietarioTelefono = document.getElementById('telefono').value.trim();
  const nombreMascota = document.getElementById('nombreMascota').value.trim();
  const tipoMascota = document.getElementById('tipo').value;
  const enfermedad = document.getElementById('enfermedad').value.trim();

  // Validación de campos obligatorios
  if (!propietarioNombre || !propietarioDireccion || !propietarioTelefono || !nombreMascota || !enfermedad) {
    alert("Por favor, complete todos los campos obligatorios.");
    return;
  }

  // Validación de teléfono
  if (!/^\d+$/.test(propietarioTelefono)) {
    alert("Por favor, ingrese un número de teléfono válido.");
    return;
  }

  // Creación de una instancia de Propietario
  const propietario = new Propietario(propietarioNombre, propietarioDireccion, propietarioTelefono);

  // Creación de una instancia de Mascota
  const mascota = new Mascota(nombreMascota, tipoMascota, propietario, enfermedad);

  // Mostramos los datos agregados en la consola
  console.log("Objeto Propietario:", propietario);
  console.log("Objeto Mascota:", mascota);
  console.log("Objeto Animal:", { Tipo: mascota.getTipo()});

 // Mostramos los datos agregados en la página
const resultadoElement = document.getElementById('resultado').querySelector('ul');
resultadoElement.innerHTML += `
  <li>${propietario.datosPropietario()}</li>
  <li>Nombre de la mascota: ${mascota.nombre}, Tipo: ${mascota.getTipo()}, Motivo de la consulta: ${mascota.enfermedad}</li>

`;

// Limpiamos el formulario
document.querySelector('form').reset();
});
