class ContaBancaria {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor de depósito inválido.");
      return;
    }
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor de saque inválido.");
      return;
    }
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente.");
      return;
    }
    this.#saldo -= valor;
  }

 
  getSaldo() {
    return this.#saldo;
  }
}

const contas = [new ContaBancaria("João", 1000), new ContaBancaria("Paula", 5000)];