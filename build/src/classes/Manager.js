"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Empleados_1 = require("./Empleados");
class Manager extends Empleados_1.Empleado {
    constructor(dni, tipoEmpleado, nombre, tlf, departamento, estudios, sueldo) {
        super(dni, nombre, tlf, sueldo, departamento, tipoEmpleado);
        this._estudios = estudios;
    }
    get estudios() {
        return this._estudios;
    }
    sueldoFinal() {
        let sueldoFinal = super.sueldoFinal();
        if (this._estudios == "Universidad") {
            sueldoFinal = sueldoFinal + 20;
        }
        return Math.trunc(sueldoFinal);
    }
}
exports.Manager = Manager;
