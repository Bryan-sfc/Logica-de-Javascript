console.log("<1. Formatação de CPF>");
//Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) 
// e retorna no formato de CPF (123.456.789-01) usando slice e concatenação.

var prompt = require('prompt-sync')();

var CPF;

CPF = prompt("Digite seu CPF, 11 dígitos: ")

console.log(`CPF: ${formataCPF(CPF)}`);

function formataCPF(CPF){
  //realizar a formatação...
    return CPF.slice(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}