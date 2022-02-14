"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const schemaCliente_1 = require("../model/schemaCliente");
const schemaEmpleado_1 = require("../model/schemaEmpleado");
const schemaLogin_1 = require("../model/schemaLogin");
const schemaPedido_1 = require("../model/schemaPedido");
const schemaProducto_1 = require("../model/schemaProducto");
class DatoRoutes {
    constructor() {
        this.getCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dni = req.params.dni;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaCliente_1.Clientes.findOne({ dni: dni });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dni = req.params.dni;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaEmpleado_1.Empleados.findOne({ dni: dni });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cBarra = req.params.cBarra;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaProducto_1.Productos.findOne({ cBarra: cBarra });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dniCliente = req.params.dniCliente;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaPedido_1.Pedidos.findOne({ dniCliente: dniCliente });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getLogin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const password = req.params.password;
            const user = req.params.user;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaLogin_1.Login.findOne({ user: user, password: password });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield schemaCliente_1.Clientes.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const dni = req.params.dni;
                const query = yield schemaEmpleado_1.Empleados.find({ tipoEmpleado: { $eq: "Empleado" } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getManagers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const dni = req.params.dni;
                const query = yield schemaEmpleado_1.Empleados.find({ tipoEmpleado: { $eq: "Manager" } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getJoyas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const cBarra = req.params.cBarra;
                const query = yield schemaProducto_1.Productos.find({ tipoProducto: { $eq: "Joya" } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getRopas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const cBarra = req.params.cBarra;
                const query = yield schemaProducto_1.Productos.find({ tipoProducto: { $eq: "Ropa" } });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getPedidos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const dniCliente = req.params.dniCliente;
                const query = yield schemaPedido_1.Pedidos.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.postCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, socio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                dni: dni,
                nombre: nombre,
                primerApellido: primerApellido,
                segundoApellido: segundoApellido,
                edad: edad,
                pais: pais,
                sexo: sexo,
                tlf: tlf,
                socio: socio
            };
            const oSchema = new schemaCliente_1.Clientes(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, tipoEmpleado, tlf, departamento, horario, jornada, sueldo } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                dni: dni,
                tipoEmpleado: tipoEmpleado,
                nombre: nombre,
                tlf: tlf,
                departamento: departamento,
                horario: horario,
                jornada: jornada,
                sueldo: sueldo
            };
            const oSchema = new schemaEmpleado_1.Empleados(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postManager = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, tipoEmpleado, tlf, departamento, estudios, sueldo } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                dni: dni,
                tipoEmpleado: tipoEmpleado,
                nombre: nombre,
                tlf: tlf,
                departamento: departamento,
                estudios: estudios,
                sueldo: sueldo
            };
            const oSchema = new schemaEmpleado_1.Empleados(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postJoya = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { cBarra, tipoProducto, marca, descripcion, material, piedraPreciosa, peso, precio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                cBarra: cBarra,
                tipoProducto: tipoProducto,
                marca: marca,
                descripcion: descripcion,
                material: material,
                piedraPreciosa: piedraPreciosa,
                peso: peso,
                precio: precio
            };
            const oSchema = new schemaProducto_1.Productos(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postRopa = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { cBarra, tipoProducto, marca, descripcion, talla, color, precio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                cBarra: cBarra,
                tipoProducto: tipoProducto,
                marca: marca,
                descripcion: descripcion,
                talla: talla,
                color: color,
                precio: precio
            };
            const oSchema = new schemaPedido_1.Pedidos(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dniCliente, nPedido, objetos, fecha, importeTotal } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                dniCliente: dniCliente,
                nPedido: nPedido,
                objetos: objetos,
                fecha: fecha,
                importeTotal: importeTotal
            };
            const oSchema = new schemaPedido_1.Pedidos(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postLogin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { user, password } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                user: user,
                password: password
            };
            const oSchema = new schemaLogin_1.Login(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.putCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { dni } = req.params;
                const { nombre, primerApellido, segundoApellido, edad, pais, sexo, tlf, socio } = req.body;
                yield schemaCliente_1.Clientes.findOneAndUpdate({
                    dni: dni,
                }, {
                    dni: dni,
                    nombre: nombre,
                    primerApellido: primerApellido,
                    segundoApellido: segundoApellido,
                    edad: edad,
                    pais: pais,
                    sexo: sexo,
                    tlf: tlf,
                    socio: socio
                }, {
                    new: true,
                })
                    .then((docu) => res.send(docu))
                    .catch((fail) => res.send(fail));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.putEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { dni } = req.params;
                const { nombre, tipoEmpleado, tlf, departamento, horario, jornada, sueldo } = req.body;
                yield schemaEmpleado_1.Empleados.findOneAndUpdate({
                    dni: dni,
                }, {
                    dni: dni,
                    tipoEmpleado: tipoEmpleado,
                    nombre: nombre,
                    tlf: tlf,
                    departamento: departamento,
                    horario: horario,
                    jornada: jornada,
                    sueldo: sueldo
                }, {
                    new: true,
                })
                    .then((docu) => res.send(docu))
                    .catch((fail) => res.send(fail));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.putManager = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { dni } = req.params;
                const { nombre, tipoEmpleado, tlf, departamento, estudios, sueldo } = req.body;
                yield schemaEmpleado_1.Empleados.findOneAndUpdate({
                    dni: dni,
                }, {
                    dni: dni,
                    tipoEmpleado: tipoEmpleado,
                    nombre: nombre,
                    tlf: tlf,
                    departamento: departamento,
                    estudios: estudios,
                    sueldo: sueldo
                }, {
                    new: true,
                })
                    .then((docu) => res.send(docu))
                    .catch((fail) => res.send(fail));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.putRopa = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { cBarra } = req.params;
                const { tipoProducto, marca, descripcion, talla, color, precio } = req.body;
                yield schemaProducto_1.Productos.findOneAndUpdate({
                    cBarra: cBarra,
                }, {
                    cBarra: cBarra,
                    tipoProducto: tipoProducto,
                    marca: marca,
                    descripcion: descripcion,
                    talla: talla,
                    color: color,
                    precio: precio
                }, {
                    new: true,
                })
                    .then((docu) => res.send(docu))
                    .catch((fail) => res.send(fail));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.putJoya = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { cBarra } = req.params;
                const { tipoProducto, marca, descripcion, material, piedraPreciosa, peso, precio } = req.body;
                yield schemaProducto_1.Productos.findOneAndUpdate({
                    cBarra: cBarra,
                }, {
                    cBarra: cBarra,
                    tipoProducto: tipoProducto,
                    marca: marca,
                    descripcion: descripcion,
                    material: material,
                    piedraPreciosa: piedraPreciosa,
                    peso: peso,
                    precio: precio
                }, {
                    new: true,
                })
                    .then((docu) => res.send(docu))
                    .catch((fail) => res.send(fail));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.putPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const { dniCliente } = req.params;
                const { nPedido, objetos, fecha, importeTotal } = req.body;
                yield schemaPedido_1.Pedidos.findOneAndUpdate({
                    dniCliente: dniCliente,
                }, {
                    dniCliente: dniCliente,
                    nPedido: nPedido,
                    objetos: objetos,
                    fecha: fecha,
                    importeTotal: importeTotal
                }, {
                    new: true,
                })
                    .then((docu) => res.send(docu))
                    .catch((fail) => res.send(fail));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dni = req.params.dni;
            yield database_1.db.conectarBD();
            yield schemaCliente_1.Clientes.findOneAndDelete({ dni: dni })
                .then((doc) => res.send('Borrado correcto'))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.deleteEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dni = req.params.dni;
            yield database_1.db.conectarBD();
            yield schemaEmpleado_1.Empleados.findOneAndDelete({ dni: dni })
                .then((doc) => res.send('Borrado correcto'))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.deleteProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cBarra = req.params.cBarra;
            yield database_1.db.conectarBD();
            yield schemaProducto_1.Productos.findOneAndDelete({ cBarra: cBarra })
                .then((doc) => res.send('Borrado correcto'))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.deletePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dniCliente = req.params.dniCliente;
            yield database_1.db.conectarBD();
            yield schemaPedido_1.Pedidos.findOneAndDelete({ dniCliente: dniCliente })
                .then((doc) => res.send('Borrado correcto'))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
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
            this._router.delete("/delPedido/:dniCliente", this.deletePedido);
        // Login
        this._router.get('/getLogin/:user/:password', this.getLogin),
            this._router.post('/postLogin', this.postLogin);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
