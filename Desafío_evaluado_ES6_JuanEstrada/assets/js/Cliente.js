import { validarTexto } from "./valiadaciones.js";

export class Cliente {
  constructor(nombre,impuesto) {
    this._nombre = nombre
    this._impuesto = impuesto
  }

  get Nombre() {
    return `${this._nombre}`;
  }

  set setNombre(nuevoNombre) {
    const nombreValido = validarTexto(nuevoNombre);

    if (!nombreValido || nuevoNombre === "" || nuevoNombre === this._nombre) {
      console.log("No podemos cambiar este nombre");
    } else {
      this._nombre = nuevoNombre;
    }
  }

  calcularImpuesto() {
    const montoBrutoAnual = this._impuesto.MontoBrutoAnual;
    const deducciones = this._impuesto.Deducciones;
    const impuestoTotal = (montoBrutoAnual - deducciones) * 0.21;
    return impuestoTotal;
  }


}
