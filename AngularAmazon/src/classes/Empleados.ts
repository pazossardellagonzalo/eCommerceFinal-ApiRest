export class Empleado{
    protected _dni: string
    protected _nombre: string
    protected _tlf: number
    protected _sueldo: number
    protected _departamento: string
    protected _tipoEmpleado: string
    
    constructor(dni: string, nombre: string, tlf:number, sueldo:number, departamento: string, tipoEmpleado: string){
        this._dni = dni
        this._nombre = nombre
        this._tlf = tlf
        this._sueldo = sueldo
        this._departamento = departamento
        this._tipoEmpleado = tipoEmpleado
    }

    get dni(){
        return this._dni
    }

    get nombre(){
        return this._nombre
    }

    get tlf(){
        return this._tlf
    }

    get departamento(){
        return this._departamento
    }

    get sueldo(){
        return this._sueldo
    }

    get tipoEmpleado(){
        return this._tipoEmpleado
    }

    sueldoFinal(): number{
        let sueldoFinal: number
        let sueldoBase = this.sueldo

        if(this._departamento == "Joyeria"){
            sueldoFinal = sueldoBase * 1.6;
        }else {
            sueldoFinal = sueldoBase * 1.4;
        }

        return Math.trunc(sueldoFinal)
    }
   
}