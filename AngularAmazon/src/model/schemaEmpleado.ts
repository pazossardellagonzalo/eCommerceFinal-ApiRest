import { model } from 'mongoose'

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
})

export type iEmpleadoNormal = {
    dni: string | null
    tipoEmpleado: string | null
    nombre: string | null
    tlf: number | null
    departamento: string | null
    horario: string | null
    jornada: string | null
    sueldo: number | null
}

export type iManager = {
    dni: string | null
    tipoEmpleado: string | null
    nombre: string | null
    tlf: number | null
    departamento: string | null
    estudios: string | null
    sueldo: number | null
}

export type iManager2 = {
    dni: string
    tipoEmpleado: string
    nombre: string
    tlf: number
    departamento: string
    estudios: string
    sueldo: number
}

export type iSueldo = {
    dni: string | null,
    nombre: string | null,
    sueldoFinal: number | null
}

export const Empleados = model('empleados', empleadoSchema)