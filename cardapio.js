const cardapio = [ 
  {nome: "x- burguer", preco: 18.90, catetegoria:"lanche"},
  {nome: "batata-frita", preco: 9.50, categoria: "acompanhamneto"},
  {nome: "sprite", preco: 4.50, categoria: "bebida"},
  {nome: "milkshake", preco: 12.00, categoria: "sobremesa"}
]

const pedido = [];

console.log(cardapio[0].nome); 
console.log(cardapio[1].preco); 
console.log(cardapio[2].categoria); 

function exibirCardapio(lista) {
  console.log("===CARDAPIO===");
  console.log(`1. ${lista[0]} - R$ ${lista[0].preco}`)
  console.log(`2. ${lista[0]} - R$ ${lista[1].preco}`)
  console.log(`3. ${lista[0]} - R$ ${lista[2].preco}`)
  console.log(`4. ${lista[0]} - R$ ${lista[3].preco}`)
}

function calcularTotal(listaPedido) {
  let total = listaPedido[0].preco + listaPedido[1].preco;
  return total;
}