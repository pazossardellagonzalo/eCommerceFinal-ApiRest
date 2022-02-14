import { Empleado } from "./Empleados";

export class Manager extends Empleado {
    protected _estudios: string
    

    constructor(dni: string, tipoEmpleado: string, nombre: string, tlf:number, departamento: string, estudios:string, sueldo:number){
        super(dni, nombre, tlf, sueldo, departamento, tipoEmpleado)
        this._estudios = estudios
    }

    get estudios(){
        return this._estudios
    }

    sueldoFinal(): number{
        let sueldoFinal: number = super.sueldoFinal()

        if(this._estudios == "Universidad"){
            sueldoFinal = sueldoFinal + 20
        }

        return Math.trunc(sueldoFinal)
    }

}