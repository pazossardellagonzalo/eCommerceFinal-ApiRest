"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joyas = void 0;
const Productos_1 = require("./Productos");
class Joyas extends Productos_1.Producto {
    constructor(cBarra, tipoProducto, precio, marca, descripcion, material, piedraPreciosa, peso) {
        super(cBarra, tipoProducto, precio, marca, descripcion);
        this._material = material;
        this._piedraPreciosa = piedraPreciosa;
        this._peso = peso;
    }
    get material() {
        return this._material;
    }
    get piedraPreciosa() {
        return this._piedraPreciosa;
    }
    get peso() {
        return this._peso;
    }
    calcularPrecio() {
        if (this._piedraPreciosa == "Ruby") {
            this._precio * 1.2;
        }
        if (this._piedraPreciosa == "Zafiro") {
            this._precio * 1.3;
        }
        if (this._piedraPreciosa == "Zafiro") {
            this._precio * 1.4;
        }
        if (this._material == "Oro") {
            this._precio = this._peso * 42;
        }
        else {
            this._precio = this._peso * 20;
        }
        return this._precio;
    }
}
exports.Joyas = Joyas;
