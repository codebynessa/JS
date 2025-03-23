function lifeInWeeks() {


    var age = parseInt(prompt("qual é a sua idade?")); //converte p num

    var ageConvertida = 90 - age;
    var ageDays = ageConvertida * 365;
    var ageWeeks = ageConvertida * 52;
    var ageMonths = ageConvertida * 12;


    alert("voce tem " + ageDays + " dias, " + ageWeeks + " semanas e " + ageMonths + " meses restantes.");



}

lifeInWeeks();