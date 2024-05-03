import { validarMontoBrutoAnual } from "./valiadaciones.js";
import { validarDeducciones } from "./valiadaciones.js";

export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get MontoBrutoAnual() {
    return `${this._montoBrutoAnual}`;
  }

  get Deducciones() {
    return `${this._deducciones}`;
  }

  set setMontoBrutoAnual(nuevaMontoBrutoAnual) {
    const MontoBrutoAnualValida = validarMontoBrutoAnual(nuevaMontoBrutoAnual);

    if (
      !MontoBrutoAnualValida ||
      nuevaMontoBrutoAnual === this._montoBrutoAnual
    ) {
      console.log("El MontoBrutoAnual no se ha podido actualizar");
    } else {
      this._montoBrutoAnual = nuevaMontoBrutoAnual;
    }
  }

  set setDeducciones(nuevaDeducciones) {
    const DeduccionesValida = validarDeducciones(nuevaDeducciones);

    if (!DeduccionesValida || nuevaDeducciones === this._deducciones) {
      console.log("Las Deducciones no se ha podido actualizar ");
    } else {
      this._deducciones = nuevaDeducciones;
    }
  }
}
