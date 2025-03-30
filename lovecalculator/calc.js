prompt("Whats is your name? ");
prompt("Whats is their name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //arredondar para baixo e somar 1

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%, you are a great match!");
}
if (loveScore > 30 && loveScore < 70){
    alert("Your love score is " + loveScore + "%");
}
else {
    alert("Your love score is " + loveScore + "%, you go together like oil and water!");
}
