/*Importacion de clases*/ 
import {Cliente} from "./Cliente.js"
import {CuentaCorriente} from "./CuentaCorriente.js" //importar la clase de otros archivos

const cliente =  new Cliente("Manuel", "132545", "5487sc8");
const cliente2 =  new Cliente( "Jose", "548131", "812dgs4");
//console.log(cliente);
//console.log(cliente2);

const cuentaDeManuel = new CuentaCorriente(cliente, "1", "001");
const cuentaDeJose = new CuentaCorriente(cliente2, "2", "002");

//cuentaDeManuel.#saldo = 10;
let saldo = cuentaDeManuel.verSaldo();
//console.log("El saldo actual es " + saldo);

saldo = cuentaDeManuel.depositoEnCuenta(200);

console.log(CuentaCorriente.cantidadCuentas);


//let parametroValor = 100;

/*
console.log("Parametro valor", parametroValor);
cuentaDeManuel.transferirParaCuenta(parametroValor,cuentaDeJose);
console.log("Parametro valor", parametroValor);

const saldoMaria = cuentaDeJose.verSaldo();

console.log("Cuenta de Jose", cuentaDeJose);

console.log("El saldo actual es (cuentaDeJose) "  + saldoMaria);

const saldoManuel = cuentaDeManuel.verSaldo();
console.log("El saldo actual es (cuentaDeManuel) "  + saldoManuel);


/*
const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "123456";
cliente1.rfcCliente = "1sa154";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "123456";
cuentaCorriente1.saldo = 1000;
cuentaCorriente1.agencia = "1001";

const cliente2 = new Cliente();
cliente2.nombreCliente = "Jose";
cliente2.dniCliente = "123321";
cliente2.rfcCliente = "5dv5646";

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numero = "123457";
cuentaCorriente2.saldo = 2000;
cuentaCorriente2.agencia = "1002";


console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.retiroEnCuenta(150);
console.log(cuentaCorriente2.saldo);
*/
