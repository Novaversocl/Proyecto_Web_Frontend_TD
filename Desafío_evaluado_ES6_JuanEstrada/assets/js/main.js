import { Cliente } from "./Cliente.js";
import { Impuesto } from "./Impuesto.js";

// Crear una instancia de Impuesto con el monto bruto anual y las deducciones
const impuestoCliente = new Impuesto(100, 50);

// Crear una instancia de Cliente con el nombre y el impuesto
const cliente = new Cliente("Juan", impuestoCliente);
// variable y llamo a el get Nombre de la clase Cliente.js
const nombreCliente = cliente.Nombre;

const MontoBrutoAnualImpuesto = impuestoCliente._montoBrutoAnual;
const DeduccionesImpuesto = impuestoCliente._deducciones;

console.log("El MontoBrutoAnual es :", MontoBrutoAnualImpuesto);
console.log("la DeduccionesImpuesto es :", DeduccionesImpuesto);

console.log("El nombre del cliente es:", nombreCliente);

// Calcular el impuesto total llamando al método calcularImpuesto() en el cliente
const impuestoTotal = cliente.calcularImpuesto();

// Mostrar el impuesto total
console.log("El impuesto total a pagar por el cliente es:", impuestoTotal);
