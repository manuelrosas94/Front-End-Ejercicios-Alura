/*Importación de clases*/
import {Cliente} from './Cliente.js'
// import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
// import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
// import { Cuenta } from './Cuentas/Cuenta.js';
// import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


// console.log(empleado.verBonificacion());
// console.log(gerente.verBonificacion());
// console.log(director.verBonificacion());




//const cliente2 = new Cliente('Jose','16979808','8989');


const empleado = new Empleado("Santiago", "123456", 10000);
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado,"12345"));

const gerente = new Gerente("Laura", "123457", 12000);
gerente.asignarClave("12339");
console.log(SistemaAutenticacion.login(gerente,"12339"));

//const director = new Director("Maria", "123458", 15000);


const cliente = new Cliente('Manuel','13804050','123224');
cliente.asignarClave("01111");
console.log(SistemaAutenticacion.login(cliente,"01111"));


// const cuentaDeManuel = new CuentaCorriente(cliente, '1', '001');
// const cuentaDeJose = new CuentaCorriente(cliente2,'2','002');

// const CuentaAhorroManuel = new CuentaAhorro(cliente, "9985", "001", 0);

// console.log(cuentaDeManuel);
// cuentaDeManuel.depositoEnCuenta(150);
// console.log(cuentaDeManuel.verSaldo());
// cuentaDeManuel.retirarDeCuenta(70);
// console.log(cuentaDeManuel.verSaldo());
// console.log(CuentaAhorroManuel);
// CuentaAhorroManuel.depositoEnCuenta(200);
// console.log(CuentaAhorroManuel.verSaldo());
// CuentaAhorroManuel.retirarDeCuenta(120);
// console.log(CuentaAhorroManuel.verSaldo());

// cuentaDeManuel.prueba();
// console.log(CuentaAhorroManuel);

// const cuentaSimple = new Cuenta(cliente, "098", "003", 100);
// console.log(cuentaSimple);

// const cuentaNominaManuel = new CuentaNomina(cliente, "9985", "001", 100);
// console.log(cuentaNominaManuel);
// cuentaNominaManuel.depositoEnCuenta(150);
// console.log(cuentaNominaManuel.verSaldo());
// cuentaNominaManuel.retirarDeCuenta(50);
// console.log(cuentaNominaManuel.verSaldo());

// let saldo = cuentaDeManuel.verSaldo(); 

// saldo = cuentaDeManuel.depositoEnCuenta(150);
// cuentaDeManuel.transferirParaCuenta(saldo, cuentaDeJose);

// const saldoJose = cuentaDeJose.verSaldo();

// console.log('Cuenta de Jose',cuentaDeJose);

// console.log('El Saldo actual (cuentaJose) '+saldoJose);

// const saldoManuel = cuentaDeManuel.verSaldo();
// console.log('El Saldo actual (cuentaManuel) '+saldoManuel);
// console.log(CuentaCorriente.cantidadCuentas);

// console.log(CuentaCorriente.cantidadCuentas);




