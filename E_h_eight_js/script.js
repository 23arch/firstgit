// Erstelle eine Zufallszahl zwischen 5 und 10
let random = Math.round(Math.random() * 5) + 5;
console.log(random);
// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// Wenn der Wert 7 ist gib aus Seven
// Wenn der Wert 6 ist gib aus Six
// Wenn der Wert 5 ist gib aus Five

switch (random) {
    case 10:
        console.log("Ten");
        break;
    case 9:
        console.log("Nine");
        break;
    case 8:
        console.log("Eight");
        break;
    case 7:
        console.log("Seven");
        break;
    case 6:
        console.log("Six");
        break;
    case 5:
        console.log("Five");
        break;
        // default console.log("Smaller than 5 bigger than 10") break; könnte man schreiben wenn Zahlen zwischen 0 und 100 generiert wären
}