// crie um programa que solicite o nome do usuário e exiba a mensagem "Olá, [nome]" com a primeira letra do nome em maiúscula.
const name = prompt("Digite seu nome: ");

const primeiraLetra = name.slice(0, 1);
const primeiraLetraMaiuscula = primeiraLetra.toUpperCase();

var restoNome = name.slice(1, name.length);
restoNome = restoNome.toLowerCase();

const transformado = primeiraLetraMaiuscula + restoNome;

alert("Olá, " + transformado);