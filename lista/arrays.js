var guestList = ["John", "Paul", "George", "Ringo"];

var nome = prompt("Digite seu nome: ");
if (guestList.includes(nome)) {
    console.log("Welcome " + nome + "!");
}
else {
    alert("Sorry, " + nome + ", you are not on the guest list.");
}
