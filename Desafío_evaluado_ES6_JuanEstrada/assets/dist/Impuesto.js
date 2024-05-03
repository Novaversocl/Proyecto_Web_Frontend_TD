"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuesto = void 0;
var _valiadaciones = require("./valiadaciones.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Impuesto = exports.Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  return _createClass(Impuesto, [{
    key: "MontoBrutoAnual",
    get: function get() {
      return "".concat(this._montoBrutoAnual);
    }
  }, {
    key: "Deducciones",
    get: function get() {
      return "".concat(this._deducciones);
    }
  }, {
    key: "setMontoBrutoAnual",
    set: function set(nuevaMontoBrutoAnual) {
      var MontoBrutoAnualValida = (0, _valiadaciones.validarMontoBrutoAnual)(nuevaMontoBrutoAnual);
      if (!MontoBrutoAnualValida || nuevaMontoBrutoAnual === this._montoBrutoAnual) {
        console.log("El MontoBrutoAnual no se ha podido actualizar");
      } else {
        this._montoBrutoAnual = nuevaMontoBrutoAnual;
      }
    }
  }, {
    key: "setDeducciones",
    set: function set(nuevaDeducciones) {
      var DeduccionesValida = (0, _valiadaciones.validarDeducciones)(nuevaDeducciones);
      if (!DeduccionesValida || nuevaDeducciones === this._deducciones) {
        console.log("Las Deducciones no se ha podido actualizar ");
      } else {
        this._deducciones = nuevaDeducciones;
      }
    }
  }]);
}();