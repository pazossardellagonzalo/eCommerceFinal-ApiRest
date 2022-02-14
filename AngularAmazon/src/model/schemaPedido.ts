import { model } from 'mongoose'
import { Producto } from '../classes/Productos';

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
})

export type iPedido = {
    dniCliente: string | null
    nPedido: string | null
    objetos: Array<any> | null
    fecha: Date | null
    importeTotal: number | null
}

export const Pedidos = model('pedidos', pedidoShema)