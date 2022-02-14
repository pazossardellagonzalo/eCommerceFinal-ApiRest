"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
const mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const pedidoShema = new Schema({
    dniCliente: String,
    nPedido: String,
    objetos: {
        type: Array
    },
    fecha: Date,
    importeTotal: Number,
});
exports.Pedidos = (0, mongoose_1.model)('pedidos', pedidoShema);
