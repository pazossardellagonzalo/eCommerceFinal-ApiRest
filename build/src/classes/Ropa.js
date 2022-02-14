"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ropa = void 0;
const Productos_1 = require("./Productos");
class Ropa extends Productos_1.Producto {
    constructor(cBarra, tipoProducto, precio, marca, descripcion, talla, color) {
        super(cBarra, tipoProducto, precio, marca, descripcion);
        this._talla = talla;
        this._color = color;
    }
    get talla() {
        return this._talla;
    }
    get color() {
        return this._color;
    }
    calcularPrecio() {
        if (this._talla > 57) {
            this._precio + 10;
        }
        else {
            this._precio + 5;
        }
        return this._precio;
    }
}
exports.Ropa = Ropa;
