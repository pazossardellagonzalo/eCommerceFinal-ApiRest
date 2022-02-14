"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(cBarra, tipoProducto, precio, marca, descripcion) {
        this._cBarra = cBarra;
        this._tipoProducto = tipoProducto;
        this._precio = precio;
        this._marca = marca;
        this._descripcion = descripcion;
    }
    get cBarra() {
        return this._cBarra;
    }
    get tipoProducto() {
        return this._tipoProducto;
    }
    get precio() {
        return this._precio;
    }
    get marca() {
        return this._marca;
    }
    get descripcion() {
        return this._descripcion;
    }
    calcularPrecio() {
        if (this._marca == "Gucci") {
            this._precio + 20;
        }
        if (this._marca == "Channel") {
            this._precio + 30;
        }
        return this._precio;
    }
}
exports.Producto = Producto;
