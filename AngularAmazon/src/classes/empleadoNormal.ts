import { Empleado } from "./Empleados";

export class empleadoNormal extends Empleado {
    protected _horario: string
    protected _jornada: string

    constructor(horario: string, dni: string, nombre: string, tlf: number, sueldo: number, departamento: string, jornada: string, tipoEmpleado: string){
        super(dni, nombre, tlf, sueldo, departamento, tipoEmpleado)
        this._horario = horario
        this._jornada = jornada
    }

    get horario(){
        return this._horario
    }

    get jornada(){
        return this._jornada
    }

    sueldoFinal(): number{
        let sueldoFinal: number = super.sueldoFinal()

        if(this._jornada == "Completa"){
            sueldoFinal = sueldoFinal * 1.2
        }else{
            sueldoFinal = sueldoFinal - 200
        }

        if(this._horario == "Noche"){
            sueldoFinal = sueldoFinal + 65
        }

        return Math.trunc(sueldoFinal)
    }
}