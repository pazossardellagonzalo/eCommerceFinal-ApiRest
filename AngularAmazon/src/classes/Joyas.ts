import { Producto } from "./Productos"

export class Joyas extends Producto {
    protected _material: string
    protected _piedraPreciosa: string
    protected _peso: number

    constructor(cBarra:string, tipoProducto:string, precio:number, marca:string, descripcion:string, material:string, piedraPreciosa:string, peso:number){
        super(cBarra, tipoProducto, precio, marca, descripcion)
        this._material = material
        this._piedraPreciosa = piedraPreciosa
        this._peso = peso
    }

    get material(){
        return this._material
    }

    get piedraPreciosa(){
        return this._piedraPreciosa
    }

    get peso(){
        return this._peso
    }

    calcularPrecio() {
        if(this._piedraPreciosa == "Ruby"){
            this._precio * 1.2
        }
        if(this._piedraPreciosa == "Zafiro"){
            this._precio * 1.3
        }
        if(this._piedraPreciosa == "Zafiro"){
            this._precio * 1.4
        }
        if(this._material == "Oro"){
            this._precio = this._peso * 42
        } else{
            this._precio = this._peso * 20
        }
        return this._precio
    }
}