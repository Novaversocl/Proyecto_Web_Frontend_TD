"use strict";

var _Cliente = require("./Cliente.js");
var _Impuesto = require("./Impuesto.js");
// Crear una instancia de Impuesto con el monto bruto anual y las deducciones
var impuestoCliente = new _Impuesto.Impuesto(100, 50);

// Crear una instancia de Cliente con el nombre y el impuesto
var cliente = new _Cliente.Cliente("Juan", impuestoCliente);
// variable y llamo a el get Nombre de la clase Cliente.js
var nombreCliente = cliente.Nombre;
var MontoBrutoAnualImpuesto = impuestoCliente._montoBrutoAnual;
var DeduccionesImpuesto = impuestoCliente._deducciones;
console.log("El MontoBrutoAnual es :", MontoBrutoAnualImpuesto);
console.log("la DeduccionesImpuesto es :", DeduccionesImpuesto);
console.log("El nombre del cliente es:", nombreCliente);

// Calcular el impuesto total llamando al método calcularImpuesto() en el cliente
var impuestoTotal = cliente.calcularImpuesto();

// Mostrar el impuesto total
console.log("El impuesto total a pagar por el cliente es:", impuestoTotal);