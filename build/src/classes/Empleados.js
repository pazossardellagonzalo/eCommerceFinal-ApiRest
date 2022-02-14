"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(dni, nombre, tlf, sueldo, departamento, tipoEmpleado) {
        this._dni = dni;
        this._nombre = nombre;
        this._tlf = tlf;
        this._sueldo = sueldo;
        this._departamento = departamento;
        this._tipoEmpleado = tipoEmpleado;
    }
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get tlf() {
        return this._tlf;
    }
    get departamento() {
        return this._departamento;
    }
    get sueldo() {
        return this._sueldo;
    }
    get tipoEmpleado() {
        return this._tipoEmpleado;
    }
    sueldoFinal() {
        let sueldoFinal;
        let sueldoBase = this.sueldo;
        if (this._departamento == "Joyeria") {
            sueldoFinal = sueldoBase * 1.6;
        }
        else {
            sueldoFinal = sueldoBase * 1.4;
        }
        return Math.trunc(sueldoFinal);
    }
}
exports.Empleado = Empleado;
