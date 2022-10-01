import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta { //extendes la exportacion hacia otra clase para que use todo lo qe esta en su codigo
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0); //super toma los atributos de la clase padre
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 5);
    }
}