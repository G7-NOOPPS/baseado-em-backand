class veiculo {
    constructor(marca) {
        this.marca = marca;
        
    }
    buzina () {
        console.log("bibiiiiii!")
    }
}

class civic extens veiculo {
    constructor(marca, qPortas) {
        super(marca);
        this,qPortas = qPortas;
    }
};
const meuVeiculo = new Veiculo
console.log("marca do veiculo: ", meuVeiculo.marca )
meuVeiculo.buzinar()

const meuCarro = new veiculo("fiat", 4);
console.log("\n--- testando o carro ---")
console.log("marca do carro: ", meuVeiculo.marca)
console.log("quantidade de portas: ", meuCarro.quantidadedePortas);
meuCarro.buzinar();