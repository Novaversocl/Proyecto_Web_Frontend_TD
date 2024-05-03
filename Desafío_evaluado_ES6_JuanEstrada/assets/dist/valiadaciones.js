"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarTexto = exports.validarMontoBrutoAnual = exports.validarDeducciones = void 0;
var REGEX_NOMBRES = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/;
var REGEX_MONTOBRUTOANUAL = /^\d+$/;
var REGEX_DEDUCCIONES = /^\d+$/;
var validarTexto = exports.validarTexto = function validarTexto(texto) {
  if (!REGEX_NOMBRES.test(texto)) {
    return false;
  } else {
    return true;
  }
};
var validarMontoBrutoAnual = exports.validarMontoBrutoAnual = function validarMontoBrutoAnual(montoBrutoAnual) {
  if (!REGEX_MONTOBRUTOANUAL.test(montoBrutoAnual)) {
    return false;
  } else {
    return true;
  }
};
var validarDeducciones = exports.validarDeducciones = function validarDeducciones(deducciones) {
  if (!REGEX_DEDUCCIONES.test(deducciones)) {
    return false;
  } else {
    return true;
  }
};