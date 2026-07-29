let saldoJoao = 1000
let saldoCarlos = 500

const taxaJuros = 0.02
const saldoComJuros = saldoJoao * (taxaJuros)

const contajoao = {titular: "joao", saldo: saldoJoao};
const contaCarlos = {titular: "Carlos", saldo: saldoCarlos};

console.log(`${contajoao.titular} possui r$ ${contajoao.saldo}.`);
console.log(`${contaCarlos.titular} possui r$ ${contaCarlos.saldo}.`);

const contas = [contajoao, contaCarlos]

contas.forEach((conta) => {
    console.log(`${conta.titular} tem R$ ${conta.saldo}`);
});

contajoao.saldo = -5000;
console.log("saldo alterado sem controle: ", contajoao.saldo)