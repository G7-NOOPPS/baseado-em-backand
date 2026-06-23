const DadosDoAluno1 = require('./aluno.json');
const DadosDoAluno2 = require('./aluno2.json');
console.log('--- SISTEMA ESCOLAR ---');

console.log('\n--- ALUNO 1 ---');
console.log(`nome: ${DadosDoAluno1.nome}`);
console.log(`curso: ${DadosDoAluno1.curso}`);
console.log(`idade: ${DadosDoAluno1.idade}`);

if (DadosDoAluno1.bolsista) {
    console.log("status: esse aluno possui isençao de mensalidade")
} else {
    console.log("status: mensalidade padrao")
}

console.log('\n--- ALUNO 2 ---');
console.log(`nome: ${DadosDoAluno2.nome}`);
console.log(`curso: ${DadosDoAluno2.curso}`);
console.log(`idade: ${DadosDoAluno2.idade}`);

if (DadosDoAluno2.bolsista) {
    console.log("status: esse aluno possui isençao de mensalidade")
} else {
    console.log("status: mensalidade padrao")
}