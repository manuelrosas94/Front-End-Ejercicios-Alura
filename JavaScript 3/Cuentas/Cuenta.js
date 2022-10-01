export class Cuenta{
    #cliente;
    #saldo;

    constructor(cliente, numero, agenda, saldo){
        if(this.constructor == Cuenta){
            throw new Error("NO se debe instanciar objetos de la clase");
        }
        this.numero = numero;
        this.agencia = agenda;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
//clase abstracta se debe extender, no se puede instanciar
    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        //metodo abstracto, exixste pero no hace nada
            throw new Error("Debe implementar el metodo de retirarDeCuenta en su clase");
    }

    _retirarDeCuenta(valor, comision) {//el " _ " es para definir que la funcion es privada
        valor = valor * (1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }


    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }

    prueba(){
        console.log("Metodo padre");
    }
}