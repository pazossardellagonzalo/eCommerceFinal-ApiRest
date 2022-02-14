"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleadoNormal = void 0;
const Empleados_1 = require("./Empleados");
class empleadoNormal extends Empleados_1.Empleado {
    constructor(horario, dni, nombre, tlf, sueldo, departamento, jornada, tipoEmpleado) {
        super(dni, nombre, tlf, sueldo, departamento, tipoEmpleado);
        this._horario = horario;
        this._jornada = jornada;
    }
    get horario() {
        return this._horario;
    }
    get jornada() {
        return this._jornada;
    }
    sueldoFinal() {
        let sueldoFinal = super.sueldoFinal();
        if (this._jornada == "Completa") {
            sueldoFinal = sueldoFinal * 1.2;
        }
        else {
            sueldoFinal = sueldoFinal - 200;
        }
        if (this._horario == "Noche") {
            sueldoFinal = sueldoFinal + 65;
        }
        return Math.trunc(sueldoFinal);
    }
}
exports.empleadoNormal = empleadoNormal;
