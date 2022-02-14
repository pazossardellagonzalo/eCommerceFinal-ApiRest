import { Producto } from "./Productos"

export class Ropa extends Producto {
    protected _talla: number
    protected _color: string

    constructor(cBarra:string, tipoProducto:string, precio:number, marca:string, descripcion:string, talla:number, color:string){
        super(cBarra, tipoProducto, precio, marca, descripcion)
        this._talla = talla
        this._color = color
    }

    get talla(){
        return this._talla
    }

    get color(){
        return this._color
    }

    calcularPrecio() {
        if(this._talla > 57){
            this._precio + 10
        }else{
            this._precio + 5
        }
        return this._precio
    }
}