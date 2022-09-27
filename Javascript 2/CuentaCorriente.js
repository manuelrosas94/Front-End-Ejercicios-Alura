import { Cliente } from "./Cliente.js";

export class CuentaCorriente { //exportar la clase para otros archivos
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente, numero, agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0; //# para tratar a la variable como privada y no mostrar el valor
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;//this accede a la variable actual
        return this.#saldo;
    }

    retiroEnCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        this.#saldo;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
    }
}