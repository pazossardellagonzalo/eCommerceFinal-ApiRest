"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(nPedido, objetos, fecha, dniCliente, importeTotal) {
        this._nPedido = nPedido;
        this._dniCliente = dniCliente;
        this._objetos = objetos;
        this._fecha = fecha;
        this._importeTotal = importeTotal;
    }
    get nPedido() {
        return this._nPedido;
    }
    get objetos() {
        return this._objetos;
    }
    get fecha() {
        return this._fecha;
    }
    get dniCliente() {
        return this._dniCliente;
    }
    get importeTotal() {
        return this._importeTotal;
    }
}
exports.Pedido = Pedido;
