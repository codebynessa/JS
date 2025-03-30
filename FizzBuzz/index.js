//Escreva um programa que imprima os números de 1 a 100. 
// Mas para múltiplos de três imprima “Fizz” em vez do número e 
// para os múltiplos de cinco imprima “Buzz”. Para números que são
//  múltiplos de três e cinco imprima “FizzBuzz”.
var output = [];

function fizzBuzz() {

    for(var count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 ===0) {
        output.push("Fizz");
    }
    else if (count % 5 ===0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    count++;
}
}