const nomeCompleto = "João Silva Sauro";
const numeroMatricula = 2024001
const emailContato = "joao.silva@escola.com"
const dataNascimento = "2010-05-15"
const statusMatricula = "Ativa"

let notaMatematica = 8
let notaPortuguês = 6
let notaGeo = 8
let notaHistoria = 7

let somaDasnotas = notaMatematica + notaPortuguês + notaGeo + notaHistoria
let mediaFinal = somaDasnotas / 4

console.log (`a nota dele em matematica e ${notaMatematica} e a nota em português e ${notaPortuguês} e a media dessas notas é ${mediaFinal}`)

console.log ( `
    o nome completo dele é ${nomeCompleto}, ele nasceu em ${dataNascimento}, o email de contato é ${emailContato},
     o número de matrícula é ${numeroMatricula} e a matrícula dele ainda tá ${statusMatricula}`)