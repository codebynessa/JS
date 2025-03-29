// crie um programa que solicite o nome do usuário e exiba a mensagem "Olá, [nome]" com a primeira letra do nome em maiúscula.
const nome = prompt("Digite seu nome: ");

const primeiraLetra = nome.slice(0, 1);
const primeiraLetraMaiuscula = primeiraLetra.toUpperCase();

var restoNome = nome.slice(1, nome.length);
restoNome = restoNome.toLowerCase();

const transformado = primeiraLetraMaiuscula + restoNome;

alert("Olá, " + transformado);