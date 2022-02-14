import { Request, Response, Router } from 'express'
import { Dirent } from 'fs'
import { userInfo } from 'os'
import { stringify } from 'querystring'
import { Empleado } from '../classes/Empleados'
import { Manager } from '../classes/Manager'
import { db } from '../database/database'
import { Clientes } from '../model/schemaCliente'
import { Empleados, iEmpleadoNormal, iManager, iManager2, iSueldo } from '../model/schemaEmpleado'
import { Login } from '../model/schemaLogin'
import { Pedidos } from '../model/schemaPedido'
import { Productos } from '../model/schemaProducto'

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }

    private getCliente = async (req:Request, res: Response) => {
        const dni = req.params.dni
        await db.conectarBD()
        .then(async (mensaje) => {
            const query = await Clientes.findOne({ dni: dni})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private getEmpleado = async (req:Request, res: Response) => {
        const dni = req.params.dni
        await db.conectarBD()
        .then(async (mensaje) => {
            const query = await Empleados.findOne({ dni: dni })
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private getProducto = async (req:Request, res: Response) => {
      const cBarra = req.params.cBarra
      await db.conectarBD()
      .then(async (mensaje) => {
          const query = await Productos.findOne({ cBarra: cBarra })
          res.json(query)
      })
      .catch((mensaje) => {
          res.send(mensaje)
      })
      await db.desconectarBD()
    }

    private getPedido = async (req:Request, res: Response) => {
      const dniCliente = req.params.dniCliente
      await db.conectarBD()
      .then(async (mensaje) => {
          const query = await Pedidos.findOne({ dniCliente: dniCliente })
          res.json(query)
      })
      .catch((mensaje) => {
          res.send(mensaje)
      })
      await db.desconectarBD()
    }

    private getLogin = async (req:Request, res: Response) => {
      const password = req.params.password
      const user = req.params.user
      await db.conectarBD()
      .then(async (mensaje) => {
          const query = await Login.findOne({ user: user, password: password })
          res.json(query)
      })
      .catch((mensaje) => {
          res.send(mensaje)
      })
      await db.desconectarBD()
    }

    private getClientes = async (req:Request, res: Response) => {
        await db.conectarBD()
        .then(async (mensaje) => {
            const query = await Clientes.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private getEmpleados = async (req:Request, res: Response) => {
        await db.conectarBD()
        .then(async (mensaje) => {
            const dni = req.params.dni
            const query = await Empleados.find({ tipoEmpleado: { $eq: "Empleado" } })
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private getManagers = async (req:Request, res: Response) => {
      await db.conectarBD()
      .then(async (mensaje) => {
          const dni = req.params.dni
          const query = await Empleados.find({ tipoEmpleado: { $eq: "Manager" } })
          res.json(query)
      })
      .catch((mensaje) => {
          res.send(mensaje)
      })
      await db.desconectarBD()
  }

  private getJoyas = async (req:Request, res: Response) => {
    await db.conectarBD()
    .then(async (mensaje) => {
        const cBarra = req.params.cBarra
        const query = await Productos.find({ tipoProducto: { $eq: "Joya" } })
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    await db.desconectarBD()
  }

  private getRopas = async (req:Request, res: Response) => {
    await db.conectarBD()
    .then(async (mensaje) => {
        const cBarra = req.params.cBarra
        const query = await Productos.find({ tipoProducto: { $eq: "Ropa" } })
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    await db.desconectarBD()
  }

  private getPedidos = async (req:Request, res: Response) => {
    await db.conectarBD()
    .then(async (mensaje) => {
        const dniCliente = req.params.dniCliente
        const query = await Pedidos.find({})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    await db.desconectarBD()
  }

    private postCliente = async (req: Request, res: Response) => {
        const { dni, nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, socio } = req.body
        await db.conectarBD()
        const dSchema={
            dni: dni,
            nombre: nombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            edad: edad,
            pais: pais,
            sexo: sexo,
            tlf: tlf,
            socio: socio
        }
        const oSchema = new Clientes(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private postEmpleado = async (req: Request, res: Response) => {
        const { dni, nombre, tipoEmpleado, tlf, departamento, horario, jornada, sueldo } = req.body
        await db.conectarBD()
        const dSchema={
            dni: dni,
            tipoEmpleado: tipoEmpleado,
            nombre: nombre,
            tlf: tlf,
            departamento: departamento,
            horario: horario,
            jornada: jornada,
            sueldo: sueldo
        }
        const oSchema = new Empleados(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private postManager = async (req: Request, res: Response) => {
        const { dni, nombre, tipoEmpleado, tlf, departamento, estudios, sueldo } = req.body
        await db.conectarBD()
        const dSchema={
            dni: dni,
            tipoEmpleado: tipoEmpleado,
            nombre: nombre,
            tlf: tlf,
            departamento: departamento,
            estudios: estudios,
            sueldo: sueldo
        }
        const oSchema = new Empleados(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private postJoya = async (req: Request, res: Response) => {
      const { cBarra, tipoProducto, marca, descripcion, material, piedraPreciosa, peso, precio } = req.body
      await db.conectarBD()
      const dSchema={
          cBarra: cBarra,
          tipoProducto: tipoProducto,
          marca: marca,
          descripcion: descripcion,
          material: material,
          piedraPreciosa: piedraPreciosa,
          peso: peso,
          precio: precio
      }
      const oSchema = new Productos(dSchema)
      await oSchema.save()
          .then( (doc: any) => res.send(doc))
          .catch( (err: any) => res.send('Error: '+ err)) 
      await db.desconectarBD()
    }

    private postRopa = async (req: Request, res: Response) => {
      const { cBarra, tipoProducto, marca, descripcion, talla, color, precio } = req.body
      await db.conectarBD()
      const dSchema={
          cBarra: cBarra,
          tipoProducto: tipoProducto,
          marca: marca,
          descripcion: descripcion,
          talla: talla,
          color: color,
          precio: precio
      }
      const oSchema = new Pedidos(dSchema)
      await oSchema.save()
          .then( (doc: any) => res.send(doc))
          .catch( (err: any) => res.send('Error: '+ err)) 
      await db.desconectarBD()
    }

    private postPedido = async (req: Request, res: Response) => {
      const { dniCliente, nPedido, objetos, fecha, importeTotal } = req.body
      await db.conectarBD()
      const dSchema={
          dniCliente: dniCliente,
          nPedido: nPedido,
          objetos: objetos,
          fecha: fecha,
          importeTotal: importeTotal
      }
      const oSchema = new Pedidos(dSchema)
      await oSchema.save()
          .then( (doc: any) => res.send(doc))
          .catch( (err: any) => res.send('Error: '+ err)) 
      await db.desconectarBD()
    }

    private postLogin = async (req: Request, res: Response) => {
      const { user, password } = req.body
      await db.conectarBD()
      const dSchema={
          user: user,
          password: password
      }
      const oSchema = new Login(dSchema)
      await oSchema.save()
          .then( (doc: any) => res.send(doc))
          .catch( (err: any) => res.send('Error: '+ err)) 
      await db.desconectarBD()
    }

    private putCliente = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const {dni} = req.params
            const { nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, socio } = req.body
            await Clientes.findOneAndUpdate(
              {
                dni: dni,
              },
              {
                dni: dni,
                nombre: nombre,
                primerApellido: primerApellido,
                segundoApellido: segundoApellido,
                edad: edad,
                pais: pais,
                sexo: sexo,
                tlf: tlf,
                socio: socio
              },
              {
                new: true,
              }
            )
              .then((docu: any) => res.send(docu))
              .catch((fail: any) => res.send(fail));
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
    
        db.desconectarBD();
    }

    private putEmpleado = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const {dni} = req.params
            const { nombre, tipoEmpleado, tlf, departamento, horario, jornada, sueldo } = req.body
            await Empleados.findOneAndUpdate(
              {
                dni: dni,
              },
              {
                dni: dni,
                tipoEmpleado: tipoEmpleado,
                nombre: nombre,
                tlf: tlf,
                departamento: departamento,
                horario: horario,
                jornada: jornada,
                sueldo: sueldo
              },
              {
                new: true,
              }
            )
              .then((docu: any) => res.send(docu))
              .catch((fail: any) => res.send(fail));
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
    
        db.desconectarBD();
    }

    private putManager = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const {dni} = req.params
            const { nombre, tipoEmpleado, tlf, departamento, estudios, sueldo } = req.body
            await Empleados.findOneAndUpdate(
              {
                dni: dni,
              },
              {
                dni: dni,
                tipoEmpleado: tipoEmpleado,
                nombre: nombre,
                tlf: tlf,
                departamento: departamento,
                estudios: estudios,
                sueldo: sueldo
              },
              {
                new: true,
              }
            )
              .then((docu: any) => res.send(docu))
              .catch((fail: any) => res.send(fail));
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
    
        db.desconectarBD();
    }

    private putRopa = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const {cBarra} = req.params
            const { tipoProducto, marca, descripcion, talla, color, precio } = req.body
            await Productos.findOneAndUpdate(
              {
                cBarra: cBarra,
              },
              {
                cBarra: cBarra,
                tipoProducto: tipoProducto,
                marca: marca,
                descripcion: descripcion,
                talla: talla,
                color: color,
                precio: precio
              },
              {
                new: true,
              }
            )
              .then((docu: any) => res.send(docu))
              .catch((fail: any) => res.send(fail));
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
    
        db.desconectarBD();
    }

    private putJoya = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const {cBarra} = req.params
            const { tipoProducto, marca, descripcion, material, piedraPreciosa, peso, precio } = req.body
            await Productos.findOneAndUpdate(
              {
                cBarra: cBarra,
              },
              {
                cBarra: cBarra,
                tipoProducto: tipoProducto,
                marca: marca,
                descripcion: descripcion,
                material: material,
                piedraPreciosa: piedraPreciosa,
                peso: peso,
                precio: precio
              },
              {
                new: true,
              }
            )
              .then((docu: any) => res.send(docu))
              .catch((fail: any) => res.send(fail));
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
    
        db.desconectarBD();
    }

    private putPedido = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const {dniCliente} = req.params
            const { nPedido, objetos, fecha, importeTotal } = req.body
            await Pedidos.findOneAndUpdate(
              {
                dniCliente: dniCliente,
              },
              {
                dniCliente: dniCliente,
                nPedido: nPedido,
                objetos: objetos,
                fecha: fecha,
                importeTotal: importeTotal
              },
              {
                new: true,
              }
            )
              .then((docu: any) => res.send(docu))
              .catch((fail: any) => res.send(fail));
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
    
        db.desconectarBD();
    }

    private deleteCliente = async (req: Request, res: Response) => {
        const dni  = req.params.dni
        await db.conectarBD()
        await Clientes.findOneAndDelete({ dni: dni })
            .then( (doc: any) => res.send('Borrado correcto'))
            .catch( (err: any) => res.send('Error: ' + err))
        await db.desconectarBD()
    }

    private deleteEmpleado = async (req: Request, res: Response) => {
        const dni  = req.params.dni
        await db.conectarBD()
        await Empleados.findOneAndDelete({ dni: dni })
            .then( (doc: any) => res.send('Borrado correcto'))
            .catch( (err: any) => res.send('Error: ' + err))
        await db.desconectarBD()
    }

    private deleteProducto = async (req: Request, res: Response) => {
        const cBarra  = req.params.cBarra
        await db.conectarBD()
        await Productos.findOneAndDelete({ cBarra: cBarra })
            .then( (doc: any) => res.send('Borrado correcto'))
            .catch( (err: any) => res.send('Error: ' + err))
        await db.desconectarBD()
    }

    private deletePedido = async (req: Request, res: Response) => {
        const dniCliente  = req.params.dniCliente
        await db.conectarBD()
        await Pedidos.findOneAndDelete({ dniCliente: dniCliente })
            .then( (doc: any) => res.send('Borrado correcto'))
            .catch( (err: any) => res.send('Error: ' + err))
        await db.desconectarBD()
    }

    misRutas() {
        // Clientes
        this._router.get('/getCliente/:dni', this.getCliente),
        this._router.get('/getClientes', this.getClientes),
        this._router.post('/postCliente', this.postCliente),
        this._router.put("/putCliente/:dni", this.putCliente),
        this._router.delete("/delCliente/:dni", this.deleteCliente),

        // Empleados
        this._router.get('/getEmpleado/:dni', this.getEmpleado),
        this._router.get('/getManagers', this.getManagers),
        this._router.get('/getEmpleados', this.getEmpleados),
        this._router.post('/postEmpleado', this.postEmpleado),
        this._router.post('/postManager', this.postManager),
        this._router.put('/putEmpleado/:dni', this.putEmpleado),
        this._router.put('/putManager/:dni', this.putManager),
        this._router.delete("/delEmpleado/:dni", this.deleteEmpleado),

        // Productos
        this._router.get('/getProducto/:cBarra', this.getProducto),
        this._router.get('/getJoyas', this.getJoyas),
        this._router.get('/getRopas', this.getRopas),
        this._router.post('/postJoya', this.postJoya),
        this._router.post('/postRopa', this.postRopa),
        this._router.put('/putJoya/:cBarra', this.putJoya),
        this._router.put('/putRopa/:cBarra', this.putRopa),
        this._router.delete("/delProducto/:cBarra", this.deleteProducto),

        // Pedidos
        this._router.get('/getPedido/:dniCliente', this.getPedido),
        this._router.get('/getPedidos', this.getPedidos),
        this._router.post('/postPedido', this.postPedido),
        this._router.put("/putPedido/:dniCliente", this.putPedido),
        this._router.delete("/delPedido/:dniCliente", this.deletePedido)

        // Login
        this._router.get('/getLogin/:user/:password', this.getLogin),
        this._router.post('/postLogin', this.postLogin)
      }

}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router