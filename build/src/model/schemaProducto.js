"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const mongoose_1 = require("mongoose");
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
});
exports.Productos = (0, mongoose_1.model)('productos', productoShema);
