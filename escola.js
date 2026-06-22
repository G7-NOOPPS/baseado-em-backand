const DadosDoAluno = require('./aluno.json');
console.log('--- SISTEMA ESCOLAR ---');
console.log(`nome: ${DadosDoAluno.nome}`);
console.log(`curso: ${DadosDoAluno.curso}`);
console.log(`idade: ${DadosDoAluno.idade}`);

if (DadosDoAluno.bolsista) {
    console.log("status:esse aluno possui isençao de mensalidade")
} else {
    console.log("estatus: mensalidade padrao")
}
