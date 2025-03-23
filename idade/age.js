//Neste desafio, você criará uma função que nos diz
//quantos dias, semanas e meses nos restam se vivermos até os 90 anos.

function lifeInWeeks() {


    var age = parseInt(prompt("qual é a sua idade?")); //converte p num

    var ageRestante = 90 - age;
    var ageDays = ageRestante * 365;
    var ageWeeks = ageRestante * 52;
    var ageMonths = ageRestante * 12;


    alert("voce tem " + ageDays + " dias, " + ageWeeks + " semanas e " + ageMonths + " meses restantes.");



}

lifeInWeeks();