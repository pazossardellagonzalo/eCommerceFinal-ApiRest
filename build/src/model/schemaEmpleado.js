"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleados = void 0;
const mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const empleadoSchema = new Schema({
    dni: String,
    tipoEmpleado: String,
    nombre: String,
    tlf: Number,
    departamento: String,
    jornada: String,
    horario: String,
    sueldo: Number,
    estudios: String
});
exports.Empleados = (0, mongoose_1.model)('empleados', empleadoSchema);
