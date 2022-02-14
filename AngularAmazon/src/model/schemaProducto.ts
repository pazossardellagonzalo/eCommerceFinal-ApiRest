import { model } from 'mongoose'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const productoShema = new Schema({
    cBarra: String,
    tipoProducto: String,
    marca: String,
    descripcion: String,
    talla: Number,
    color: String,
    material: String,
    piedraPreciosa: String,
    peso: Number,
    precio: Number,
})

export type iJoya = {
    cBarra: string | null
    tipoProducto: string | null
    marca: string | null
    descripcion: string | null
    material: string | null
    piedraPreciosa: string | null
    peso: number | null
    precio: number | null
}

export type iRopa = {
    cBarra: string | null
    tipoProducto: string | null
    marca: string | null
    descripcion: string | null
    talla: string | null
    color: string | null
    precio: number | null
}

export const Productos = model('productos', productoShema)